/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    var hashMap = new Map();
    var queue = [];
    var copyRoot = new Node(node.val, []);
    hashMap.set(node, copyRoot);
    queue.push([copyRoot, node]);
    while (queue.length) {
        var curr = queue.shift();
        var copy = curr[0], old = curr[1];
        old.neighbors.forEach(node => {
            var val = node.val;
            if (hashMap.has(node)) {
                copy.neighbors.push(hashMap.get(node));
                return;
            }
            var newNode = new Node(val, []);
            hashMap.set(node, newNode);
            queue.push([newNode, node]);
            copy.neighbors.push(newNode);
        })
    }
    return copyRoot;
};


var cloneGraph = function (node) {
    if (node == null) return null;
    var map = new Map();
    var queue = [];
    queue.push(node);
    var copyNode = new Node();
    copyNode.val = node.val;
    map.set(node, copyNode);

    while (queue.length) {
        var current = queue.shiht();
        if (current.neighbors == null) {
            continue;
        }

        if (map.get(current).neighbors == null) {
            map.get(current).neighbors = [];
        }

        var neighbors = current.neighbors;
        // var copiedneighbors = [];
        neighbors.forEach(function (node) {
            if (!map.has(neighbor)) {
                queue.push(neighbor);
                var tmp = new Node();
                tmp.val = neighbor.val;
                map.set(neighbor, tmp);
            }
            map.get(current).neighbors.push(map.get(neighbor));
        })
    }
    return map.get(node);
}
