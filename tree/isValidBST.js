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
    var sorted = getFlattenTree(root),
        ans = true;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] < sorted[i - 1]) {
            ans = false;
            break;
        }
    }
    return ans;
};

function getFlattenTree(root) {
    if (!root) {
        return []
    } else {
        return getFlattenTree(root.left).concat(root.val, getFlattenTree(root.right))
    }
}