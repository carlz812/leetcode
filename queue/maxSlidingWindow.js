/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    var sliding = new Queue(k);
    var res = [];
    for (var i = 0; i < k; i++) {
        sliding.add(nums[i]);
    }
    if (sliding.maxPos >= 0) {
        res.push(sliding.max);
    }
    for (var j = k; j < nums.length; j++) {
        sliding.add(nums[j]);
        console.log(sliding.store);
        console.log(sliding.max);
        res.push(sliding.max);
    }
    return res;
};

var Queue = function (size) {
    this.store = [];
    this.size = size;
    this.max = Number.MIN_SAFE_INTEGER;
    this.maxPos = -1;
};
Queue.prototype.add = function (num) {
    if (this.store.length === this.size) {
        this.store.shift();
        this.maxPos--;
    }
    this.store.push(num);
    if (this.maxPos >= 0) {
        if (this.max <= num) {
            this.max = num;
            this.maxPos = this.store.length - 1;
        }
    } else {
        this.resetMax();
    }
};

Queue.prototype.resetMax = function () {
    var nums = this.store;
    var i = 0;
    this.max = Number.MIN_SAFE_INTEGER;
    while (i < nums.length) {
        if (this.max <= nums[i]) {
            this.max = nums[i];
            this.maxPos = i;
        }
        i++;
    }
};

console.log(maxSlidingWindow([1, -1], 1));
