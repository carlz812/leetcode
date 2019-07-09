/*
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
*/

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }
    var rootVal = postorder.pop();
    var root = new TreeNode(rootVal);

    var pos = inorder.indexOf(rootVal);

    var leftInOrder = inorder.slice(0, pos),
        rightInOrder = inorder.slice(pos + 1, inorder.length);

    var leftPostOrder = postorder.slice(0, pos),
        rightPostOrder = postorder.slice(pos, postorder.length);

    root.left = buildTree(leftInOrder, leftPostOrder);
    root.right = buildTree(rightInOrder, rightPostOrder);

    return root;
};

console.log(buildTree([4, 2, 5, 1, 6, 3, 7], [4, 5, 2, 6, 7, 3, 1]));
