import { IsArray } from 'class-validator';
import { DiscordActiveCommunityEventDto } from './discord-active-community-event.dto';
import { ApiProperty } from '@nestjs/swagger';

export class DiscordActiveCommunityEventsGetResponseDto {
  @ApiProperty({
    required: true,
    description: 'List of active events',
    type: [DiscordActiveCommunityEventDto],
  })
  @IsArray()
  events: DiscordActiveCommunityEventDto[];
}
