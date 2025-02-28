import { Module } from '@nestjs/common';
import { AuthModule } from '@api/modules/auth.module';
import { ThrottleModule } from '@shared/modules/throttle.module';
import { LoggerModule } from '@shared/modules/logger.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from '@shared/utils/validate-env';

@Module({
  providers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    ThrottleModule,
    LoggerModule,
    AuthModule,
  ],
})
export class AppModule {}
