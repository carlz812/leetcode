/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
    this.list = [];
    this.length = 0;
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    var i = 0;
    while (number < this.list[i]) {
        i++;
    }
    this.list.splice(i, 0, number);
    console.log(this.list);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    var list = this.list;
    var start = 0, end = list.length - 1;

    while (start < end) {
        var s = list[start],
            e = list[end];

        if (s + e === value) {
            return true;
        }
        if (s + e < value) {
            start++;
        } else {
            end--;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */