/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var a = [...new Set(nums1)],
        b = [...new Set(nums2)];

    return a.filter(num => b.indexOf(num) !== -1);
};
