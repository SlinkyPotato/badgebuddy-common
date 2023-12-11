import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class DiscordCommunityEventPatchRequestDto {

  @ApiProperty({
    required: true,
    description: 'The snowflake ID of the guild',
  })
  @IsNumberString()
  guildSId: string;

  @ApiProperty({
    description: 'The snowflake ID of the tracking voice channel',
  })
  @IsNumberString()
  voiceChannelSId: string;
}
