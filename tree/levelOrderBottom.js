/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    var first = 0;
    var sum = [];
    getFlattenTree(root, first,sum)
    return sum.reverse();
};



function getFlattenTree(root, level, sum) {
    if (!(root === null)) {
        sum[level] ? sum[level].push(root.val) : sum[level] = [root.val];
        getFlattenTree(root.left, level + 1, sum)
        getFlattenTree(root.right, level + 1, sum)
    }
}