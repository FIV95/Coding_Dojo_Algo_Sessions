/*
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty)
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1a = 1;

const nums2 = [5, 4, 2, 2, 3];
const expected2a = 2;

const nums3 = [];
const expected3a = -1;

const nums4 = [5, 4, 2, -1, 3];
const expected4a = 3;

// create variable - minIndex = 0
// if (arr.length is 0 --- WE RETURN -1
// create for loop to parse array
// we find the smallest value
// minIndex = smallest value
// we return minIndex
//
/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
	if (nums.length === 0) {
		return -1;
	}
	let minIndex = nums[0];
	let smallestIndex = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < minIndex) {
			minIndex = nums[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}

console.log(indexOfMinVal(nums1));
console.log(indexOfMinVal(nums2));
console.log(indexOfMinVal(nums3));
console.log(indexOfMinVal(nums4));

/*******************************************************************************/

/*
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * BONUS: Do this in place without built ins
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
// Parse the array backwards
// Pop each value as it moves backwards
// create variable that holds popped values - tempArray
// after loop runs having been popped
// we push all indexes of tempArray back into items
//
function reverseArr(items){
      let poppedValue = 0;
      for (let i =items.length-1;i<=items.length-1;i--){
            
      }

}

// array start at index 0
// push adds to the end of an array 
// pop removes last value in array
// they want us to flip the array - reverse

// we go through each index of items
// we push an index [3, 5 ,10 ] --- >[ 3,5,10,]
// we then pop that index at its original 
// [3,5,10, 3,5,10]
// 


// start at the end of the array
// let poppedValue = i