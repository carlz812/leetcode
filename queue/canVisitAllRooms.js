/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    var arr = Array(rooms.length).fill(0);
    var queue = [];
    var start = rooms[0];
    arr[0] = true;
    start.forEach(key => {
        arr[key] = true;
        queue.push(key);
    })

    while (queue.length) {
        var curr = queue.shift();
        rooms[curr].forEach(key => {
            if (arr[key]) {
                return;
            }
            arr[key] = true;
            queue.push(key);
        })
    }

    return arr.every(key => key);
};


console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));
// console.log(canVisitAllRooms([[1], [2], [3], []]));
