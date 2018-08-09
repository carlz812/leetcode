/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var isBadVersion = function (version) {
    return version >= 1702766719
};

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        function getFirst(start, end) {
            if (end - start <= 1) {
                return isBadVersion(start) ? start : end
            }
            let middle = Math.floor((end + start) / 2);

            // console.log(start, end, middle);
            if (isBadVersion(middle)) {
                return getFirst(start, middle);
            } else {
                return getFirst(middle, end);
            }
        }

        return getFirst(1, n);
    };
};

var first = solution(isBadVersion);
console.log(first(2126753390));