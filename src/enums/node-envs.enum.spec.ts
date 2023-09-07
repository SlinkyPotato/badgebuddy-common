import { describe, it } from '@jest/globals';
import { NodeEnvs } from './node-envs.enum';

describe('NodeEnv', () => {
  it('should have the correct values', () => {
    expect(NodeEnvs.DEVELOPMENT).toBe('development');
    expect(NodeEnvs.PRODUCTION).toBe('production');
    expect(NodeEnvs.STAGING).toBe('staging');
  });
});
