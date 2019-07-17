/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let ans = [],
        insertIndex = 0;
    while (insertIndex < nums1.length) {
        let item = nums1[insertIndex];
        while (item > nums2[0]) {
            nums1.splice(insertIndex, 0, nums2[0])
            nums2.splice(0, 1);
            insertIndex++;
        }
        insertIndex++;
    }
    let remain = nums2.length,
        currNums1Len = m + n - remain;
    nums1.splice(currNums1Len, n, ...nums2);
};

var nums1 = [1, 3, 7, 9, 10, 0, 0, 0, 0],
    nums2 = [2, 5, 6 ,7],
    n = nums2.length,
    m = nums1.length - n;

var ans = merge(nums1, m, nums2, n);

// console.log();