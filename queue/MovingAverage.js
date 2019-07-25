/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size;
    this.store = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.curr++;
    this.store.push(val);
    if (this.store.length > this.size) {
        this.store.splice(0, 1);
    }
    var res = this.store.reduce((a, b) => a + b) / this.store.length;
    return res;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var m = new MovingAverage(3);
m.next(1)
m.next(10)
m.next(3)
m.next(5)
m.next(2)
