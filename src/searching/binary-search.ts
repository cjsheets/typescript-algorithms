export const binarySearch = <T>(array: T[], target: T): number => {
  let left = 0, right = array.length, pointer = 0;
  while (true) {
    if (left === right) {
      return -1;
    }
    pointer = Math.floor((right - left) / 2);

    if (array[pointer] < target) {
      left = pointer;
    } else if (array[pointer] > target) {
      right = pointer;
    } else {
      return pointer;
    }
  }
};