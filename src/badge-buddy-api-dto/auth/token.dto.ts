import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TokenDto {
  @IsString()
  @ApiProperty({
    description: 'Access token or refresh token.',
    enum: ['access', 'refresh'],
    type: String,
  })
  token: string;

  @IsString()
  @ApiProperty({
    description: 'The token type.',
    type: String,
  })
  type: string;

  @IsString()
  @ApiProperty({
    description: 'The token expiration in seconds.',
    type: Number,
  })
  expiresIn: number;
}
