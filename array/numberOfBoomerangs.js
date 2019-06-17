/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    var res = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let dis = getDistance(points[i], points[j]);
                console.log(points[i], points[j], dis);
                let current = map.get(dis);
                if (!current) {
                    current = 1;
                } else {
                    res += (2 * current);
                    current++;
                }
                map.set(dis, current);
            }
        }
        console.log(map, res);
        map.clear();
    }
    return res;
};

var getDistance = function (a, b) {
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
};

var res = numberOfBoomerangs([[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]);
console.log(res);