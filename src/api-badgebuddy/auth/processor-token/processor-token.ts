import { AccessTokenDto } from '../access-token/access-token.dto';
import { IsNumberString } from 'class-validator';

export class ProcessorToken extends AccessTokenDto {
  @IsNumberString()
  discordUserSId: string;
}
