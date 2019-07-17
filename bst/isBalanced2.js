/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) {
        return true;
    }
    var count = 0, level = 1;

    var inner = function (root, f) {
        count++;
        level = Math.max(f, level);
        if (root.left) {
            inner(root.left, f + 1);
        }
        if (root.right) {
            inner(root.right, f + 1);
        }
    }
    inner(root, 1);
    var standard = Math.log2(count + 1);
    standard = standard % 1 === 0 ? standard : parseInt(standard) + 1
    return standard >= level;
};

