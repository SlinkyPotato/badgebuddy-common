import { parseChangelog } from './parse-changelog';

describe('parseChangelog', () => {
  it('should be defined', () => {
    expect(parseChangelog).toBeDefined();
  });

  it('should parse changelog', () => {
    const result = parseChangelog('./src/utils/test-changes.md');
    const expected = [
      '### [0.0.6](https://github.com/solidchain-tech/badge-buddy-common/compare/v0.0.6-2...v0.0.6) (2023-08-22)',
    ];
    expect(result).toEqual(expected);
  });
});
