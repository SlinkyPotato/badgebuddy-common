import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsDistributeDiscordPostResponseDto {
  @IsNumber()
  @ApiProperty({
    description: 'Number of available POAPs',
    example: 1,
  })
  availablePoaps: number = 0;
}
