import { CommunityEventsManageDiscordPostRequestDto } from './community-events-manage-discord-post-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventPostRequestDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsManageDiscordPostRequestDto()).toBeDefined();
  });
});
