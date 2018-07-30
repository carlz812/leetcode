function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var cPos = Math.floor(arr.length / 2),
        comp = arr.splice(cPos, 1)[0],
        left = [],
        right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < comp) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([comp], quickSort(right))
}


console.log(quickSort([2, 3, 5, 1, 4, 7]));