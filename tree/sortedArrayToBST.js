/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
    return dichotomy(nums, 0, nums.length - 1);
}

function dichotomy(nums, begin, end) {
    if (begin > end) {
        return null;
    }
    var mid = Math.floor((begin + end) / 2);
    var root = new TreeNode(nums[mid]);//根结点，为当前数组的中间值
    root.left = dichotomy(nums, begin, mid - 1);//根结点的左孩子为左半段数组的中间值
    root.right = dichotomy(nums, mid + 1, end);//根结点的右孩子为右半段数组的中间值
    return root;
}
