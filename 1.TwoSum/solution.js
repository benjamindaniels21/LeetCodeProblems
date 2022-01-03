/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */

//----solution----

var twoSum = function (nums, target) {
  let arr = [];
  for (j = 0; j <= nums.length; j++) {
    for (i = 1; i <= nums.length; i++) {
      if (i === j) {
        i++;
      } else if (nums[i] + nums[j] === target) {
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
};

/* ----Comments-----

Right now this is a slow solution since it uses a nested for loop so o(n^2)...
I'm working on learning how to speed this up and will add a better solution when I 
get there.
*/
