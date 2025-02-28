// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Response } from 'express';

declare module 'express' {
  export interface Response {
    setPagination: (pagination: PaginationMetadata) => void;
  }
}
