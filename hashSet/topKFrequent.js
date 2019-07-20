/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var obj = new Map();
    nums.forEach(num => {
        var count = obj.has(num) ? obj.get(num) : 0;
        obj.set(num, count + 1);
    })

    return [...obj].sort((a, b) => b[1] - a[1]).map(arr=>arr[0]).slice(0, k);
};
