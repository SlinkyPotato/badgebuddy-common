import { IsNumber, IsString } from 'class-validator';

export class AccessTokenDto {
  @IsNumber()
  iat: number;

  @IsNumber()
  exp: number;

  @IsString()
  iss: string;

  @IsString()
  sub: string;

  @IsString()
  sessionId: string;
}
