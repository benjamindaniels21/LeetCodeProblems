// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

//----Work So Far ----

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  //grab the last digit
  let lastDig = digits[digits.length - 1];

  if (lastDig === 9 && digits.length === 1) {
    console.log("yo");
    digits.pop();
    digits.push(1, 0);
  } else if (lastDig === 9) {
    // 1, 2, 9
    digits.pop();
    // 1, 2
    let lastVal = digits[digits.length - 1] + 1;
    digits.pop();
    //1
    digits.push(lastVal, 0);
    //1, 3, 0
  } else {
    let findLast = digits[digits.length - 1] + 1;
    console.log(findLast);
    digits.pop();
    digits.push(findLast);
  }

  return digits;
};

//right now I'm working on how to deal with numbers that have multiple 9s in them like [9,9], which should return [1,0,0].
