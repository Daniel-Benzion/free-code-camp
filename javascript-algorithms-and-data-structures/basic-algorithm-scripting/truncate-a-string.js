function truncateString(str, num) {
    if (num >= str.length) return str;
    let arr = str.split("");
    let result = "";
    for (let i = 0; i < num; i++) {
        result += arr[i];
    }
    result += "...";
    return result;
}