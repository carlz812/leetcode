/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var numL1 = nums1.length,
        numL2 = nums2.length,
        mainArr = numL1 < numL2 ? nums1 : nums2,
        compArr = numL1 < numL2 ? nums2 : nums1,
        i = mainArr.length - 1,
        ans = [];

    while (i >= 0) {
        var mainItem = mainArr[i],
            exitIndex = compArr.indexOf(mainItem);

        if (exitIndex !== -1) {
            ans.push(mainItem);
            mainArr.splice(i, 1);
            compArr.splice(exitIndex, 1);
        } else {
            i--;
        }
    }

    return ans;
};