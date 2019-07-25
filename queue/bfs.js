/**
 * Return the length of the shortest path between root and target node.
 */
function BFS(root, target) {
    var queue = [];  // store all nodes which are waiting to be processed
    var step = 0;       // number of steps neeeded from root to current node
    // initialize
    queue.push(root);
    // BFS
    while (queue.length) {
        step = step + 1;
        // iterate the nodes which are already in the queue
        var size = queue.length;
        for (var i = 0; i < size; ++i) {
            var cur = queue.splice(0, 1);
            if (cur === target) {
                return step;
            }
            cur.children.forEach(function (node) {
                queue.push(node);
            })
        }
    }
    return -1;          // there is no path from root to target
}