// mine
/*  O(n^2)
      2 for loops : factor of n
      splice is linear
      for loop ( splice ) -> n^2
*/
var moveZeroes = function (nums) {
  let indexes = []
  nums.forEach((num, i) => { if (num === 0) indexes.unshift(i) })
  indexes.forEach(i => {
    nums.splice(i, 1)
    nums.push(0)
  })
  return nums
};


/*  BELOW - SAME LOGIC
    O(n) = one for loop, swap is constant time
*/
// shorter nicole ver
// swap everything from the right of the zero block to the left of the zero block
// also the variable swap = right index
var moveZeroes = function (nums) {
  let swap = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[swap]] = [nums[swap], nums[i]];
      swap += 1;
    }
  }
  return nums
};

// nicole ver
var moveZeroes = function (nums) {
  let swap = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0)
      continue
    else {
      [nums[i], nums[swap]] = [nums[swap], nums[i]];
      swap += 1;
    }
  }
  return nums
};

// jamie ver
var moveZeroes = function (nums) {
  if (nums.length > 1) {
    let left = 0;
    let right = 1;
    while (right < nums.length && left < nums.length) {
      if (nums[left] !== 0) {
        left++;
      } else if (nums[right] !== 0 && right > left) {
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        right++;
      }
    }
  }
};