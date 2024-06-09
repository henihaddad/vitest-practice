import { describe, it, expect } from 'vitest';
import { cloneDeep } from '../lodash';

describe('cloneDeep', () => {
  it('creates a deep clone of an object', () => {
    const object = { a: 1, b: { c: 2 } };
    const clonedObject = cloneDeep(object);
    expect(clonedObject).toEqual(object);
    expect(clonedObject).not.toBe(object);
  });
});
