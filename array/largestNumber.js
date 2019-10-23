/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        if ((a.toString())[0] > (b.toString())[0]) {
            return -1;
        } else if ((a.toString())[0] < (b.toString())[0]) {
            return 1;
        } else {
            if (a === b) {
                return 0;
            } else {
                return compare(a.toString(), b.toString());
            }
        }

    });

    // 排除“00”这种情况
    let res = nums.join('');
    while (res.indexOf('0') === 0 && res.length >= 2) {
        res = res.substring(1, res.length);
    }
    return res;
};

var compare = (a, b) => {
    if (a + b > b + a) {
        return -1;
    } else {
        return 1;
    }
};
