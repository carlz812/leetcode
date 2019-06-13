/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var pos = 1;
    var repeat = 1;

    while (pos <= nums.length - 1) {
        var current = nums[pos];
        var prev = nums[pos - 1];

        if (current === prev) {
            if (repeat === 2) {
                nums.splice(pos, 1);
            } else {
                repeat++;
                pos++;
            }
        } else {
            repeat = 1;
            pos++;
        }
    }
    return nums.length;
};

var res = removeDuplicates([1,1,1,2,2,3]);
console.log(res);