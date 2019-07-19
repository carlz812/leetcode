/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    var map = {}, res = [], min = Number.MAX_SAFE_INTEGER;
    list1.forEach((r, index) => {
        map[r] = index;
    })

    list2.forEach((r, index) => {
        var old = map[r];
        if (old !== undefined) {
            var sum = old + index;
            if (sum <= min) {
                res[sum] ? res[sum].push(r) : res[sum] = [r]
                min = sum;
            }
        };
    })
    return res[min];
};
