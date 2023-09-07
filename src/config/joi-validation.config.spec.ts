import { describe } from '@jest/globals';
import { joiValidationConfig } from './joi-validation.config';

describe('EnvConfig', () => {
  it('should be defined', () => {
    expect(joiValidationConfig).toBeDefined();
  });

  it('should validate joiValidationConfig', () => {
    const { error } = joiValidationConfig.validate(process.env, {
      allowUnknown: true,
    });
    expect(error).toBeUndefined();
  });
});
