import { EventType } from './event-type.enum';
import { describe, it, expect } from '@jest/globals';

describe('EventType', () => {
  it('should have the correct values', () => {
    expect(EventType.BY_ATTENDANCE).toBe('BY_ATTENDANCE');
    expect(EventType.ALL_MEMBERS).toBe('ALL_MEMBERS');
    expect(EventType.BY_ROLES).toBe('BY_ROLES');
    expect(EventType.BY_USER_ID).toBe('BY_USER_ID');
  });
});
