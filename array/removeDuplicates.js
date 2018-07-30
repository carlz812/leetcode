/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) { // 5，33，5，15，5
    var len = nums.length; // 5
    if (len < 2) return len;
    var numPrev = nums[len - 1]; // 5
    var iPos = len - 2; // 3
    while (iPos >= 0) {
        if (nums[iPos] == numPrev) { //duplicate found
            var dupStart = iPos;// 1
            while (iPos >= 0 && nums[iPos] == numPrev) iPos--;
            nums.splice(iPos + 1, dupStart - iPos);
        }
        else {
            numPrev = nums[iPos];
            iPos--;
        }
    }
    return nums.length;
};