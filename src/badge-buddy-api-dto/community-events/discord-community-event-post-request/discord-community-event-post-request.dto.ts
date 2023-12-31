import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumberString,
  IsOptional,
  IsISO8601,
} from 'class-validator';

export class DiscordCommunityEventPostRequestDto {
  @ApiProperty({
    description: 'The snowflake ID of the guild',
  })
  @IsNumberString()
  guildSId: string;

  @ApiProperty({
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
    description: 'The title of the event',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The end date of the event',
  })
  @IsISO8601()
  endDate: string;

  @ApiProperty({
    required: false,
    description: 'The description of the event',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    required: false,
    description: 'The links url to the POAPs of the event',
  })
  @IsString()
  @IsOptional()
  poapLinksUrl?: string;
}
