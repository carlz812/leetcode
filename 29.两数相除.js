/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-Integers/description/
 *
 * algorithms
 * Medium (18.75%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    24.5K
 * Total Submissions: 131K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 *
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 示例 1:
 *
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 *
 * 说明:
 *
 *
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 *
 *
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const Max = Math.pow(2, 31) - 1;
    const Min = - Math.pow(2, 31);
    var sign = (dividend > 0) ^ (divisor > 0);
    var result = 0;
    if (dividend > 0) {
        dividend = -dividend;
    }
    if (divisor > 0) divisor = -divisor;
    while (dividend <= divisor) {
        var temp_result = -1;
        var temp_divisor = divisor;
        while (dividend <= temp_divisor << 1) {
            if (temp_divisor <= Min >> 1) break;
            temp_result = temp_result << 1;
            temp_divisor = temp_divisor << 1;
        }
        dividend = dividend - temp_divisor;
        result += temp_result;
    }
    if (!sign) {
        if (result <= Min) return Max;
        result = -result;
    }
    return result;
};
// @lc code=end