/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder =function (root) {
    var res = [];
    inner(root, res, 0);
    return res;

};
var inner = function (root, res, level) {
    if (root === null) {
        return;
    }
    if(!res[level]){
        res[level]=[];
    }
    res[level].push(root.val);
    if (root.children.length !== 0) {
        root.children.forEach(item => {
            inner(item, res, level + 1);
        })
    }
}
