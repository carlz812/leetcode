/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    while (root) {
        if (root.val < val) {
            root = root.right;
        }
        else if (root.val > val) {
            root = root.left;
        }
        else if (root.val === val) {
            break;
        }
    }
    return root;
};
