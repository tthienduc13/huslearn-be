import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule as PinoModule } from 'nestjs-pino';
import { Env } from '@shared/utils/validate-env';

@Module({
  imports: [
    PinoModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env>) => ({
        pinoHttp: {
          quietReqLogger: true,
          quietResLogger: true,
          transport: {
            target:
              config.get('NODE_ENV') !== 'production' ? 'pino-pretty' : '',
          },
        },
      }),
    }),
  ],
})
export class LoggerModule {}
