import { DiscordCommunityEventsActiveByVoiceChannelGetRequestDto } from './discord-community-events-active-by-voice-channel-get-request.dto';
import { describe, it, expect } from '@jest/globals';

describe('CommunityEventsActiveByVoiceChannelGetRequestDto', () => {
  it('should be defined', () => {
    expect(new DiscordCommunityEventsActiveByVoiceChannelGetRequestDto()).toBeDefined();
  });
});
