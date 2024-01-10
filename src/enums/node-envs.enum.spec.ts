import { NodeEnvs } from './node-envs.enum';
import { describe, it, expect } from '@jest/globals';
describe('NodeEnv', () => {
  it('should have the correct values', () => {
    expect(NodeEnvs.DEVELOPMENT).toBe('development');
    expect(NodeEnvs.PRODUCTION).toBe('production');
    expect(NodeEnvs.STAGING).toBe('staging');
  });
});
