/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    var size = arr.length,
        left = 0,
        right = size - k;

    while (left < right) {
        var mid = (left + right) >> 1;
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr.slice(left, left + k);
};

var arr = [0, 0, 1, 2, 3, 3, 4, 7, 7, 8],
    k = 3, x = 5;
console.log(findClosestElements(arr, k, x));