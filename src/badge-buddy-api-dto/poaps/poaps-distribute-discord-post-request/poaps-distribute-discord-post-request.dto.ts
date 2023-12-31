import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsDistributeDiscordPostRequestDto {
  @IsString()
  @IsUUID()
  @ApiProperty({
    description: 'Community event ID',
    example: 'b0b1b2b3-b4b5-b6b7-b8b9-babcbdbebf00',
  })
  communityEventId: string;
}
