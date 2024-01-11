import { CommunityEventsManageDiscordDeleteRequestDto } from './community-events-manage-discord-delete-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventPatchRequestDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsManageDiscordDeleteRequestDto()).toBeDefined();
  });
});
