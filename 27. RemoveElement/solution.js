/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //interate through the array and remove elements that
  //match the "val";

  let k = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    } else {
      console.log("They're not the same");
    }
  }

  return k;
};
