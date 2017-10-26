import {expect} from 'chai';

import { Queue } from '../src/index';

describe('Queue', () => {
  let queue: Queue<string>;
  let seedQueue: () => void;

  beforeEach(() => {
    queue = new Queue();

    seedQueue = () => {
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
    };
  });

  it('reports the length of a queue', () => {
    expect(queue.length()).equals(0);
    seedQueue();
    expect(queue.length()).equals(3);
    queue.enqueue('D');
    expect(queue.length()).equals(4);
    queue.dequeue();
    expect(queue.length()).equals(3);
    queue.clear();
    expect(queue.length()).equals(0);
  });
});
