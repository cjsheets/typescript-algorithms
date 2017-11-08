interface INode<T> {
  value: T;
  left?: INode<T>;
  right?: INode<T>;
}

export class BinaryTree<T> {
  private root: INode<T> = null;

  /**
  * Insert value in binary tree
  * @param {T} value
  */
  public push(value: T) {
    if (!this.root) {
      this.root = {value};

      return;
    }

    const newNode = {value};
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > newNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /**
  * Return the binary tree as a string
  * @return {string}
  */
  public print() {
    return JSON.stringify(this.root);
  }
}
