/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    var curr = root, count = 1;
    if(curr===null){
        return 0;
    }
    var inner = function (root, level) {
        if (root === null) {
            return;
        }
        count = Math.max(level, count)
        root.children.forEach((item) => {
            inner(item, level + 1);
        })
    };
    inner(curr, 1);

    return count;
};

