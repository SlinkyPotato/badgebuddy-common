import { beforeEach, describe, expect, it } from '@jest/globals';
import { RedisCommunityEventDto } from './community-event.dto';

describe('CommunityEventDto', () => {
  let communityEventDto: RedisCommunityEventDto;

  beforeEach(() => {
    communityEventDto = new RedisCommunityEventDto();
    communityEventDto.id = '64e903cbac9d84d78747d109';
    communityEventDto.title = 'Test Event';
    communityEventDto.organizerSId = '159014522542096384';
    communityEventDto.voiceChannelSId = '123456789';
    communityEventDto.guildSId = '987654321';
    communityEventDto.startDate = '2023-08-28T22:35:38.189+00:00';
    communityEventDto.endDate = '2023-08-28T22:36:38.189+00:00';
  });

  it('should have the correct values', () => {
    expect(RedisCommunityEventDto).toBeDefined();
    expect(RedisCommunityEventDto).toBeInstanceOf(Function);
  });

  it('should have the correct properties', () => {
    expect(communityEventDto).toHaveProperty('id');
    expect(communityEventDto).toHaveProperty('title');
    expect(communityEventDto).toHaveProperty('organizerSId');
    expect(communityEventDto).toHaveProperty('voiceChannelSId');
    expect(communityEventDto).toHaveProperty('guildSId');
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
