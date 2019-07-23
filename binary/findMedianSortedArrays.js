/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var n = nums1.length;
    var m = nums2.length;
    var left = (n + m + 1) >> 1;
    var right = (n + m + 2) >> 1;
    return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) + getKth(
        nums1,
        0,
        n - 1,
        nums2,
        0,
        m - 1,
        right)) >> 1;
};

var getKth = function (nums1, start1, end1, nums2, start2, end2, k) {
    var len1 = end1 - start1 + 1;
    var len2 = end2 - start2 + 1;
    //让 len1 的长度小于 len2，这样就能保证如果有数组空了，一定是 len1
    if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
    if (len1 == 0) return nums2[start2 + k - 1];

    if (k == 1) return Math.min(nums1[start1], nums2[start2]);

    var i = Math.floor(start1 + Math.min(len1, k / 2) - 1);
    var j = Math.floor(start2 + Math.min(len2, k / 2) - 1);

    if (nums1[i] > nums2[j]) {
        return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
    } else {
        return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
    }
};

var nums1 = [1, 3],
    nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
