import { AuthService } from '@application/services/auth/auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from '@api/controllers/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
