/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    var res = null;
    var inner = function (root, p, q) {
        if (root === null) {
            return false;
        }
        // 目标节点也有可能是最近的祖先节点， 三选二
        var center = (root.val === p.val || root.val === q.val) ? 1 : 0;
        var left = inner(root.left, p, q) ? 1 : 0;
        var right = inner(root.right, p, q) ? 1 : 0;

        if (center + left + right >= 2) {
            res = root;
        }
        return (center + left + right > 0);
    };

    inner(root, p, q);
    return res;
};

