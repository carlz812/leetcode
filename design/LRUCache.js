/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.store = new Map();
    this.sequense = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.store.has(key)) {
        var pos = this.sequense.indexOf(key);
        this.sequense.splice(pos, 1);
        this.sequense.push(key);
        return this.store.get(key);
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (this.store.has(key)) {
        var pos = this.sequense.indexOf(key);
        this.sequense.splice(pos, 1);
        this.store.delete(key);
    }
    if (this.store.size >= this.capacity) {
        var pop = this.sequense.shift();
        this.store.delete(pop);
    }
    this.store.set(key, value);
    this.sequense.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

