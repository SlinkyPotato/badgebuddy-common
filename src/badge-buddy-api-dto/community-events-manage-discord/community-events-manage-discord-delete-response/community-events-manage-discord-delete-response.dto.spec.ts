import { CommunityEventsManageDiscordDeleteResponseDto } from './community-events-manage-discord-delete-response.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventPatchResponseDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsManageDiscordDeleteResponseDto()).toBeDefined();
  });
});
