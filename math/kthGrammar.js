/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    if (N === 1) return 0;
    return kthGrammar(N - 1, Math.floor((K + 1) / 2)) === 0 ? 1 - (K % 2) : K % 2;
};

console.log(kthGrammar(4, 4)); // 1
console.log(kthGrammar(3, 2)); // 1