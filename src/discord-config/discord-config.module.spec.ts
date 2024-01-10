import { Test, TestingModule } from '@nestjs/testing';
import { DiscordConfigModule } from './discord-config.module';
import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  jest,
  afterAll,
} from '@jest/globals';

describe('DiscordConfigModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DiscordConfigModule.forRootAsync()],
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
