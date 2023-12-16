import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsNumber, IsString, IsUUID } from 'class-validator';

export class DiscordCommunityEventPostResponseDto {
  @ApiProperty({
    description: 'The uuid of the community event',
  })
  @IsUUID()
  @IsString()
  communityEventId: string;

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

  @IsNumber()
  @ApiProperty({
    description: 'The number of available poaps',
  })
  availablePOAPs: number = 0;
}
