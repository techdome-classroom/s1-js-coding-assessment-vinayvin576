const decodeTheRing = function (s, p) {
    function matchHelper(i, j) {
        if (j === p.length) {
            return i === s.length;
        }
        if (p[j] === '*') {
            return (i < s.length && matchHelper(i + 1, j)) || matchHelper(i, j + 1);
        }
        if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
            return matchHelper(i + 1, j + 1);
        }
        return false;
    }
return matchHelper(0, 0);
};

module.exports = decodeTheRing;
