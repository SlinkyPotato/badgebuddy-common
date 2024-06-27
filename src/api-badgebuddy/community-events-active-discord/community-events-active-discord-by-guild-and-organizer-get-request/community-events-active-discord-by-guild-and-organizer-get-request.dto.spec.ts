import { CommunityEventsActiveDiscordByGuildAndOrganizerGetRequestDto } from './community-events-active-discord-by-guild-and-organizer-get-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('CommunityEventsActiveByGuildAndOrganizerGetRequestDto', () => {
  it('should be defined', () => {
    expect(
      new CommunityEventsActiveDiscordByGuildAndOrganizerGetRequestDto(),
    ).toBeDefined();
  });
});
