import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsDistributeDiscordPostResponseDto {
  @IsNumber()
  @ApiProperty({
    description: 'Number of POAPs distributed to participants',
    example: 1,
  })
  poapsDistributed = 0;
}
