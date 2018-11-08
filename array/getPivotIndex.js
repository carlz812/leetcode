/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    const len = nums.length;

    if (len < 3) {
        return -1;
    }
    const left = [];
    const right = nums.slice(1);

    let leftSum = getSum(left),
        rightSum = getSum(right),
        pivotIndex = 0,
        res = -1;

    while (pivotIndex < len) {
        if (leftSum === rightSum) {
            res = pivotIndex;
            break;
        }
        let pivot = nums[pivotIndex];
        left.push(pivot);
        leftSum += pivot;

        pivot = right.shift();
        rightSum -= pivot;
        pivotIndex++;
    }
    return res;
};

var getSum = (arr) => arr.length ? arr.reduce((a, b) => a + b) : 0;
