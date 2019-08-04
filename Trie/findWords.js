/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    var trie = new Trie();
    var origins = [];
    var res = [];
    words.forEach(w => {
        trie.insert(w);
        origins.push(w[0]);
    });


    var DIRECTIONS = [
        [-1, 0], [1, 0], [0, 1], [0, -1]
    ]

    var M = board.length,
        N = board[0].length;

    var queue = [];
    board.forEach((row, r) => {
        row.forEach((col, c) => {
            if (origins.indexOf(col) !== -1) {
                queue.push([r, c, [[r, c]]]);
            }
        })
    })


    while (queue.length) {
        var curr = queue.shift();

        var m = curr[0],
            n = curr[1],
            prev = curr[2];

        var circleChance = false;
        DIRECTIONS.forEach(dir => {
            let mm = m + dir[0],
                nn = n + dir[1];

            if (mm < 0 || nn < 0 || mm >= M || nn >= N || board[mm][nn] === null) {
                return;
            }

            // var prev = board[m][n];
            // var now = board[mm][nn];
            let word = prev.map(pos => board[pos[0]][pos[1]]).join('');
            word = word + board[mm][nn];
            // console.log(prev);
            // console.log(dir);
            console.log(word);
            console.log(mm, nn, board[mm][nn]);

            if (trie.startsWith(word)) {
                // console.log('word');
                // console.log(word);
                if (trie.search(word)) {
                    console.log('search')
                    console.log(word)
                    prev.forEach(pos => {
                        res.push(word);
                        board[pos[0]][pos[1]] = null;
                    })
                } else {
                    prev.push([mm, nn])
                    queue.push([mm, nn, prev]);
                }
                circleChance = true;
            }
        })

        if (!circleChance) {
            // prev[m][n] = null;
        }
    }

    return res;
};

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new Node(0);
};

/** 
 * @param {string} key 
 * @return {void}
 */
Trie.prototype.insert = function (key) {
    var root = this.root;
    var w = key.split('');
    while (w.length) {
        var key = this.getIndex(w.shift());
        if (!root.children[key]) {
            root.children[key] = new Node();
        }
        root = root.children[key];
    }
    root.isWord = true;
};

/** 
 * @param {string} word
 * @return {number}
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

Trie.prototype.getIndex = function (word) {
    return word.charCodeAt(0) - 97;
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
        var curr = this.getIndex(pre.shift());
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
 * obj.insert(key)
 * var param_2 = obj.search(prefix)
 */

var Node = function () {
    this.isWord = false;
    this.children = [];
}



var words = ["oath", "pea", "eat", "rain"],
    board =
        [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v']
        ];

var res = findWords(board, words);
console.log(res);