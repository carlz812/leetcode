/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.root = new Node(0);
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    var root = this.root;
    var w = word.split('');
    while (w.length) {
        var curr = w.shift();
        var key = this.getIndex(curr);
        if (!root.children[key]) {
            root.children[key] = new Node();
        }
        root = root.children[key];
    }
    root.isWord = true;
    // console.log(this.root);
};

WordDictionary.prototype.search = function (word) {
    return this.match(word, this.root, 0);
}
/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.match = function (word, node, start) {
    if (start == word.length) {
        return node.isWord;
    }
    var alpha = word[start];

    if (alpha == '.') {
        for (var i = 0; i < 26; i++) {
            if (node.children[i] != null && this.match(word, node.children[i], start + 1)) {
                return true;
            }
        }
        return false;
    } else {
        var key = this.getIndex(alpha);
        if (node.children[key] == null) {
            return false;

        }
        return this.match(word, node.children[key], start + 1);
    }
};

WordDictionary.prototype.getIndex = function (word) {
    if (word === '.') {
        return 0;
    }
    return word.charCodeAt(0) - 96;
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


var a = new WordDictionary();
a.addWord("bad")
a.addWord("pad")
a.addWord("dad")
// console.log(a.search("bad"));
// console.log(a.search("pad"));
// console.log(a.search("."));
// console.log(a.search("a"));
// console.log(a.search(".a"));
console.log(a.search("b.."));
