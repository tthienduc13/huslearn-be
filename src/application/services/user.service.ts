import { PrismaService } from '@/infra/persistence/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { RegisterRequestModel } from '@application/models/auth/request/register.model';
import { hashString } from '@/shared/utils/bcrypt';
import { Pagination } from '@/shared/models/pagination.model';
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from '@/domain/constants/pagination';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllUsers(pagination: Pagination) {
    const page = pagination.page ?? DEFAULT_PAGE_NUMBER;
    const limit = pagination.limit ?? DEFAULT_PAGE_SIZE;
    const skip = (page - 1) * limit;

    const [totalCount, users] = await Promise.all([
      this.prismaService.user.count(),
      this.prismaService.user.findMany({ skip, take: limit }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      data: users,
      pagination: {
        totalCount,
        pageSize: limit,
        currentPage: page,
        totalPages,
      },
    };
  }

  async create(req: RegisterRequestModel) {
    const { password, identifier } = req;
    const hashedPassword = await hashString(password);
    return await this.prismaService.user.create({
      data: {
        password: hashedPassword,
        email: identifier,
        username: identifier.split('@')[0],
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
