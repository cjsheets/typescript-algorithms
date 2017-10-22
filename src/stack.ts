
export class Stack<T> {
  private stack: T[] = [];

  /**
  * Add an item to the stack
  * @param {T} item
  */
  public push(item: T) {
    this.stack.push(item);
  }

  /**
  * Remove the next stack item and return it
  * @return {T} item
  */
  public pop(): T {
    return this.stack.pop();
  }

  /**
  * Return the next stack item
  * @return {T} item
  */
  public peek(): T {
    return this.stack[this.stack.length - 1];
  }

  /**
  * Length of the stack
  * @return {number} length
  */
  public length() {
    return this.stack.length;
  }

  /**
  * Return a space-seperated stack as a string
  * @return {string}
  */
  public print() {
    return this.stack.join(' ');
  }
}
