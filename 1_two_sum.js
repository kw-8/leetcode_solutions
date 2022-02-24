/**
* @param {number[]} nums
* @param {number} target
* return {number[1}
*/

// brute force
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; i < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j]
    }
  }
};

// check if hash has complement, if not then add new element to hash
var twoSum = function (nums, target) {
  let hash = {} // k: number, v: index
  for (i = 0; i < nums.length; i++) {
    let cur = nums[i]
    let com = target - cur
    if (hash[com] != undefined) return [hash[com], i]
    hash[cur] = i
  }
};