/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var a = {};
    var len = nums.length;
    nums.forEach((num) => {
        if (a[num] === undefined) {
            a[num] = 1;
        } else {
            a[num]++;
        }
    });

    return Object.keys(a).filter(key => a[key] >= len / 2)[0];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));