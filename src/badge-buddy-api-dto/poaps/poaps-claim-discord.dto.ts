import { IsISO8601, IsString, IsUrl, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PoapsClaimDiscordDto {
  @IsString()
  @IsUUID()
  @ApiProperty({
    type: String,
    description: 'ID of the POAP',
  })
  id: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'QR code for claiming the POAP',
  })
  qrCode: string;

  @IsString()
  @IsUrl()
  @ApiProperty({
    type: String,
    description: 'URL for claiming the POAP',
  })
  claimUrl: string;

  @IsString()
  @IsUUID()
  @ApiProperty({
    type: String,
    description: 'ID of the community event',
  })
  communityEventId: string;

  @IsString()
  @IsISO8601()
  @ApiProperty({
    type: String,
    description: 'Date when the POAP was claimed',
  })
  claimedOn: string;
}
