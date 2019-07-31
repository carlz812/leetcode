/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    var root = this.root;
    var w = word.split('');
    while (w.length) {
        var curr = w.shift();
        if (!root.children[curr]) {
            root.children[curr] = new Node(curr);
        }
        root = root.children[curr];
    }
    root.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    var root = this.root;
    var w = word.split('');
    while (w.length) {
        var curr = w.shift();
        if (root.children[curr]) {
            root = root.children[curr];
        } else {
            return false;
        }
    }
    return root.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var root = this.root;
    var pre = prefix.split('');
    while (pre.length) {
        var curr = pre.shift();
        if (root.children[curr]) {
            root = root.children[curr];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var Node = function () {
    this.isWord = false;
    this.children = {};
}