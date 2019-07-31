/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
    var trie = new Trie();
    dict.forEach(word => {
        trie.insert(word);
    })
    return sentence
    .split(" ")
    .map(word => trie.exchange(word))
    .join(" ");
};

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
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.exchange = function (prefix) {
    var root = this.root;
    var pre = prefix.split('');
    var temp = '';
    while (pre.length) {
        var curr = pre.shift();
        if (root.children[curr] && !root.children[curr].isWord) {
            temp += curr;
            root = root.children[curr];
        } else {
            break;
        }
    }
    console.log(root);
    console.log(prefix);
    console.log(temp);
    if (root.isWord) {
        return temp;
    }
    return prefix;
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

var a = ["cat", "bat", "rat"],
    b =  "the cattle was rattled by the battery";

console.log(replaceWords(a, b));

