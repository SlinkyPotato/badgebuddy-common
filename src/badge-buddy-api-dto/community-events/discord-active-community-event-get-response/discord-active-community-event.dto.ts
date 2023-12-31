import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumberString,
  IsISO8601,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class DiscordActiveCommunityEventDto {
  @ApiProperty({
    description: 'The ID of the event',
  })
  @IsString()
  communityEventId: string;

  @ApiProperty({
    description: 'The title of the event',
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: false,
    description: 'The description of the event',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The ID of the guild',
  })
  @IsNumberString()
  guildSId: string;

  @ApiProperty({
    description: 'The ID of the voice channel',
  })
  @IsNumberString()
  voiceChannelSId: string;

  @ApiProperty({
    description: 'The ID of the organizer',
  })
  @IsNumberString()
  organizerSId: string;

  @ApiProperty({
    description: 'The start date of the event',
  })
  @IsISO8601()
  startDate: Date;

  @ApiProperty({
    description: 'The end date of the event',
  })
  @IsISO8601()
  endDate: Date;

  @IsNumber()
  @ApiProperty({
    description: 'The number of available poaps',
  })
  availablePOAPs = 0;
}
