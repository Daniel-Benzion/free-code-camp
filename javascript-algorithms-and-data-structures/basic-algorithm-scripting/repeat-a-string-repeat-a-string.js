function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";
    let arr = [];
    while (num > 0) {
        arr.push(str);
        num--;
    }
    let result = "";
    arr.forEach(x => result += x);
    return result;
}