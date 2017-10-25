
export class Queue<T> {
  private queue: T[] = [];

  /**
  * Add an item to the queue
  * @param {T} item
  */
  public enqueue(item: T) {
    this.queue.push(item);
  }

  /**
  * Remove the next queue item and return it
  * @return {T} item
  */
  public dequeue(): T {
    return this.queue.shift();
  }

  /**
  * Return the next queue item
  * @return {T} item
  */
  public peek(): T {
    return this.queue[0];
  }

  /**
  * Length of the queue
  * @return {number} length
  */
  public length() {
    return this.queue.length;
  }

  /**
  * Remove all entities from the queue
  */
  public clear() {
    return this.queue.splice(0, this.length());
  }

  /**
  * Return a space-seperated queue as a string
  * @return {string}
  */
  public print() {
    return this.queue.join(' ');
  }
}
