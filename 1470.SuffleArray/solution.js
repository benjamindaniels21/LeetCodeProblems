/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let finalArr = [];
  let firstHalf = [];
  let secondHalf = [];

  for (let i = 0; i < n; i++) {
    firstHalf.push(nums[i]);
  }

  for (let i = n; i < nums.length; i++) {
    secondHalf.push(nums[i]);
  }

  for (let i = 0; i < n; i++) {
    finalArr.push(firstHalf[i]);
    finalArr.push(secondHalf[i]);
  }

  return finalArr;
};
