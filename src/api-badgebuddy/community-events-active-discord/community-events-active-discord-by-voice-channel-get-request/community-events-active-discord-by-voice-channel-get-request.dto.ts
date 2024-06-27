import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CommunityEventsActiveDiscordByVoiceChannelGetRequestDto {
  @IsString()
  @ApiProperty({
    description: 'The snowflake ID of the voice channel',
  })
  voiceChannelSId: string;
}
