import { AuthService } from '@/application/services/auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from '@api/controllers/auth.controller';
import { UserService } from '@/application/services/user.service';
import { PrismaService } from '@/infra/persistence/prisma/prisma.service';

@Module({
  providers: [AuthService, UserService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
