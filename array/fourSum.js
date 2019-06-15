/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }
    var sorted = nums.sort((a, b) => a - b);

    var map = new Set();

    function traversal(sorted, target) {

        if (sorted.length < 4) {
            return [];
        }
        // console.log(sorted, target);
        var i = 0,
            j = sorted.length - 1;

        let res = [];
        let currentKey = sorted.join('');

        while (!map.has(currentKey) && (i < j - 2)) {
            let except = sorted.slice(i + 1, j);
            let currentTarget = target - sorted[i] - sorted[j];
            map.add(currentKey);
            let twoSumResult = twoSum(except, currentTarget);
            if (twoSumResult.length > 0) {
                twoSumResult.forEach(twoSumArr => {
                    res.push([sorted[i], ...twoSumArr, sorted[j]]);
                });
            }
            res.push(...traversal([sorted[i], ...except], target));
            res.push(...traversal([...except, sorted[j]], target));
            i++;
            j--;
        }
        return res;
    }

    return unique(traversal(sorted, target));
};

var twoSum = function (nums, target) {
    var sorted = nums;
    var i = 0,
        j = sorted.length - 1;

    var res = [];

    while (i < j) {
        if (sorted[i] + sorted[j] < target) {
            i++;
        } else if (sorted[i] + sorted[j] > target) {
            j--;
        } else {
            res.push([sorted[i], sorted[j]]);
            i++;
            j--;
        }
    }
    return res;
};

var unique = function (res) {
    var string = res.map(arr => arr.join(','));
    var res = [];
    string.forEach(str => {
        if (res.indexOf(str) === -1) {
            res.push(str);
        }
    });

    return res.map(str => str.split(',').map(key => +key));
};

var res = fourSum([5, 0, 7, 4, -2, 2, -3, 4, -1, -2, 8, 0, 2, 5, -2, -6, 2, -2], 27);
console.log(res);