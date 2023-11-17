/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * @param {number} cents
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

// for key in bank
// quarter: 25

function fewestCoinChange(cents) {
	let bank = { quarter: 0, dime: 0, nickel: 0, penny: 0 };

	// Calculate the number of quarters
	if (cents >= 25) {
		bank.quarter = Math.floor(cents / 25);
		cents %= 25; // Update cents to the remaining amount
	}


	if (cents >= 10) {
		bank.dime = Math.floor(cents / 10);
		cents %= 10;
	}


	if (cents >= 5) {
		bank.nickel = Math.floor(cents / 5);
		cents %= 5;
	}

	bank.penny = cents;

	return bank;
}

console.log(fewestCoinChange(cents1)); // { quarter: 1 }
console.log(fewestCoinChange(cents2)); // { quarter: 2 }
console.log(fewestCoinChange(cents3)); // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)); // { quarter: 3, dime: 2, penny: 4 }
