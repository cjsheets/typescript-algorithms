import { expect } from 'chai';

import { binarySearch } from '../../src/index';

describe('Binary Search', () => {
  let array: number[];

  beforeEach(() => {
    array = [0, 1, 2, 3, 5, 7, 8, 9, 10, 13, 15, 16, 17, 18, 20, 22]
  });

  it('finds a value', () => {
    expect(binarySearch(array, 8)).equals(6);
  });
});
