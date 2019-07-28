/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    var queue = [];
    var map = {};
    var hashMap = {};
    queue.push([n, 0]);
    var squares = [];
    var i = 1;
    while (i * i <= n) {
        squares.push([i, n - i * i]);
        i++;
    }

    while (queue.length) {
        var node = queue.shift();
        if (node[0] === 0) {
            return node[1];
        }
        var nextNodes = getNextNodes(node[0], node[1], map, hashMap);
        queue.push(...nextNodes);
    }
};

var getNextNodes = function (n, depth, map, hashMap) {
    if (map[n]) {
        return map[n];
    }
    var squares = [];
    var i = 1;
    while (i * i <= n) {
        var key = n - i * i;
        i++;
        if(hashMap[key]){
            continue;
        }
        squares.push([key, depth + 1]);
        hashMap[key]= true;
    }
    map[n] = squares;
    return squares;
}
