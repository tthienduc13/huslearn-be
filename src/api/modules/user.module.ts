import { Module } from '@nestjs/common';
import { UserController } from '@api/controllers/user.controller';
import { UserService } from '@/application/services/user.service';
import { PrismaService } from '@/infra/persistence/prisma/prisma.service';
import { UserProfile } from '@/application/mappers/user.profile';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  providers: [UserService, PrismaService, UserProfile, AutomapperModule],
  controllers: [UserController],
})
export class UserModule {}
