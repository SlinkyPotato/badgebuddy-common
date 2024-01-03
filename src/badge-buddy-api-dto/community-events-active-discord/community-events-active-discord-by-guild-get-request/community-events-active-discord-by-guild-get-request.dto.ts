import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class CommunityEventsActiveDiscordByGuildGetRequestDto {
  @IsNumberString()
  @ApiProperty({
    description: 'The snowflake ID of the guild',
  })
  guildSId: string;
}
