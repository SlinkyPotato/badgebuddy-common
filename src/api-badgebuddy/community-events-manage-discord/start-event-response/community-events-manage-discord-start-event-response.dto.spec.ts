import { CommunityEventsManageDiscordStartEventResponseDto } from './community-events-manage-discord-start-event-response.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordCommunityEventStartEventResponseDto', () => {
  it('should be defined', () => {
    expect(
      new CommunityEventsManageDiscordStartEventResponseDto(),
    ).toBeDefined();
  });
});
