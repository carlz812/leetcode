/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    return new Array(n).fill(0).filter((item, index) => isPrime(index)).length
};

function isPrime(number) {
    if (typeof number !== 'number' || number < 2) {
        return false;
    }

    if (number === 2) {//2是质数
        return true;
    } else if (number % 2 === 0) {//排除偶数
        return false;
    }

    for (var i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

var ans = countPrimes(4)
console.log(ans);