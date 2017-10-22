interface INode<T> {
  item: T;
  next?: INode<T>;
}

export class LinkedList<T> {
  private head: INode<T> = null;
  private listLength = 0;

  /**
  * Append an item to the end of the list
  * @param {number} position
  */
  public append(item: T) {
    const newNode = this.newNode(item);
    if (!this.head) {
      this.head = newNode;

    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    this.listLength++;
  }

  /**
  * Insert an item at a provided position
  * @param {number} position
  */
  public insert(item: T, position: number) {
    if (this.positionIsValid(position)) {
      const newNode = this.newNode(item);
      let pointer = this.head;

      if (position === 0) {
        newNode.next = pointer;
        this.head = newNode;

      } else {
        let i = 0;
        let prevPointer;
        while (i < position) {
          prevPointer = pointer;
          pointer = pointer.next;
          i++;
        }
        newNode.next = pointer;
        prevPointer.next = newNode;
      }
      this.listLength++;
    }
  }

  /**
  * Remove an item given a position and return it
  * @param {number} position
  * @return {INode<T>} item
  */
  public removeAt(position: number) {
    if (!this.positionIsValid(position)) {
      return null;
    }

    let pointer = this.head;
    if (position === 0) {
      this.head = pointer.next;

    } else {
      let i = 0;
      let prevPointer;
      while (i < position) {
        prevPointer = pointer;
        pointer = pointer.next;
        i++;
      }
      prevPointer.next = pointer.next;
    }
    this.listLength--;

    return pointer.item;
  }

  public reverse() {
    if (this.head && this.head.next) {
      let previousNode = null;
      let currentNode = this.head;
      let nextNode = this.head.next;
      this.head.next = null;
      while (nextNode) {
        previousNode = currentNode;
        currentNode = nextNode;
        nextNode = currentNode.next;
        currentNode.next = previousNode;
      }
      this.head = currentNode;
    }
  }

  private newNode = <T>(item: T) =>
    ({item, next: null as INode<T>});

  private positionIsValid = (position: number) =>
    position > -1 && position < this.listLength;
}
