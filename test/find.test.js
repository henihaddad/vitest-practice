import { describe, it, expect } from 'vitest';
import { find } from '../lodash';

describe('find', () => {
  it('returns the first element that matches the predicate', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = find(array, (x) => x.id === 2);
    expect(result).toEqual({ id: 2 });
  });

  it('returns undefined if no element matches', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = find(array, (x) => x.id === 4);
    expect(result).toBeUndefined();
  });
});
