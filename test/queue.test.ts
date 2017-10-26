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

  it('creates a queue', () => {
    seedQueue();
    expect(queue.length()).equals(3);
    expect(queue.peek()).equals('A');
  });

  it('removes an item from a queue', () => {
    seedQueue();
    expect(queue.length()).equals(3);
    expect(queue.dequeue()).equals('A');
    expect(queue.length()).equals(2);
    expect(queue.peek()).equals('B');
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

  it('displays a queue', () => {
    seedQueue();
    expect(queue.print()).equals('A B C');
  });
});
