import { ProcessorToken } from './processor-token';
import { describe, it, expect } from '@jest/globals';

describe('ProcessorToken', () => {
  it('should be defined', () => {
    expect(new ProcessorToken()).toBeDefined();
  });
});
