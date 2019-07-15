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
var isValidBST = function (root) {
    var stack = [];
    var inorder = -Number.MAX_VALUE;

    stack.push(root);
    while (stack.length !== 0 || root != null) {
        while (root.left) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) return false;
        inorder = root.val;
        root = root.right;
    }
    return true;
};
