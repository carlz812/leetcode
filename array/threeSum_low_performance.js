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