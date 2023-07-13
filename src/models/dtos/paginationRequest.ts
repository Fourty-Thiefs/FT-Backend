import { ApiProperty } from '@nestjs/swagger';

export class PaginationRequestDto {
  @ApiProperty({
    default: 1,
    minimum: 1,
    description: 'Page Index',
  })
  pageIndex: number;

  @ApiProperty({
    default: 1,
    minimum: 1,
    description: 'Page Size',
  })
  pageSize: number;
}
