import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class AuthorizeGoogleGetResponseDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'URL to redirect to',
    example: 'https://accounts.google.com',
  })
  authorizeUrl: string;
}
