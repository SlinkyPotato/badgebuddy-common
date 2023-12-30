import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthorizeEmailPostResponseDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
      description: 'The state of the request',
      type: String,
  })
  state?: string;
}