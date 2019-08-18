/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    var ans = [];
    var map = new Map();
    var len = s.length;
    var start = 0, end = 1;
    var inner = function (start, res) {
        if (map.get(start) === false) {
            return false;
        }

        var chance = false;
        var end = start + 1;
        if (end === len) {
            ans.push([...res, s.substring(start, end)]);
            return true;
        }
        while (end <= len) {
            var temp = s.substring(start, end);
            if (isPalindrome(temp)) {
                if (end === len) {
                    ans.push([...res, temp]);
                    return true;
                }
                var p = inner(end, [...res, temp]);

                if (p) {
                    chance = true;
                }
            }
            end++;
        }
        map.set(start, chance);
        return chance;
    };
    inner(0, []);

    return ans;
};


var isPalindrome = function (str) {
    return str === str.split('').reverse().join('');
};

console.log(partition('aabab'));
