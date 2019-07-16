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
var insertIntoBST = function (root, val) {
    var curr = root;
    var node = new TreeNode(val);
    if (curr === null) {
        return node;
    }
    while (curr) {
        if (curr.val < val) {
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = node;
                break;
            }
        } else if (curr.val > val) {
            if (curr.left) {
                curr = curr.left;
            } else {
                curr.left = node;
                break;
            }
        }
    }
    return root;
};
