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
    var res = [];
    if (root !== null) {
        preorder(root, res, 0, 0);
    }
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
    var root = new TreeNode(levels[0][0]);
    inner(root, levels, 1, 0);
    return root;
};

var inner = function (root, levels, level, pos) {
    var currentLevel = levels[level];
    if (!currentLevel) {
        return;
    }
    var left = currentLevel[pos];
    var right = currentLevel[pos + 1];

    if (left) {
        currentLevel[pos] = new TreeNode(left);
        root.left = currentLevel[pos];
        inner(root.left, levels, level + 1, 2 * pos);
    }
    if (right) {
        currentLevel[pos + 1] = new TreeNode(right);
        root.right = currentLevel[pos + 1];
        inner(root.right, levels, level + 1, 2 * (pos + 1));
    }
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

console.log(serialize(a));
console.log(deserialize('[{"0":1},{"0":2,"1":3},{"0":4,"2":6,"3":7}]'));