/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) {
        return '[]';
    }
    var res = [];
    preorder(root, res, 0, 0);
    return JSON.stringify(res);
};

var preorder = function (root, res, level, pos) {
    if (!res[level]) {
        res[level] = {};
    }
    res[level][pos] = root.val;
    if (root.left) {
        preorder(root.left, res, level + 1, 2 * pos);
    }
    if (root.right) {
        preorder(root.right, res, level + 1, 2 * pos + 1);
    }
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    var levels = JSON.parse(data),
        res = null;
    if (levels.length === 0) {
        return res;
    }
    if (levels.length === 1) {
        return new TreeNode(levels[0][0]);
    }
    levels.reduce((a, b) => {
        Object.keys(a).forEach(key => {
            var node = a[key];
            var index = key;
            var pos = index * 2;
            if (res === null) {
                node = new TreeNode(node);
                res = node;
            }
            if (node === null) {
                return;
            }

            var left = b[pos] ;
            var right = b[pos + 1] ;

            if (left) {
                b[pos] = new TreeNode(left);
            }
            if (right) {
                b[pos + 1] = new TreeNode(right);
            }

            node.left = b[pos]|| null;
            node.right = b[pos + 1]|| null;
        });
        return b;
    });
    return res;
};

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
var e = new TreeNode(5);
var f = new TreeNode(6);
var g = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
// b.right = e;
c.left = f;
c.right = g;

// console.log(serialize(a));
console.log(deserialize('[{"0":1},{"0":2,"1":3},{"0":4,"2":6,"3":7}]'));