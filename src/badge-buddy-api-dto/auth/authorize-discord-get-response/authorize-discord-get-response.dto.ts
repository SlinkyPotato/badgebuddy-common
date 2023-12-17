import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class AuthorizeDiscordGetResponseDto {
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    description: 'URL to redirect to',
    example: 'https://discord.com/',
  })
  authorizeUrl: string;
}
