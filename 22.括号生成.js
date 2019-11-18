/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (72.16%)
 * Likes:    613
 * Dislikes: 0
 * Total Accepted:    53.6K
 * Total Submissions: 73.9K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res  = [];
    if(n===0){
        return res;
    }

    function dfs(currentString, left, right){
        if(left === 0 & right === 0){
            res.push(currentString);
            return;
        }

        if(left>0){
            dfs(currentString+'(', left - 1, right);
        } 

        if(right> 0 && left< right){
            dfs(currentString+')', left, right-1);
        }
    }
    
    dfs('', n,n);
    return res;
};
// @lc code=end