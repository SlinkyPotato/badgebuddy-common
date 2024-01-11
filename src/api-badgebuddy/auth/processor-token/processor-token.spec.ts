import { ProcessorTokenDto } from './processor-token-dto';
import { describe, it, expect } from '@jest/globals';

describe('ProcessorToken', () => {
  it('should be defined', () => {
    expect(new ProcessorTokenDto()).toBeDefined();
  });
});
