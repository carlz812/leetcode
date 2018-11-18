/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    var len = temperatures.length;
    return temperatures.map(function (num, index) {
        let s = index, res = 0;
        while (s < len) {
            if (num < temperatures[s]) {
                res = s - index;
                break;
            } else {
                s++;
            }
        }
        return res;
    });
};

var temperatures = [55,38,53,81,61,93,97,32,43,78];

console.log(dailyTemperatures(temperatures));
