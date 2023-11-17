const searchNum4 = 2; // The number you want to search for in nums4.
const expected4 = 4; // The expected result for the bonus, indicating how many times searchNum4 should appear.

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(log(n)), where n is the length of the array.
 *   Binary search has a logarithmic time complexity because it halves
 *   the search space in each iteration.
 * - Space: O(1), because it uses a constant amount of additional space.
 * @param {Array<number>} sortedNums - An array of sorted numbers.
 * @param {number} searchNum - The number to search for in the array.
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    var low = 0; // The lower index of the current search range.
    var high = sortedNums.length - 1; // The upper index of the current search range.

    while (low <= high) {
        var mid = Math.floor((low + high) / 2); // The middle index of the current search range.
        var guess = sortedNums[mid]; // The value at the middle index.

        if (guess == searchNum) {
            var count = 1; // Initialize a count to track the occurrences of searchNum.

            // Count the occurrences of the searchNum in the sortedNums array.
            for (var i = mid - 1, j = mid + 1; sortedNums[i] === searchNum || sortedNums[j] === searchNum; i--, j++) {
                if (sortedNums[i] == searchNum) {
                    count += 1;
                }
                if (sortedNums[j] == searchNum) {
                    count += 1;
                }
            }

            return count; // Return the count of occurrences.
        } else if (guess > searchNum) {
            high = mid - 1; // Adjust the search range to the left half.
        } else {
            low = mid + 1; // Adjust the search range to the right half.
        }
    }
    // If the searchNum is not found, return false.
    return false;
}

// Test cases
console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
