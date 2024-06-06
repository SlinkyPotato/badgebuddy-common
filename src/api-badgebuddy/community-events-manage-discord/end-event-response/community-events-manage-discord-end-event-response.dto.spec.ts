import { CommunityEventsManageDiscordEndEventResponseDto } from './community-events-manage-discord-end-event-response.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventEndEventResponseDto', () => {
  it('should be defined', () => {
    expect(new CommunityEventsManageDiscordEndEventResponseDto()).toBeDefined();
  });
});
