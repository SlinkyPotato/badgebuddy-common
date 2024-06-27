import { Test, TestingModule } from '@nestjs/testing';
import { CommonConfigModule } from './common-config.module';
import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  jest,
  afterAll,
} from '@jest/globals';

describe('CommonConfigModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [CommonConfigModule.forRoot()],
      providers: [],
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
