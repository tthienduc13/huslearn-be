import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from '@api/modules/auth.module';
import { ThrottleModule } from '@shared/modules/throttle.module';
import { LoggerModule } from '@shared/modules/logger.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from '@shared/utils/validate-env';
import { UserModule } from '@api/modules/user.module';
import { PaginationMiddleware } from '@api/middlewares/pagination.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '@shared/guards/role.guard';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ThrottleModule,
    LoggerModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PaginationMiddleware).forRoutes('*');
  }
}
