import { CommunityEventsActiveDiscordByIdGetRequestDto } from './community-events-active-discord-by-id-get-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('CommunityEventsActiveByIdGetRequestDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsActiveDiscordByIdGetRequestDto()).toBeDefined();
  });
});
