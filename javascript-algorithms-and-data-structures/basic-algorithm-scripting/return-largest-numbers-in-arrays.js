function largestOfFour(arr) {
    let result = [];
    arr.forEach(function(x) {
        let max = x[0];
        for (let i = 1; i < x.length; i++) {
            if (x[i] > max) max = x[i];
        }
        result.push(max);
    })
    return result;
}