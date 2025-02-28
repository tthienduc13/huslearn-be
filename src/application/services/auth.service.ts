import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { UserService } from '@application/services/user.service';
import { RegisterRequestModel } from '../models/auth/request/register.model';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(req: RegisterRequestModel) {
    const user = await this.userService.findByEmail(req.identifier);
    if (user) throw new BadRequestException('User already exists');
    const newUser = await this.userService.create(req);
    if (!newUser) throw new ConflictException('User cannot be created');
    return newUser.id;
  }
}
