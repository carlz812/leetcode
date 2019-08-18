/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var trie = new Trie();
    var map = new Map();
    var dict = new Map();
    wordDict.forEach(w => {
        trie.insert(w);
    });
    var helper = function (start, end) {
        var key = start;
        if (map.has(key)) {
            return map.get(key);
        }
        while (end <= s.length) {
            var temp = s.substring(start, end);
            var dictHad = false;
            if (dict.has(temp)) {
                dictHad = dict.get(temp);
            } else {
                dictHad = trie.search(temp);
            }
            if (dictHad) {
                dict.set(temp, true);
                if (end === s.length) {
                    map.set(key, true);
                    return true;
                }
                if (helper(end, end + 1)) {
                    map.set(key, true);
                    return true;
                }
            } else {
                dict.set(temp, false);
            }
            end++;
        }
        map.set(key, false);
        return false;
    };

    return helper(0, 1);
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
