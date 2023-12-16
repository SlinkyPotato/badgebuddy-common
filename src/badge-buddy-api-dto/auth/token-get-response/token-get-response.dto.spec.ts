import { TokenGetResponseDto } from './token-get-response.dto';
import { describe, it, expect } from '@jest/globals';

describe('TokenGetResponseDto', () => {
  it('should be defined', () => {
    expect(new TokenGetResponseDto()).toBeDefined();
  });
});
