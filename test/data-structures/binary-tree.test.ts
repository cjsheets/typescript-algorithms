import {expect} from 'chai';

import { BinaryTree } from '../../src/index';

describe('BinaryTree', () => {
  let binaryTree: BinaryTree<number>;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  it('creates a binary tree', () => {
    binaryTree.push(3);
    binaryTree.push(1);
    binaryTree.push(4);
    binaryTree.push(5);
    expect(binaryTree.print()).equals('{"value":3,"left":{"value":1},"right":{"value":4,"right":{"value":5}}}');
  });
});
