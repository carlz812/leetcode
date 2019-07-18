/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    var res = [];
    inner(root, res);
    return res;

};
var inner = function (root, res) {
    if (root === null) {
        return;
    }
    res.push(root.val);
    while (root.children.length !== 0) {
        inner(root.children.pop(), res);
    }
}
