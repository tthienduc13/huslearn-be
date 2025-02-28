import { AuthService } from '@/application/services/auth/auth.service';
import { Controller } from '@nestjs/common';

@Controller('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
