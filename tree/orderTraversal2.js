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


var inorderTraversal = function (root) {
    var res = [], stack = [];
    var curr = root;

    while (curr !== null || stack.length !== 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr);
        curr = curr.right;
    }
    return res;
};


var postorderTraversal = function (root) {
    if (root === null) {
        return [];
    }

    var store = [], res = [];
    store.push(root);

    while (store.length !== 0) {
        var temp = store.pop();
        res.push(temp.val);
        if (temp.left != null) {
            store.push(temp.left);
        }
        if (temp.right != null) {
            store.push(temp.right);
        }
    }

    return res.reverse();
};
