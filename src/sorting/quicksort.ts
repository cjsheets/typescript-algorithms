export class QuickSort<T> {

  /**
  * Recursive QuickSort with random pivot
  * @param {T[]} array
  * @return {T[]} sorted array
  */
  public quickSort = (array: T[]): T[] => {
    if (array.length <= 1) {
      return array;
    }

    const pivotIndex = this.getRandom(array);
    const greaterThan = array.filter(T => this.greaterthanComparitor(T, array[pivotIndex]));
    const lessThan = array.filter((T, i) => this.lessthanComparitor(T, array[pivotIndex]) && i !== pivotIndex);

    return [...this.quickSort(lessThan), array[pivotIndex], ...this.quickSort(greaterThan)];
  }

  /**
  * Override to provide custom greater-than comparison method
  * @param {T} a
  * @param {T} b
  * @return {T} greater item
  */
  public greaterthanComparitor = (a: T, b: T) =>
    a > b;

  /**
  * Override to provide custom less-than comparison method
  * @param {T} a
  * @param {T} b
  * @return {T} lesser item
  */
  public lessthanComparitor = (a: T, b: T) =>
    a <= b;

  private getRandom = (array: T[]) =>
    Math.floor(Math.random() * array.length);
}
