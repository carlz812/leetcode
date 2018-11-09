/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var start = 1, end = numbers.length;

    while (start < end) {
        let temp = numbers[start - 1] + numbers[end - 1];
        if (temp < target) {
            start++;
        } else if (temp > target) {
            end--;
        } else {
            break;
        }
    }
    return start === 1 && end === 1 ? [] : [start, end];
};

var numbers = [2, 7, 11, 15], target = 9;
console.log(twoSum(numbers, target));
