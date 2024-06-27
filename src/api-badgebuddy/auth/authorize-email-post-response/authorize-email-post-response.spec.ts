import { describe, it, expect } from '@jest/globals';
import { AuthorizeEmailPostResponseDto } from './authorize-email-post-response.dto';

describe('AuthorizeEmailPostResponseDto', () => {
  it('should be defined', () => {
    expect(new AuthorizeEmailPostResponseDto()).toBeDefined();
  });
});
