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
    }

    var store = [], res = [];
    store.push(root);

    while (store.length !== 0) {
        var temp = store.pop();
        res.push(temp.val);
        if (temp.right != null) {
            store.push(temp.right);
        }
        if (temp.left != null) {
            store.push(temp.left);
        }
    }

    return res;
};
