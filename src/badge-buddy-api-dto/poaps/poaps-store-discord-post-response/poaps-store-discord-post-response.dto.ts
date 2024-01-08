import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsStoreDiscordPostResponseDto {
  @IsArray()
  @ApiProperty({
    description: 'List of POAPs that were not distributed to participants',
    example: ['https://poap.xyz/claim/123'],
  })
  poapsAvailable: string[];
}
