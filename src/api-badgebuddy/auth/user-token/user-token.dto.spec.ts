import { UserTokenDto } from './user-token.dto';
import { describe, it, expect } from '@jest/globals';

describe('UserTokenDto', () => {
  it('should be defined', () => {
    expect(new UserTokenDto()).toBeDefined();
  });
});
