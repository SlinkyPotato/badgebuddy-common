import { CommunityEventsActiveDiscordByGuildGetRequestDto } from './community-events-active-discord-by-guild-get-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('CommunityEventsActiveByGuildGetRequestDto', () => {
  it('should be defined', () => {
    expect(
      new CommunityEventsActiveDiscordByGuildGetRequestDto(),
    ).toBeDefined();
  });
});
