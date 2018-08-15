/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    return new Array(n).fill(0).map((num, index) => {
        let current = index + 1,
            ans = '';
        if (isFizz(current)) ans += 'Fizz'
        if (isBuzz(current)) ans += 'Buzz'
        return ans || `${current}`;
    })
};

function isFizz(n) {
    return n % 3 === 0
}

function isBuzz(n) {
    return n % 5 === 0
}

console.log(fizzBuzz(10));