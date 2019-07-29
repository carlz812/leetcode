/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    var rLen = image.length;
    var cLen = image[0].length;
    var aimColor = image[sr][sc];
    if (aimColor === newColor) {
        return image;
    }
    image[sr][sc] = newColor;
    var directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    var queue = [];
    queue.push([sr, sc]);
    while (queue.length) {
        var curr = queue.shift();
        directions.forEach(dir => {
            var rr = dir[0] + curr[0];
            var cc = dir[1] + curr[1];
            if (rr < 0 || cc < 0 || rr >= rLen || cc >= cLen || image[rr][cc] !== aimColor) {
                return;
            }
            image[rr][cc] = newColor;
            queue.push([rr, cc]);
        })
    }
    return image;
};
