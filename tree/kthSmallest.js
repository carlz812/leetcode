/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    var i = 0;
    var val = 0;
    var ldr = function (root, k) {
        if (root == null) {
            return;
        }
        ldr(root.left, k);
        if (k == ++i) {
            val = root.val;
        }
        ldr(root.right, k);
    };
    ldr(root, k);
    return val;
};
