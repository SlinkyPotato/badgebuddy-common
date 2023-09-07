import { describe, it, expect, beforeEach } from '@jest/globals';
import { CommunityEvent } from './community-event.schema';

describe('CommunityEventSchema', () => {
  let communityEvent: CommunityEvent;

  beforeEach(async () => {
    communityEvent = new CommunityEvent();
    communityEvent.eventName = 'Test event';
    communityEvent.organizerId = '1234567890';
    communityEvent.voiceChannelId = '1234567890';
    communityEvent.guildId = '1234567890';
    communityEvent.startDate = new Date();
    communityEvent.endDate = new Date();
    communityEvent.isActive = true;
  });

  it('should be defined', () => {
    expect(communityEvent).toBeDefined();
  });

  it('should have eventName', () => {
    expect(communityEvent.eventName).toBeDefined();
  });

  it('should have organizerId', () => {
    expect(communityEvent.organizerId).toBeDefined();
  });

  it('should have voiceChannelId', () => {
    expect(communityEvent.voiceChannelId).toBeDefined();
  });

  it('should have guildId', () => {
    expect(communityEvent.guildId).toBeDefined();
  });

  it('should have startDate', () => {
    expect(communityEvent.startDate).toBeDefined();
  });

  it('should have endDate', () => {
    expect(communityEvent.endDate).toBeDefined();
  });

  it('should have isActive', () => {
    expect(communityEvent.isActive).toBeDefined();
  });

  it('should have isActive set to true', () => {
    expect(communityEvent.isActive).toBe(true);
  });
});
