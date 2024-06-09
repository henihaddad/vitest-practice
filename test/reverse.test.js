import { describe, it, expect } from 'vitest';
import { reverse } from '../lodash';

describe('reverse', () => {
  it('reverses an array', () => {
    const array = [1, 2, 3];
    expect(reverse(array)).toEqual([3, 2, 1]);
  });

  it('mutates the original array', () => {
    const array = [1, 2, 3];
    reverse(array);
    expect(array).toEqual([3, 2, 1]);
  });
});
