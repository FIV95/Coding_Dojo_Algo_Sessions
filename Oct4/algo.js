/*
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
*/

const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;

const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;

const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;

/**
 * Finds the index from the given array where the given item is found.
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} searchItem The item to find.
 * @returns {number} The index of found item, or -1 if not found.
 */
function indexOf(items, searchItem) {

	////
	// check if one of the items elements is searchItem
	for (let i=0; i<items.length; i++) {
		if (searchItem == items[i]) {
			return i;
		}
	}
	return -1;

}

// we have to parse through our given array (items)
// we can do that with a for loop
// within that loop we check using a conditonal for our
// IF the arguement searchItem is found within our array at the index of i's currentl value
// we simply return whatever the value of i is - i is the index


// Tests
const result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);

const result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);

const result3 = indexOf(arr3, searchItem3);
console.log(result3, "should be", expected3);

const result4 = indexOf(arr4, searchItem4);
console.log(result4, "should be", expected4);

/*****************************************************************/
/*
  Given an array and an int which represents the position starting from the back,
  return the nth-to-last element.

  JS has introduced the .at method for this purpose, but solve this algo w/o it.
  */

// Last element:
const arr1b = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1b = "d";

// Second to last element:
const arr2b = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2b = "c";

const arr3b = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3b = null;

const arr4b = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4b = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;

/**
 * Retrieves the nth to last indexed item from the given array.
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */
function nthLast(items, nthToLast) {
	if (nthToLast > 0 && nthToLast < items.length) {
		//use it
		let idx = items.length - nthToLast;
		return items[idx];
	}
	return null;
}
	// we dont actually need to look through our array in this problem.
	// we first set a conidtional to check if the nthToLast is actually within the array
	// if its not we return null
	// If the nToLast value is after index 0 and before the last item in the array can use that as part of our solution
	// we created the variable idx (index) to hold the arrays length Minus the requested nthTolast
	// we then return our array using the index from the prior step.
	//


// Tests
const result1b = nthLast(arr1b, idx1);
console.log(result1b, "should be", expected1b);

const result2b = nthLast(arr2b, idx2);
console.log(result2b, "should be", expected2b);

const result3b = nthLast(arr3b, idx3);
console.log(result3b, "should be", expected3b);

const result4b = nthLast(arr4b, idx4);
console.log(result4b, "should be", expected4b);

const result5b = nthLast(arr5, idx5);
console.log(result5b, "should be", expected5);
