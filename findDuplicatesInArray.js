/**
 * Find Duplicates in Array
 * 
 * Given an array of integers numbers, determine whether the array contains any duplicate values. 
 * A duplicate is defined as any number that appears more than once in the array.
 * @param {number[]} numbers
 * @return {boolean}
 * @solution check length of array numbers with size of set numbers
 */
export default function findDuplicates(numbers) {
    const numberArr = [...numbers];
    const numberSet = new Set(numbers);
    if ( numberSet.size !== numberArr.length) {
      return true
    }
    return false
  }