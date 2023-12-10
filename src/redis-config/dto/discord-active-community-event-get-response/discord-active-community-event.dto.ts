import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumberString, IsISO8601 } from 'class-validator';

export class DiscordActiveCommunityEventDto {
  @ApiProperty({
    required: true,
    description: 'The ID of the event',
  })
  @IsString()
  communityEventId: string;

  @ApiProperty({
    required: true,
    description: 'The title of the event',
  })
  @IsString()
  title: string;

  @ApiProperty({
    required: false,
    description: 'The description of the event',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    required: true,
    description: 'The ID of the guild',
  })
  @IsNumberString()
  guildSId: string;

  @ApiProperty({
    required: true,
    description: 'The ID of the voice channel',
  })
  @IsNumberString()
  voiceChannelSId: string;

  @ApiProperty({
    required: true,
    description: 'The ID of the organizer',
  })
  @IsNumberString()
  organizerSId: string;

  @ApiProperty({
    required: true,
    description: 'The start date of the event',
  })
  @IsISO8601()
  startDate: Date;

  @ApiProperty({
    required: true,
    description: 'The end date of the event',
  })
  @IsISO8601()
  endDate: Date;
}