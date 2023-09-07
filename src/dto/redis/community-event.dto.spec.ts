import { beforeEach, describe, expect, it } from '@jest/globals';
import { CommunityEventDto } from './community-event.dto';

describe('CommunityEventDto', () => {
  let communityEventDto: CommunityEventDto;

  beforeEach(() => {
    communityEventDto = new CommunityEventDto();
    communityEventDto.eventId = '64e903cbac9d84d78747d109';
    communityEventDto.eventName = 'Test Event';
    communityEventDto.organizerId = '159014522542096384';
    communityEventDto.voiceChannelId = '123456789';
    communityEventDto.guildId = '987654321';
    communityEventDto.startDate = '2023-08-28T22:35:38.189+00:00';
    communityEventDto.endDate = '2023-08-28T22:36:38.189+00:00';
  });

  it('should have the correct values', () => {
    expect(CommunityEventDto).toBeDefined();
    expect(CommunityEventDto).toBeInstanceOf(Function);
  });

  it('should have the correct properties', () => {
    expect(communityEventDto).toHaveProperty('eventId');
    expect(communityEventDto).toHaveProperty('eventName');
    expect(communityEventDto).toHaveProperty('organizerId');
    expect(communityEventDto).toHaveProperty('voiceChannelId');
    expect(communityEventDto).toHaveProperty('guildId');
    expect(communityEventDto).toHaveProperty('startDate');
    expect(communityEventDto).toHaveProperty('endDate');
    expect(communityEventDto).not.toHaveProperty('isActive');
  });

  it('should have isActive property', () => {
    communityEventDto.isActive = true;
    expect(communityEventDto).toHaveProperty('isActive');
  });

  it('should have isActive be falsy for null', () => {
    communityEventDto.isActive = null;
    expect(communityEventDto.isActive).toBeFalsy();
  });

  it('should have isActive be falsy for undefined', () => {
    communityEventDto.isActive = undefined;
    expect(communityEventDto.isActive).toBeFalsy();
  });
});
