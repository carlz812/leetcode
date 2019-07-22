/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
    var start = 0,
        end = letters.length - 1,
        ex = -1,
        tarCode = target.charCodeAt(0);

    while (start < end) {
        var pos = (start + end) >> 1;
        var posCode = letters[pos].charCodeAt(0);
        if (posCode > tarCode) {
            end = pos;
        } else if (posCode < tarCode) {
            start = pos + 1;
        } else {
            start = pos;
            break;
        }
    }

    while (letters[start].charCodeAt(0) <= tarCode) {
        if (start === letters.length - 1) {
            return letters[0];
        }
        start++;
    }
    return letters[start];
};

var letters = ['c', 'f', 'j'], target = 'd';

console.log(nextGreatestLetter(letters, target));
