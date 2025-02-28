import { UserService } from '@/application/services/user.service';
import {
  PaginationMetadata,
  SetPaginationHeader,
} from '@/shared/decorators/paginatin.decorator';
import { Pagination } from '@/shared/models/pagination.model';
import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(
    @Query() pagination: Pagination,
    @Res() res: Response,
    @SetPaginationHeader()
    setPaginationHeader: (pagination: PaginationMetadata) => void,
  ) {
    const result = await this.userService.findAllUsers(pagination);
    setPaginationHeader(result.pagination);

    return res.json(result.data);
  }
}
