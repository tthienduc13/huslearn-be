import { Headers } from '@/domain/constants/header';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';

export interface PaginationMetadata {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

export const SetPaginationHeader = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse<Response>();
    return (pagination: PaginationMetadata) => {
      response.setHeader(Headers.HeaderPagination, JSON.stringify(pagination));
    };
  },
);
