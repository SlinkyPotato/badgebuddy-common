import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsOptional, IsString, IsUUID } from 'class-validator';

export class CommunityEventsManageDiscordEndEventResponseDto {
  @ApiProperty({
    description: 'The uuid of the event (generated by the server)',
  })
  @IsUUID()
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
    description: 'The username of the organizer',
  })
  @IsString()
  organizerUsername: string;

  @ApiProperty({
    description: 'The start date of the event',
  })
  @IsISO8601()
  startDate: string;

  @ApiProperty({
    description: 'The end date of the event',
  })
  @IsISO8601()
  endDate: string;
}