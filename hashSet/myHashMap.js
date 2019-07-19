/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.hashMapGap = 17;
    this.hashSet = Array(this.hashMapGap - 1).fill(null);
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    var hashKey = this.getHashKey(key);
    var head = this.hashSet[hashKey];
    var node = new Node(key, value);
    if (!head) {
        this.hashSet[hashKey] = node;
    } else {
        var prev = head;
        while (head) {
            if (head.key === key) {
                head.value = value;
                return;
            }
            prev = head;
            head = head.next;
        }
        prev.next = node;
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    var hashKey = this.getHashKey(key);
    var head = this.hashSet[hashKey];
    while (head) {
        if (head.key === key) {
            return head.value;
        }
        head = head.next;
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    var hashKey = this.getHashKey(key);
    var head = this.hashSet[hashKey];
    while (head) {
        if (head.key === key) {
            head.key = null;
            head.value = null;
        }
        head = head.next;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
MyHashMap.prototype.getHashKey = function (key) {
    var gap = this.hashMapGap;
    return key % gap;
}

var Node = function (key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
}
