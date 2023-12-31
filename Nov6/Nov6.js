 /*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 4, 5, 4, 2];
const expected3 = 3;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
      if (nums.length < 3) {
            return -1;
      }
      let leftSum = 0;
      let totalSum = nums.reduce((acc, cur)=>acc + cur, 0);

      for (let i = 0; i < nums.length ;i++){
            totalSum-= nums[i];
            if (leftSum === totalSum){
                  return i
            }
            leftSum += nums[i]
      }
 /// const nums3 = [1, 1, 4, 5, 4, 2];
}
console.log(balanceIndex(nums3))
/*****************************************************************************/