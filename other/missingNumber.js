/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var ans = 0;
    for (var i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) == -1) {
            ans = i;
            break;
        }
    }
    return ans;
};

missingNumber([9,6,4,2,3,5,7,0,1]);