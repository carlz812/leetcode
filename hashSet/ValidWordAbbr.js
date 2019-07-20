/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
    var set = new Set();
    var store = new Map();
    dictionary.forEach(word => {
        var w = this.getEncoded(word);
        set.add(word);
        store.set(w, store.has(w) ? store.get(w) + 1 : 1);
    });
    this.set = set;
    this.store = store;
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
    if (this.set.has(word)) {
        return !(this.store.get(this.getEncoded(word)) > 1);
    } else {
        return !(this.store.get(this.getEncoded(word)) >= 1);
    }

};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */

ValidWordAbbr.prototype.getEncoded = function (word) {
    var len = word.length;
    return len > 2 ? `${word[0]}${len - 2}${word[len - 1]}` : word;
};
