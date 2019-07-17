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
    var res = null;
    var inner = function (root) {
        if (root === null) {
            return 1;
        }

        var leftLen = inner(root.left);
        var rightLen = inner(root.right);

        if (Math.abs(leftLen - rightLen) > 1) {
            res = false;
        }
        return Math.max(leftLen, rightLen) + 1;
    };

    inner(root);
    return res;
};

