/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0 || preorder.length === 0) {
        return null;
    }
    var rootVal = preorder.shift();
    var root = new TreeNode(rootVal);

    var pos = inorder.indexOf(rootVal);

    var leftInOrder = inorder.slice(0, pos),
        rightInOrder = inorder.slice(pos + 1, inorder.length);

    var leftPreOrder = preorder.slice(0, pos),
        rightPreOrder = preorder.slice(pos, preorder.length);

    root.left = buildTree(leftPreOrder, leftInOrder);
    root.right = buildTree(rightPreOrder, rightInOrder);

    return root;
};
