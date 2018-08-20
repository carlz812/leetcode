/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.dataStore = [];
    this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.dataStore[this.len++] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.dataStore[--this.len];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.dataStore[this.len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    var min = this.top(),
        source = this.dataStore.slice(0, this.len - 1);

    for (var i = 0; i < this.len - 1; i++) {
        min = min < source[i] ? min : source[i]
    }
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */