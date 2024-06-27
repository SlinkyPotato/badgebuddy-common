import { IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsDistributeDiscordPostResponseDto {
  @IsNumber()
  @ApiProperty({
    description: 'Number of POAPs distributed to participants',
    example: 1,
  })
  poapsDistributed = 0;

  @IsArray()
  @ApiProperty({
    description: 'List of POAPs that were not distributed to participants',
    example: ['https://poap.xyz/claim/123'],
  })
  poapsRemaining: string[];
}
