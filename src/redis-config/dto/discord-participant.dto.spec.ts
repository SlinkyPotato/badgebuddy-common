import { beforeEach, describe, expect, it } from '@jest/globals';
import { DiscordParticipantRedisDto } from './discord-participant.dto';

describe('DiscordParticipantRedisDto', () => {
  let discordParticipantDto: DiscordParticipantRedisDto;

  beforeEach(() => {
    discordParticipantDto = new DiscordParticipantRedisDto();
    discordParticipantDto.eventId = '64e903cbac9d84d78747d109';
    discordParticipantDto.userId = '159014522542096384';
    discordParticipantDto.userTag = 'slinkypotato';
    discordParticipantDto.startDate = '2023-08-28T22:35:38.189+00:00';
    discordParticipantDto.durationInSeconds = 1;
  });

  it('should have the correct values', () => {
    expect(DiscordParticipantRedisDto).toBeDefined();
    expect(DiscordParticipantRedisDto).toBeInstanceOf(Function);
  });

  it('should have the correct properties', () => {
    expect(discordParticipantDto).toHaveProperty('eventId');
    expect(discordParticipantDto).toHaveProperty('userId');
    expect(discordParticipantDto).toHaveProperty('userTag');
    expect(discordParticipantDto).toHaveProperty('startDate');
    expect(discordParticipantDto).toHaveProperty('durationInMinutes');
    expect(discordParticipantDto).not.toHaveProperty('endDate');
  });

  it('should have endDate property', () => {
    discordParticipantDto.endDate = '2023-08-28T22:36:38.189+00:00';
    expect(discordParticipantDto).toHaveProperty('endDate');
  });
});
