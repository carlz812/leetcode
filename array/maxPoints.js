/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function (points) {
    const len = points.length;
    if (len <= 2) {
        return len;
    }
    let map = new Map();
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j && points[i] !== points[j]) {
                const [k, c] = getLineParam(points[i], points[j]);
                const key = `${k}__${c}`;
                let prev = map.get(key);
                if (!prev) {
                    prev = new Set();
                }
                prev.add(i);
                prev.add(j);
                map.set(key, prev);
            }
        }
    }
    console.log(map);
    return Math.max(...[...map.values()].map(set => set.size));
};

const getLineParam = function (a, b) {
    const [aX, aY] = a;
    const [bX, bY] = b;
    const times = Math.max(...[aX, aY, bX, bY].map(num => `${num}`.length));

    if (bX === aX) {
        return ['$', aX];
    }
    const k = (bY - aY) * (bX - aX);
    const c = aY - k * aX;

    return [k, c];
};


var res = maxPoints([[0, 0], [94911151, 94911150], [94911152, 94911151]]);
console.log(res);
