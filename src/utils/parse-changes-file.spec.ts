import { parseChangesFile } from './parse-changes-file';
import { describe, it, expect } from '@jest/globals';

describe('parseChangelog', () => {
  it('should be defined', () => {
    expect(parseChangesFile).toBeDefined();
  });

  it('should parse changelog', () => {
    const result = parseChangesFile('./src/utils/test-changes.md');
    const expected = [
      '### [0.0.6](https://github.com/solidchain-tech/badge-buddy-common/compare/v0.0.6-2...v0.0.6) (2023-08-22)',
    ];
    expect(result).toEqual(expected);
  });
});
