/**
 * @param {string[]} words
 * @return {string[][]}
 */
class TrieNode {
    constructor(val, word) {
        this.val = val || null;
        this.isEnd = false;
        // 保存当前路径上的全部单词
        if (word) {
            this.wordList = [word];
        } else {
            this.wordList = [];
        }
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        this.insertHelper(word, this.root, word);
    }

    insertHelper(word, node, realWord) {
        const letter = word[0];
        const targetChild = node.children[letter];
        if (targetChild) {
            // 这里需要将当前待插入的单词添加到路径的所有TrieNode的wordList字段中
            targetChild.wordList.push(realWord);
            if (word.length === 1) {
                targetChild.isEnd = true;
            } else {
                this.insertHelper(word.slice(1), targetChild, realWord);
            }
        } else {
            const newChild = new TrieNode(letter, realWord);
            node.children[letter] = newChild;
            if (word.length === 1) {
                newChild.isEnd = true;
            } else {
                this.insertHelper(word.slice(1), newChild, realWord);
            }
        }
    }

    search(prefix) {
        return this.searchHelper(prefix, this.root);
    }

    searchHelper(prefix, node) {
        if (prefix.length === 0) {
            return node.wordList;
        }
        const letter = prefix[0];
        const targetChild = node.children[letter];
        if (targetChild) {
            return this.searchHelper(prefix.slice(1), targetChild);
        }
        return [];
    }
}

// 构建前缀
function getPrefix(current) {
    const startIdx = current.length;
    let result = '';
    for (let i = 0; i < current.length; i++) {
        result += current[i][startIdx];
    }
    return result;
}

function dfs(ans, current, trie) {
    if (current.length && current[0].length === current.length) {
        ans.push(current);
        return;
    }
    const currentPrefix = getPrefix(current);
    const wordList = trie.search(currentPrefix);
    wordList.forEach((word) => {
        const newCurrent = current.concat(word);
        dfs(ans, newCurrent, trie);
    });
}

var wordSquares = function (words) {
    const trie = new Trie();
    words.forEach((w) => {
        trie.insert(w);
    });
    const ans = [];
    words.forEach((w) => {
        dfs(ans, [w], trie);
    });
    return ans;
};
