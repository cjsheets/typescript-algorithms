import {expect} from 'chai';

import { BinaryTree } from '../../src/index';

const seedBinaryTree = (binaryTree: BinaryTree<number>) => {
  binaryTree.push(3);
  binaryTree.push(1);
  binaryTree.push(7);
  binaryTree.push(5);
  binaryTree.push(6);
  binaryTree.push(4);

  return binaryTree;
};

describe('BinaryTree', () => {
  let binaryTree: BinaryTree<number>;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  it('creates a binary tree', () => {
    binaryTree = seedBinaryTree(binaryTree);
    expect(binaryTree.print()).equals('{"value":3,"left":{"value":1},"right":' +
      '{"value":7,"left":{"value":5,"right":{"value":6},"left":{"value":4}}}}');
  });

  it('verifies a tree height', () => {
    binaryTree = seedBinaryTree(binaryTree);
    expect(binaryTree.height()).equals(4);
    binaryTree.push(8);
    binaryTree.push(9);
    binaryTree.push(10);
    expect(binaryTree.height()).equals(5);
  });
});
