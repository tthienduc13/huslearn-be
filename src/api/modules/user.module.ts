import { Module } from '@nestjs/common';
import { UserController } from '@api/controllers/user.controller';
import { UserService } from '@/application/services/user.service';
import { PrismaService } from '@/infra/persistence/prisma/prisma.service';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
