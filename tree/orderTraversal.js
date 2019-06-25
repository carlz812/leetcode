/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (root === null) {
        return [];
    } else {
        return traversal(root, []);
    }
};

var traversal = function (root, list) {
    /* pre order */
    // list.push(root.val);
    if (root.left != null) {
        traversal(root.left, list);
    }
    /* in order */
    // list.push(root.val);
    if (root.right != null) {
        traversal(root.right, list);
    }
    /* post order */
    // list.push(root.val);
    return list;
};