import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class DiscordCommunityEventPatchRequestDto {
  @ApiProperty({
    description: 'The snowflake ID of the guild',
  })
  @IsNumberString()
  guildSId: string;

  @ApiProperty({
    description: 'The snowflake ID of the tracking voice channel',
  })
  @IsNumberString()
  voiceChannelSId: string;

  @ApiProperty({
    required: false,
    description: 'The links url to the POAPs of the event',
  })
  @IsString()
  @IsOptional()
  poapLinksUrl?: string;
}
