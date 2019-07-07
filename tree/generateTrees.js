/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) {
        return new TreeNode(null);
    }
    return inner(1, n);

};

var inner = function (start, end) {
    var trees = [];
    if (start < end) {
        trees.push(null);
        return trees;
    }

    for (var i = start; i <= end; i++) {
        var left_trees = inner(start, i - 1);
        var right_trees = inner(i + 1, end);
        left_trees.forEach(l => {
            right_trees.forEach(r => {
                var current_tree = new TreeNode(i);
                current_tree.left = l;
                current_tree.right = r;
                trees.push(current_tree);
            });
        });
    }
    return trees;

};