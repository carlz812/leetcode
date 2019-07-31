/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
    this.dictionary = new MapSum();
    this.collection = [];
    sentences.forEach((w, i) => {
        this.dictionary.insert(w, times[i])
    });
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
    if (c === '#') {
        this.collection = [];
        return [];
    } else {
        this.collection.push(c);
    }

    var res = this.dictionary.getResult(this.collection);
    console.log(res);
    return res;
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

/**
* Initialize your data structure here.
*/
var MapSum = function () {
    this.root = new Node();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (word, val) {
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
    root.isOver = true;
    root.weight = val;
    root.word = word;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.getResult = function (prefix) {
    var root = this.root;
    var pre = prefix.slice();
    var res = [];
    while (pre.length) {
        var curr = pre.shift();
        var key = this.getIndex(curr);

        if (root.children[key]) {
            root = root.children[key];
        } else {
            return res;
        }
    }
    var resPush = function (node) {
        if (res.length === 0) {
            res.push(node);
            return;
        }
        var i = 0;
        while (true) {
            if (!res[i]) {
                res[i] = node;
                break;
            } else if (node.weight < res[i].weight) {
                i++;
            } else if (node.weight === res[i].weight) {
                var map = {
                    [node.word]: node,
                    [res[i].word]: res[i]
                }
                res.splice(i, 1, ...[node.word, res[i].word].sort().map(k=>map[k]));
                break;
            } else {
                res.splice(i, 0, node);
                break;
            }
        }
        if (res.length > 3) {
            res.length = 3;
        }
    }

    var addTraversal = function (root) {
        var curr = root;
        if (curr.isOver) {
            resPush(curr);
        }
        curr.children.forEach(node => {
            node && addTraversal(node);
        })
    }
    addTraversal(root);
    // console.log(res);
    return res.map(node=>node.word);
};

MapSum.prototype.getIndex = function (word) {
    if (word === ' ') return 0;
    return word.charCodeAt(0) - 96;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

var Node = function () {
    this.word = '';
    this.weight = 0;
    this.isOver = false;
    this.children = [];
}

var a = ["i love you", "island", "iroman", "i love leetcode"],
    b = [5,3,2,2];


var a = new AutocompleteSystem(a, b);
a.input('i');
a.input(' ');
a.input('a');
a.input('#');
a.input('i');
a.input(' ');
a.input('a');
a.input('#');
a.input('i');
a.input(' ');
a.input('a');
a.input('#');
