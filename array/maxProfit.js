/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var i = 0,
        splitArr = [],
        st = 0,
        ans = 0;

    while (i < prices.length) {
        if (prices[i] < prices[i + 1]) {
            i++;
        } else {
            if (st !== i) {
                splitArr.push([st, i]);
            }
            st = ++i;
        }
    }

    splitArr.forEach(arr => {
        var start = prices[arr[0]],
            end = prices[arr[1]];
        ans = ans + end - start;
    });

    return ans;
};