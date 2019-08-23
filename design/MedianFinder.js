/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.store = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    var i = 0;
    var len = this.store.length;
    while (i <= len) {
        if (i === len) {
            this.store.push(num);
            break;
        }
        if (this.store[i] >= num) {
            this.store.splice(i, 0, num);
            break;
        }
        i++;
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    var len = this.store.length;
    var midPos = len >> 1;

    return len % 2 === 0
        ? (this.store[midPos] + this.store[midPos - 1]) / 2
        : this.store[midPos];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var me = new MedianFinder();
me.addNum(1);
me.addNum(2);
console.log(me.findMedian());
me.addNum(3);
console.log(me.findMedian());
