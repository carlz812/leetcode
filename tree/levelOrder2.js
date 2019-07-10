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
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }

    var level = 0;
    var res = [], stack = [];

    var temp, level, node;

    stack.push({
        node: root,
        level: 0
    });
    while (stack.length !== 0) {
        temp = stack.pop();
        node = temp.node;
        level = temp.level;

        if (!res[level]) {
            res[level] = [];
        }
        res[level].push(node.val);

        if (node.right) {
            stack.push({
                node: node.right,
                level: level + 1
            });
        }
        if (node.left) {
            stack.push({
                node: node.left,
                level: level + 1
            });
        }
    }

    return res;
};
