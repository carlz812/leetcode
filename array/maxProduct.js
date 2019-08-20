/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (!nums.length) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    var zero = [];
    var negative = [];
    nums.forEach((n, index) => {
        if (n === 0) {
            zero.push(index);
        } else if (n < 0) {
            negative.push(index);
        }
    });
    if (zero.length) {
        var zeroSplit = splitArr(nums, zero);
        return Math.max(0, ...zeroSplit.map(arr => maxProduct(arr)));
    }

    if (negative.length % 2 === 0) {
        return getAns(nums);
    }

    var frontIndex = negative[0];
    var tailIndex = negative[negative.length - 1];

    var frontMax = Math.max(getAns(nums.slice(0, frontIndex)), getAns(nums.slice(frontIndex + 1)));
    var tailMax = Math.max(getAns(nums.slice(0, tailIndex)), getAns(nums.slice(tailIndex + 1)));

    return Math.max(frontMax, tailMax);
};

var getAns = function (arr) {
    if (!arr.length) {
        return 0;
    }
    return arr.reduce((a, b) => a * b);
};


var splitArr = function (arr, indexes) {
    var res = [];
    var prev = 0;
    indexes.push(arr.length);
    indexes.forEach(index => {
        var temp = arr.slice(prev, index);
        prev = index + 1;
        res.push(temp);
    });

    return res;
};


var res = maxProduct([-1, -2, 0, -3]);
console.log(res);

// console.log(splitArr([2, 3, -2, 4, -1, 6, 23, -1, 9], [2, 4, 7]));
