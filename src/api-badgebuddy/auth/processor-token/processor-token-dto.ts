import { AccessTokenDto } from '../access-token/access-token.dto';
import { IsNumberString } from 'class-validator';

export class ProcessorTokenDto extends AccessTokenDto {
  @IsNumberString()
  discordUserSId: string;
}
