/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.hashMapGap = 17;
    this.hashSet = Array(this.hashMapGap - 1).fill(null);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    var hashKey = this.getHashKey(key);
    var head = this.hashSet[hashKey];
    var node = new Node(key);
    if (!head) {
        this.hashSet[hashKey] = node;
    } else {
        while (head.next) {
            head = head.next;
        }
        head.next = node;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    var hashKey = this.getHashKey(key);
    var head = this.hashSet[hashKey];
    while (head) {
        if (head.key === key) {
            head.key = null;
        }
        head = head.next;
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    var hashKey = this.getHashKey(key);
    var head = this.hashSet[hashKey];
    while (head) {
        if (head.key === key) {
            return true;
        }
        head = head.next;
    }
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

MyHashSet.prototype.getHashKey = function (key) {
    var gap = this.hashMapGap;
    return key % gap;
}

var Node = function (key) {
    this.key = key;
    this.next = null;
}
