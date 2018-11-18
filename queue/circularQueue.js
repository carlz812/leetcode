/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.size = k;
    this.content = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (!this.isFull()) {
        this.content.push(value);
        return true;
    }
    return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (!this.isEmpty()) {
        this.content.shift();
        return true;
    }
    return false;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.content[0] || null;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return !this.isEmpty() ? this.content.slice(-1)[0] : null;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.content.length === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.content.length === this.size;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var circularQueue = new MyCircularQueue(3); // 设置长度为3

var a = circularQueue.enQueue(1);  // 返回true
console.log(a);

var b = circularQueue.enQueue(2);  // 返回true
console.log(b);
var c = circularQueue.enQueue(3);  // 返回true
console.log(c);
var d = circularQueue.enQueue(4);  // 返回false,队列已满
console.log(d);
var e = circularQueue.Rear();  // 返回3
console.log(e);
var f = circularQueue.isFull();  // 返回true
console.log(f);
var g = circularQueue.deQueue();  // 返回true
console.log(g);
var h = circularQueue.enQueue(4);  // 返回true
console.log(h);
var i = circularQueue.Rear();  // 返回4
console.log(i);
