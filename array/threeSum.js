var threeSum = function (nums) {
    var ans = [];
    if (nums == null || nums.length < 3) {
        return ans;
    }
    return nums.map((target, index) => {
        let tempArr = nums.slice();
        tempArr.splice(index, 1);
        return twoSum(tempArr, -target)
    }).reduce(function (a, b) {
        return a.concat(b);
    }).filter(arr => {
        let arrString = arr.sort().toString();
        if (ans.indexOf(arrString) === -1) {
            ans.push(arrString)
            return true
        } else {
            return false;
        }
    })
};

var twoSum = function (nums, target) {
    var sorted = quickSort(nums);
    let i = 0,
        j = sorted.length - 1,
        ans = []

    while (i < j) {
        if (sorted[i] + sorted[j] < target) {
            i++
        } else if (sorted[i] + sorted[j] > target) {
            j--
        } else if (sorted[i] + sorted[j] === target) {
            ans.push([sorted[i], -target, sorted[j]])
            i++;
            j--;
        } else {
            break;
        }
    }
    return ans;
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

var start = Date.now()
var threeSum = threeSum([13, -14, -10, -4, 4, 4, 0, -14, 5, -9, -3, -10, 14, 7, -3, -4, -3, 12, -14, 2, -11, -6, 0, -7, 13, -2, -7, -11, -14, -13, 5, 14, -12, 11, -13, -1, -8, 2, 0, 4, 1, 4, 10, -8, -11, -8, 3, 1, 11, 4, -12, 8, 5, -4, -14, -4, 9, -13, -8, 2, -11, 12, -7, 14, 0, -5, -2, 7, 5, 5, -3, 13, -6, -8, -10, -10, -9, 0, 6, -12, 11, 2, 11, 1, 13, 4, 12, -1, 6, -11, -14, 2, 9, -6, 1, -6, -4, 14, -13, 8, 4, -1, 6, 6, -2, 11, 11, 4, -4, -5, -1, -8, 12, -13, 1, 10, 7, -10, -14, -10, -5, -13, 0, 11])
var end = Date.now()
console.log(threeSum);
console.log(threeSum.length);
console.log(end - start);