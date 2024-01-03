import { CommunityEventsManageDiscordPostResponseDto } from './community-events-manage-discord-post-response.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventPostResponseDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsManageDiscordPostResponseDto()).toBeDefined();
  });
});
