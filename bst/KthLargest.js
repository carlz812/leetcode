/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.length = nums.length;
    this.nums = nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    var nums = this.nums;
    this.length++;
    var i = 0;
    while (nums[i] < val) {
        i++
    }
    nums.splice(i, 0, val);
    this.nums = nums;
    return nums[this.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */