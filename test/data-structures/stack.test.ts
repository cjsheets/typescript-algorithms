import {expect} from 'chai';

import { Stack } from '../../src/index';

describe('Stack', () => {
  let stack: Stack<string>;
  let seedStack: () => void;

  beforeEach(() => {
    stack = new Stack();

    seedStack = () => {
      stack.push('A');
      stack.push('B');
      stack.push('C');
    };
  });

  it('creates a stack', () => {
    seedStack();
    expect(stack.print()).equals('A B C');
  });
});
