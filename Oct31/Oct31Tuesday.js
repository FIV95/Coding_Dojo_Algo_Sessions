/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "aabcb";
const expected5 = "abc";
const expected5_bonus = "acb";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
	let result = "";
	// for (let i = 0;i<str.length;i++){
	//       let storedcharacter = str[i];
	//       for (let j = i+1;j<str.length-1;j++){
	//             result += str[i];
	//             if (str[j] === str[i])
	//       }
	// }
	return result;
}
console.log(stringDedupe(str2, expected2));
/*****************************************************************************/
// .includes()
//

/**
 * De-dupes the given string.
 * - Time: O(n).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str = "") {
	let distinctStr = "";
	const seen = {};

	// loop backwards to include last occurrence
	for (let i = str.length - 1; i >= 0; --i) {
		if (!seen[str[i]]) {
			distinctStr = str[i] + distinctStr;
			seen[str[i]] = true;
		}
	}
	return distinctStr;
}
