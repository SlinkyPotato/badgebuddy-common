import { beforeEach, describe, expect, it } from '@jest/globals';
import { DiscordParticipantDto } from './discord-participant.dto';

describe('DiscordParticipantDto', () => {
  let discordParticipantDto: DiscordParticipantDto;

  beforeEach(() => {
    discordParticipantDto = new DiscordParticipantDto();
    discordParticipantDto.eventId = '64e903cbac9d84d78747d109';
    discordParticipantDto.userId = '159014522542096384';
    discordParticipantDto.userTag = 'slinkypotato';
    discordParticipantDto.startDate = '2023-08-28T22:35:38.189+00:00';
    discordParticipantDto.durationInMinutes = 1;
  });

  it('should have the correct values', () => {
    expect(DiscordParticipantDto).toBeDefined();
    expect(DiscordParticipantDto).toBeInstanceOf(Function);
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
