/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    var res = [];
    var map = new Map();
    if (root == null) return res;
    saveRoute(root, res, map);
    return res;
};

//递归获取每个子树的路径，保存于Map中
var saveRoute = function (node, res, map) {
    if (node == null) return '';
    //自底向上获取每个节点的序列化值
    var route = node.val + ',' + saveRoute(node.left, res, map) + ',' + saveRoute(
        node.right,
        res,
        map);
    //将结果放入map，判断是否有相同子树
    //避免出现多次相同子树
    if (map.get(route) != null && map.get(route) == 1) {
        res.add(node);
    }
    map.set(route, map.has(route) ? map.get(route) + 1 : 0);
    return route;
};
