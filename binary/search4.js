/*

给定一个升序整数数组，写一个函数搜索 nums 中数字 target。如果 target 存在，返回它的下标，否则返回 -1。
注意，这个数组的大小是未知的。
你只可以通过 ArrayReader 接口访问这个数组，ArrayReader.get(k) 返回数组中第 k 个元素（下标从 0 开始）。

你可以认为数组中所有的整数都小于 10000。如果你访问数组越界，ArrayReader.get 会返回 2147483647。

*/

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {

    var start = 0, end = 1, pos = 1;
    while (reader.get(1) !== 2147483647) {
        var gus = reader.get(pos);
        if (gus < target) {
            start = pos;
            pos = pos * 2;
        } else {
            end = pos;
            break;
        }
    }

    while (start < end) {
        var pos = (start + end) >> 1;
        if (reader.get(pos) > target) {
            end = pos - 1;
        } else if (reader.get(pos) < target) {
            start = pos + 1;
        } else {
            return pos;
        }
    }
    if (start === end) {
        return reader.get(start) === target ? start : -1;
    }
    return -1;
};
