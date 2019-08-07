/**
 * @param {string[]} words
 * @return {number[][]}
 */
const palindromePairs = function (words) {
    const trie = new Trie();
    words.forEach(function (w, i) {
        trie.insert(w, i);
    })

    var ans = [];
    words.forEach((word, index) => {
        if (word === '') {
            words.forEach((n, pos) => {
                if (isReverse(n.split(''))) {
                    if (pos !== index) {
                        ans.push([index, pos], [pos, index]);
                    }
                }
            })
        } else {
            var tar = word.split('').reverse().join('');
            var res = trie.startWith(tar, index);
            ans.push(...res.map(n => [n.index, index]));
        }
    })

    return ans;
};

var Trie = function () {
    this.root = new Node();
}

Trie.prototype.getIndex = function (key) {
    return key.charCodeAt(0) - 97;
};

Trie.prototype.insert = function (word, index) {
    const queue = word.split('');
    let root = this.root;
    while (queue.length) {
        const cur = queue.shift();
        const key = this.getIndex(cur);
        if (!root.children[key]) {
            root.children[key] = new Node();
        }
        root = root.children[key];
    }
    root.word = word;
    root.index = index;
}

Trie.prototype.startWith = function (prefix, index) {
    let root = this.root;
    const res = [];
    const queue = prefix.split('');
    while (queue.length) {
        const cur = queue.shift();
        const key = this.getIndex(cur);
        if (!root.children[key]) {
            queue.unshift(cur);
            if (isReverse(queue)) {
                if (root.index !== index && root.index !== -1) {
                    res.push(root);
                }
            }
            return res;
        }
        if (root.word) {
            const temp = queue.slice();
            temp.unshift(cur);
            if (isReverse(temp)) {
                if (root.index !== index && root.index !== -1) {
                    res.push(root);
                }
            }
        }
        root = root.children[key];
    }
    // if (root.word === prefix && root.index !== index) {
    //     res.push(root)
    // }
    res.push(...this.getAllChild(root, prefix, index))
    return res;
}

Trie.prototype.getAllChild = function (root, prefix, index) {
    var res = [];
    var traversal = function (node) {
        var curr = node;
        if (curr.word && curr.index !== index && curr.index !== -1) {
            var str = curr.word.replace(prefix, '');
            if (isReverse(str.split(''))) {
                res.push(curr);
            }
        }
        curr.children.forEach(node => {
            node && traversal(node);
        })
    }
    traversal(root);
    return res;
}

const isReverse = function (arr) {
    const str = arr.join('');
    return str === arr.reverse().join('');
}

var Node = function () {
    this.word = null;
    this.index = -1;
    this.children = [];
}

var ta = ["a", ""];
// var ta = ["bat", "tab", "cat"];
// var ta = ["s", "ls", "sssll", 'sss'];
// var ta = ["abcd", "dcba", "lls", "s", "sssll"];
console.log(palindromePairs(ta));