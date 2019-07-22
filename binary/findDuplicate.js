/**
 * @param {number[]} nums
 * @return {number}
 */
/*
不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。
*/
var findDuplicate = function (nums) {
    var size = nums.length,
        left = 1,
        right = size - 1;

    // 【注意】如果小于等于 mid 的个数如果多于 mid，例如：
            // 8 个萝卜 放在 7 个坑里，就至少有 1 个坑里至少有 2 个萝卜
    // 这个坑的位置可能是 1、2、3、4、5、6、7
    // 重复的数就一定在 [1, mid] 里面，包括 1 和 mid
    // 此时，不排除中位数的分支逻辑好想，因此写在前面

    while (left < right) {
        var mid = (left + right) >> 1,
            counter = 0;
        nums.forEach((num) => {
            if (num <= mid) {
                counter += 1;
            }
        });
        if (counter > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
