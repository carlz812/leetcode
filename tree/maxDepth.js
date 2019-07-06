/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归操作
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/**
 *
 * 遍历操作
 * @param root
 * @returns {number}
 */
var maxDepth = function (root) {
    var stack = [];
    if (root !== null) {
        stack.push({
            current_depth: 1,
            node: root
        });
    }

    var depth = 0;
    while (stack.length !== 0) {
        var root = stack.pop(),
            current_depth = root.current_depth;

        if (root.node !== null) {
            depth = Math.max(depth, current_depth);
            stack.push({
                current_depth: current_depth + 1,
                node: root.node.left
            });
            stack.push({
                current_depth: current_depth + 1,
                node: root.node.right
            });
        }
    }
    return depth;
};

