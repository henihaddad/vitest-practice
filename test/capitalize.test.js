import { describe, it, expect } from 'vitest';
import { capitalize } from '../lodash';

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('makes the rest of the string lowercase', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });
});
