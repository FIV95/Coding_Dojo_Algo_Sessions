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
function reverseArr(items) {
	let tempArray = [];
	for (let i = items.length - 1; i <= items.length - 1; i--) {
		tempArray = items.push(items[i]);
            items.pop(items[i]);
	}
      for (let i =0; i <=tempArray.length-1;i++){
            items = tempArray.push(tempArray[i]);
      }
      return items;
}


console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
console.log(reverseArr(arr3));
console.log(reverseArr(arr4));