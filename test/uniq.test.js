import { describe, it, expect } from 'vitest';
import { uniq } from '../lodash';

describe('uniq', () => {
  it('removes duplicate values from an array', () => {
    expect(uniq([2, 1, 2])).toEqual([2, 1]);
  });

  it('returns an empty array if given one', () => {
    expect(uniq([])).toEqual([]);
  });
});
