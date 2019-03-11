function selectSort(arr) {
    var i = 0;
    while (i < arr.length - 1) {
        var minIndex = getMin(arr.slice(i));
        var temp = arr[minIndex + i];
        arr[minIndex + i] = arr[i];
        arr[i] = temp;
        i++;
    }
    return arr;
}


function getMin(arr) {
    var minIndex = 0,
        i = 0,
        n = arr.length;

    while (i < n) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
        i++;
    }

    return minIndex;
}

console.log(selectSort([2, 3, 5, 1, 4, 7]));
