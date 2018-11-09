/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var sorted = quickSort(nums);
    console.log(sorted);
    var result = [],
        sum = 0,
        index = 0,
        resIndex = 0,
        size = 2,
        length = nums.length;
    while (index < length) {
        let item = sorted.slice(index, (index += size));
        result[resIndex++] = item;
        sum += item[0];
    }
    return sum;
};

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var cPos = Math.floor(arr.length / 2),
        comp = arr.splice(cPos, 1)[0],
        left = [],
        right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < comp) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([comp], quickSort(right))
}


console.log(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]));
