// sum to one digit number
// 1. Write a function that sums all the digits of a given integer until the result has only one digit. use recursion

function sumToOne(num) {
    if (num < 10) {
        return num;
    }
    return sumToOne(Math.floor(num / 10) + (num % 10));
    }