import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from 'nestjs-pino';
import { Env } from '@/shared/utils/validate-env';
import { Headers } from '@/domain/constants/header';
import { RedirectMiddleware } from '@api/middlewares/redirect.middleware';
import { SetupScalar } from '@infra/configurations/scalar.config';

export const bootstrap = async (app: NestExpressApplication) => {
  const logger = app.get(Logger);
  const configService = app.get(ConfigService<Env>);
  const redirectMiddleware = new RedirectMiddleware();
  app.use(redirectMiddleware.use.bind(redirectMiddleware));
  app.setGlobalPrefix('/api/v1');

  app.enableCors({
    credentials: true,
    origin: '*',
    // configService.get('ALLOW_CORS_URL'),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    exposedHeaders: [Headers.HeaderPagination as string],
  });

  app.useLogger(logger);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  SetupScalar(app);

  await app.listen(configService.get('PORT')!, () => {
    logger.log(`App listen at port ${configService.get('PORT')} 🚀`);
  });
};
