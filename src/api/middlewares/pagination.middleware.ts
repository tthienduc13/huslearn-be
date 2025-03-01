import { PaginationMetadata } from '@/shared/decorators/pagination.decorator';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.setPagination = (pagination: PaginationMetadata) => {
      res.setHeader('x-pagination', JSON.stringify(pagination));
    };
    next();
  }
}
