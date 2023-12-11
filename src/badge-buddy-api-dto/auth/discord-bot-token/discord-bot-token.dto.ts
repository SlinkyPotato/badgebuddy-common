import { IsNumberString } from 'class-validator';
import { AccessTokenDto } from '../access-token/access-token.dto';

export class DiscordBotTokenDto extends AccessTokenDto {
  
  @IsNumberString()
  discordUserSId: string;

}
