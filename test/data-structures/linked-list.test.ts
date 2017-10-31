import {expect} from 'chai';

import { LinkedList } from '../../src/index';

const item1 = {id: 1, value: 'One'}
const item2 = {id: 2, value: 'Two'}
const item3 = {id: 3, value: 'Three'}

describe('LinkedList', () => {
  let linkedList: LinkedList<{id: number, value: string}>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('creates a linked list', () => {
    linkedList.append(item1);
    linkedList.append(item2);
    linkedList.append(item3);
    expect(linkedList.length).equals(3);
    expect(linkedList.print()).equals('{"item":{"id":1,"value":"One"},"next":' +
      '{"item":{"id":2,"value":"Two"},"next":{"item":{"id":3,"value":"Three"},"next":null}}}');
  });
});
