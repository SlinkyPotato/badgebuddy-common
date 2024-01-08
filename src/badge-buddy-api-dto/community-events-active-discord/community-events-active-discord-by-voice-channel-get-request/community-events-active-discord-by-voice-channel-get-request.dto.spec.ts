import { CommunityEventsActiveDiscordByVoiceChannelGetRequestDto } from './community-events-active-discord-by-voice-channel-get-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('CommunityEventsActiveByVoiceChannelGetRequestDto', () => {
  it('should be defined', () => {
    expect(
      new CommunityEventsActiveDiscordByVoiceChannelGetRequestDto(),
    ).toBeDefined();
  });
});
