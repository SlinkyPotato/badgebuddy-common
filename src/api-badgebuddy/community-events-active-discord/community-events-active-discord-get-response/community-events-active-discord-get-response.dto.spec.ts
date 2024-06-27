import { CommunityEventsActiveDiscordGetResponseDto } from './community-events-active-discord-get-response.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordActiveCommunityEventGetResponseDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsActiveDiscordGetResponseDto()).toBeDefined();
  });
});
