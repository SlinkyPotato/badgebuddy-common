import { ApiProperty } from '@nestjs/swagger';
import { PoapsClaimDiscordDto } from '../poaps-claim-discord.dto';

export class PoapsClaimDiscordGetResponseDto {
  @ApiProperty({
    type: PoapsClaimDiscordDto,
    isArray: true,
    description: 'POAPs claimed by the user',
  })
  poaps: PoapsClaimDiscordDto[];
}
