function findLongestWordLength(str) {
    let arr = str.split(" ");
    let max = 0;
    arr.forEach(function(x) {
        if (x.length > max) max = x.length;
    });
    return max;
}