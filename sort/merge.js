/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let ans = [];
    nums1 = nums1.slice(0, m);
    nums2 = nums2.slice(0);

    nums1.forEach(item => {
        let index = 0
        while (index < n) {
            if (item < nums2[index]) {
                ans.push(item)
                break
            } else {
                ans.push(nums2[index]);
                nums2.splice(index, 1);
                index++;
            }
        }
    })
    return ans.concat(nums2);
};

var nums1 = [1, 2, 3, 4,0, 0, 0], m = 4,
    nums2 = [2, 5, 6], n = 3;

var ans = merge(nums1, m, nums2, n);

console.log(ans);