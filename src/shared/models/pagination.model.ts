import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class Pagination {
  @ApiProperty({
    description: 'Page number for request',
    required: false,
    default: 1,
    example: 1,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    description: 'Number of records per page for request',
    required: false,
    default: 10,
    example: 10,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Min(1)
  limit?: number = 10;
}
