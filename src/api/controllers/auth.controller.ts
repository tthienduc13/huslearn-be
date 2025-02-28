import { RegisterRequestModel } from '@/application/models/auth/request/register.model';
import { AuthService } from '@/application/services/auth.service';
import { Public } from '@/shared/decorators/public.decorator';
import { ResponseMessage } from '@/shared/decorators/reponse-message.decorator';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @ResponseMessage('User registered successfully')
  async register(@Body() req: RegisterRequestModel) {
    return this.authService.register(req);
  }
}
