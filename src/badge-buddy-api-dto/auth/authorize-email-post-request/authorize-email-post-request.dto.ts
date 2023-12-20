import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthorizeEmailPostRequestDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email address',
    type: String,
  })
  email: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The state of the authorization request',
    type: String,
  })
  state?: string;
}
