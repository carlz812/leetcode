/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var binaryX = x.toString(2).split(''),
        binaryY = y.toString(2).split(''),
        lenX = binaryX.length,
        lenY = binaryY.length

    var len = Math.max(lenX, lenY);

    if (lenX > lenY) {
        binaryY = new Array(len - lenY).fill('0').concat(binaryY)
    } else {
        binaryX = new Array(len - lenX).fill('0').concat(binaryX)
    }

    return binaryX.filter((n, index) => n !== binaryY[index]).length
};

var asn = hammingDistance(1, 4)

console.log(asn);