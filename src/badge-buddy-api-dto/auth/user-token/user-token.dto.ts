import { IsNumberString, IsOptional, IsString, IsUUID } from 'class-validator';
import { AccessTokenDto } from '../access-token/access-token.dto';

export class UserTokenDto extends AccessTokenDto {

  @IsUUID()
  @IsString()
  userId: string;

  @IsNumberString()
  @IsOptional()
  discordUserSId?: string;

}