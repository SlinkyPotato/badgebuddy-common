import { describe, it, expect, beforeEach } from '@jest/globals';
import { DiscordParticipant } from './discord-participant.schema';
import * as mongoose from 'mongoose';

describe('DiscordGuildSchema', () => {
  let discordParticipant: DiscordParticipant;

  beforeEach(async () => {
    discordParticipant = new DiscordParticipant();
    discordParticipant.communityEvent = new mongoose.Types.ObjectId(
      '64f896dad1c15db98e47ad76',
    );
    discordParticipant.startDate = new Date();
    discordParticipant.endDate = new Date();
    discordParticipant.durationInMinutes = 0.0;
    discordParticipant.userId = '159014522542096384';
    discordParticipant.userTag = 'Test user';
  });

  it('should be defined', () => {
    expect(discordParticipant).toBeDefined();
  });

  it('should have communityEvent', () => {
    expect(discordParticipant.communityEvent).toBeDefined();
  });

  it('should have startDate', () => {
    expect(discordParticipant.startDate).toBeDefined();
  });

  it('should have endDate', () => {
    expect(discordParticipant.endDate).toBeDefined();
  });

  it('should have durationInMinutes', () => {
    expect(discordParticipant.durationInMinutes).toBeDefined();
  });

  it('should have userId', () => {
    expect(discordParticipant.userId).toBeDefined();
  });

  it('should have userTag', () => {
    expect(discordParticipant.userTag).toBeDefined();
  });
});
