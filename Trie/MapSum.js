/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.root = new Node(0);
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    var root = this.root;
    var w = key.split('');
    while (w.length) {
        var curr = w.shift();
        var key = this.getIndex(curr);
        if (!root.children[key]) {
            root.children[key] = new Node();
        }
        root = root.children[key];
    }
    root.isWord = true;
    root.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    var root = this.root;
    var pre = prefix.split('');
    var sum = 0;
    while (pre.length) {
        var curr = pre.shift();
        var key = this.getIndex(curr);
        
        if (root.children[key]) {
            root = root.children[key];
        } else {
            return sum;
        }
    }
    var addTraversal = function (root) {
        var curr = root;
        if (curr.val) {
            sum += curr.val;
        }
        curr.children.forEach(node => {
            addTraversal(node);
        })
    }
    addTraversal(root, sum);

    return sum;
};

MapSum.prototype.getIndex = function (word) {
    return word.charCodeAt(0) - 97;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

var Node = function () {
    this.val = 0;
    this.isWord = false;
    this.children = [];
}

