/**
 * Given an array numbers of size n storing n different integers which fall within the range [0, n], 
 * implement a function to identify the missing element in the array. 
 * All numbers except one are present in the array. 
 * Find the missing number.
 * @param {number[]} numbers
 * @return {number}
 * @solution check numbers.length and loop from 0 to the length-1 then return number missing
 */
export default function findMissingNumberInSequence(numbers) {
  if (!numbers.includes(numbers.length)) return numbers.length;
  for (let i = 0; i < numbers.length; i++) {
    if (!numbers.includes(i)) return i;
  }
}
