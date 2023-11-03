import { afterEach, beforeEach, describe } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { CommonConfigModule } from './common-config.module';

describe('CommonConfigModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        CommonConfigModule.forRoot()
      ],
      providers: []
    }).compile();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

});
