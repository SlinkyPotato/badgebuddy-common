import { CommunityEventsActiveDiscordByOrganizerGetRequestDto } from './community-events-active-discord-by-organizer-get-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('CommunityEventsActiveByOrganizerGetRequestDto', () => {
  it('should be defined', () => {
    expect(
      new CommunityEventsActiveDiscordByOrganizerGetRequestDto(),
    ).toBeDefined();
  });
});
