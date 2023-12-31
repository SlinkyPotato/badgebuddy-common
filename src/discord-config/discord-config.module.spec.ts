import { afterEach, beforeEach, describe } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { DiscordConfigModule } from './discord-config.module';

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
