import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CommunityEventActiveDiscordDto } from '../community-event-active-discord.dto';

export class CommunityEventsActiveDiscordGetResponseDto {
  @ApiProperty({
    required: true,
    description: 'List of active events',
    type: [CommunityEventActiveDiscordDto],
  })
  @IsArray()
  events: CommunityEventActiveDiscordDto[];
}
