import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumberString, IsOptional, IsISO8601 } from 'class-validator';

export class DiscordCommunityEventPostRequestDto {
  @ApiProperty({
    required: true,
    description: 'The snowflake ID of the guild',
  })
  @IsNumberString()
  guildSId: string;

  @ApiProperty({
    required: true,
    description: 'The snowflake ID of the organizer',
  })
  @IsNumberString()
  organizerSId: string;

  @ApiProperty({
    description: 'The snowflake ID of the tracking voice channel',
  })
  @IsNumberString()
  voiceChannelSId: string;

  @ApiProperty({
    required: true,
    description: 'The title of the event',
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
    description: 'The description of the event',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    required: true,
    description: 'The end date of the event',
  })
  @IsISO8601()
  endDate: string;
}
