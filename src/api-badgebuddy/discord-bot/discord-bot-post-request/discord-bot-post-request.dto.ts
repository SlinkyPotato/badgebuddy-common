import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class DiscordBotPostRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'The ID of the guild given from discord.',
  })
  guildSId: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Force add the bot to the guild.',
  })
  force?: boolean;
}
