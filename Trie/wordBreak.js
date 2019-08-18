/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var trie = new Trie();
    var map = new Map();
    var res = [];
    wordDict.forEach(w => {
        trie.insert(w);
    });
    var helper = function (start, end, prefix) {
        var key = start;
        var chance = false;
        if (map.get(key) === false) {
            // console.log(start, end, prefix, s.substring(start, end));
            return;
        }
        while (end <= s.length) {
            var temp = s.substring(start, end);
            if (trie.search(temp)) {
                var value = prefix ? `${prefix} ${temp}` : temp;
                if (end === s.length) {
                    res.push(value);
                    return true;
                }
                if (helper(end, end + 1, value)) {
                    chance = true;
                }
            }
            end++;
        }
        map.set(key, chance);
        return chance;
    };

    helper(0, 1, '');
    return res;
};

var Trie = function () {
    this.root = new Node();
};

Trie.prototype.insert = function (word) {
    var arr = word.split('');
    var root = this.root;
    while (arr.length) {
        var k = this.getIndex(arr.shift());
        if (!root.children[k]) {
            root.children[k] = new Node();
        }
        root = root.children[k];
    }
    root.word = word;
};
Trie.prototype.search = function (word) {
    var arr = word.split('');
    var root = this.root;
    while (arr.length) {
        var k = this.getIndex(arr.shift());
        if (!root.children[k]) {
            return false;
        }
        root = root.children[k];
    }
    return root.word === word;
};
Trie.prototype.getIndex = function (key) {
    return key.charCodeAt(0) - 97;
};

var Node = function () {
    this.word = null;
    this.children = [];
};
