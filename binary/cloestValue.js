/*
给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。

注意：

给定的目标值 target 是一个浮点数
题目保证在该二叉搜索树中只会存在一个最接近目标值的数*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    var curr = root, stack = [], prev = root;
    while (curr !== null || stack.length !== 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        var temp = stack.pop();
        if (temp.val > target) {
            var prevGap = Math.abs(prev.val - target);
            var currGap = Math.abs(temp.val - target);

            if (prevGap > currGap) {
                return temp.val;
            } else {
                return prev.val;
            }
        }
        prev = temp;
        curr = temp.right;
    }
    return prev.val;
};
