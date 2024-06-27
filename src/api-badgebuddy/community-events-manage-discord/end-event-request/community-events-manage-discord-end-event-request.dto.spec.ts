import { CommunityEventsManageDiscordEndEventRequestDto } from './community-events-manage-discord-end-event-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventEndEventRequestDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsManageDiscordEndEventRequestDto()).toBeDefined();
  });
});
