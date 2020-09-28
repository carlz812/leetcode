/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 *
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/description/
 *
 * algorithms
 * Medium (61.04%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    15.8K
 * Total Submissions: 26.5K
 * Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
 *
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
 *
 * 示例 1:
 *
 *
 * 输入: [1,1,2,3,3,4,4,8,8]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: [3,3,7,7,10,11,11]
 * 输出: 10
 *
 *
 * 注意: 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicateLow = function (nums) {
  const set = new Set();
  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i];
    if (!set.has(current) && nums.indexOf(current) === i) {
      return current;
    } else {
      set.add(current);
    }
  }
};

var singleNonDuplicate = function (nums) {
  var len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  var mid = Math.floor(len / 2);

  var left = [],
    right = [];
  if (nums[mid - 1] === nums[mid]) {
    left = nums.slice(0, mid - 1);
    right = nums.slice(mid + 1, len);
  } else if (nums[mid + 1] === nums[mid]) {
    left = nums.slice(0, mid);
    right = nums.slice(mid + 1 + 1, len);
  } else {
    return nums[mid];
  }
  if (left.length % 2 === 1) {
    return singleNonDuplicate(left);
  } else {
    return singleNonDuplicate(right);
  }
};

// @lc code=end
