/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    var trie = new Trie();
    var result = Number.MIN_SAFE_INTEGER;
    nums.forEach(num => trie.insert(num));
    nums.forEach(num => {
        result = Math.max(result, trie.getResult(num))
    });
    return result;
};

var Trie = function () {
    this.root = new Node();
};

Trie.prototype.insert = function (value) {
    var cur = this.root;
    // 依次取从右往左第 i 位
    for (var i = 31; i >= 0; i--) {
        var v = (value >> i) & 1;
        if (cur.children[v] == null) {
            cur.children[v] = new Node();
        }
        cur = cur.children[v];
    }
};

Trie.prototype.getResult = function (value) {
    var cur = this.root;
    var result = 0;
    for (var i = 31; i >= 0; i--) {
        // 取右数第 n 位, 0 or 1
        var v = (value >> i) & 1;
        var path = v;
        if (cur.children[1 ^ v] != null) {
            path = 1 ^ v;
        }
        cur = cur.children[path];
        result = result | ((path ^ v) << i);
    }
    return result;
};

var Node = function () {
    this.children = [];
}


var nums = [3, 10, 5, 25, 2, 8];
console.log(findMaximumXOR(nums));