/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    var start = [];
    var len = gas.length;
    var res = -1;
    gas.forEach((g, index) => {
        if (g >= cost[index]) {
            start.push(index);
        }
    });

    start.some(st => {
        var copy = st;
        var load = 0;
        var limit = len;

        while (st < limit) {
            load += gas[st];
            load = load - cost[st];
            if (load < 0) {
                return false;
            }
            st++;
            if (st === len) {
                limit = copy;
                st = 0;
            }
        }
        res = st;
        return true;
    });
    return res;
};


var gas = [2, 3, 4],
    cost = [3, 4, 3];


console.log(canCompleteCircuit(gas, cost));
