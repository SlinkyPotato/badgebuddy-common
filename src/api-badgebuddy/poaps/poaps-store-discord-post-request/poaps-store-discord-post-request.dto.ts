import { IsString, IsUrl, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsStoreDiscordPostRequestDto {
  @IsString()
  @IsUUID()
  @ApiProperty({
    description: 'Community event ID',
    example: 'b0b1b2b3-b4b5-b6b7-b8b9-babcbdbebf00',
  })
  communityEventId: string;

  @IsString()
  @IsUrl({
    require_protocol: true,
    require_valid_protocol: true,
    protocols: ['https'],
    host_whitelist: ['discord.com', 'discordapp.com', 'cdn.discordapp.com'],
  })
  @ApiProperty({
    description: 'A downloadable link to a list of POAP claim codes',
    example: 'https://cdn.discordapp.com/attachments/',
  })
  poapClaimsUrl: string;
}
