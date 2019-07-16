/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    var cur = root, prev = null, flag = 0;
    while (cur != null) {
        if (cur.val == key) {
            if (cur.right != null) {
                // 有右子树
                cur.val = findMin(cur);
            } else {
                if (cur == root) {
                    root = root.left;
                } else if (flag == 0) {
                    prev.left = cur.left;
                } else {
                    prev.right = cur.left;
                }
            }
            break;
        } else if (cur.val > key) {
            prev = cur;
            cur = cur.left;
            flag = 0;
        } else {
            prev = cur;
            cur = cur.right;
            flag = 1;
        }
    }
    return root;
};
var findMin = function (root) {
    var cur = root.right;
    var left = cur.left;
    // cur没有子树
    if (left == null) {
        // 直接修改数值，并删除子树中的最小节点
        root.right = cur.right;
        return cur.val;
    }
    // cur有左子树
    while (left.left != null) {
        // 直接修改数值，并删除子树中的最小节点
        cur = left;
        left = left.left;
    }
    cur.left = left.right;
    return left.val;
};
