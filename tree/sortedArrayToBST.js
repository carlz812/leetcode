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
    var len = nums.length;
    var root = null;
    root = recursion(nums, 1, len, root)
    nums = null;
    return root;
};

function recursion(array, lhs, rhs, root) {
    if (lhs <= rhs) {
        var mid = (lhs + rhs + 1) >> 1;
        root = new TreeNode(array[mid - 1]);
        root.left = recursion(array, lhs, mid - 1, root.left);
        root.right = recursion(array, mid + 1, rhs, root.right);
    }
    return root;
}
