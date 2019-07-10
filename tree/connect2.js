/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    var levels = levelOrder(root);
    levels.forEach(layer => {
        layer.reduce((a, b) => {
            a.next = b;
            return b;
        });
    });
    return root;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    var first = 0;
    var sum = [];
    getFlattenTree(root, first, sum);
    return sum;
};

function getFlattenTree(root, level, sum) {
    if (root !== null) {
        sum[level] ? sum[level].push(root) : sum[level] = [root];
        getFlattenTree(root.left, level + 1, sum);
        getFlattenTree(root.right, level + 1, sum);
    }
}
