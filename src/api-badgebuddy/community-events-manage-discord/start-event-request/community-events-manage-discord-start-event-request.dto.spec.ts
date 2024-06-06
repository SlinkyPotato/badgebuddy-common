import { CommunityEventsManageDiscordStartEventRequestDto } from './community-events-manage-discord-start-event-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventPostRequestDto', () => {
  it('should be defined', () => {
    expect(
      new CommunityEventsManageDiscordStartEventRequestDto(),
    ).toBeDefined();
  });
});
