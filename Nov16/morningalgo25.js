/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 123456;
const expected4 = 3;


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if(num < 10) {
        return num
    }
    let ones = num % 10
    num = Math.floor(num/10)

    result = ones + sumToOneDigit(num)
    while(result > 9) {
        result = sumToOneDigit(result)
    }
    return result
}


    // the function takes in a number and checks if it is less than 10. if it is, it returns the number. if it is not, it takes the ones place of the number and adds it to the result of the function called on the number without the ones place. it then checks if the result is greater than 9. if it is, it calls the function on the result. if it is not, it returns the result. this continues until the result is less than 10.

console.log(sumToOneDigit(num1), "should be", expected1)
console.log(sumToOneDigit(num2), "should be", expected2)
console.log(sumToOneDigit(num3), "should be", expected3)
console.log(sumToOneDigit(num4), "should be", expected4)

/*****************************************************************************/