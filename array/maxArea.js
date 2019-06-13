/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var start = 0, end = height.length - 1;
    var max = 0;

    while (start < end) {
        let left = height[start],
            right = height[end];
        let area = (end - start) * Math.min(left, right);
        if (area > max) {
            max = area;
        }
        if (left < right) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));