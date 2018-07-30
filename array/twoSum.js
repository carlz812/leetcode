/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var sorted = quickSort(nums.map((num, index) => {
        return {
            value: num,
            index
        }
    }));
    let i = 0,
        j = sorted.length - 1;

    while (i < j) {
        if (sorted[i].value + sorted[j].value < target) {
            i++
        } else if (sorted[i].value + sorted[j].value > target) {
            j--
        } else {
            break
        }
    }

    return [sorted[i].index, sorted[j].index]
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
        if (arr[i].value < comp.value) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([comp], quickSort(right))
}

let ans = twoSum([3, 3], 6);
console.log(ans);