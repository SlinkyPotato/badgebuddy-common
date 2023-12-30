import { AccessTokenDto } from './access-token.dto';
import { describe, it, expect } from '@jest/globals';

describe('AccessTokenDto', () => {
  it('should be defined', () => {
    expect(new AccessTokenDto()).toBeDefined();
  });
});
