function titleCase(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        let tempArr = arr[i].split("");
        tempArr[0] = tempArr[0].toUpperCase();
        arr[i] = tempArr.join("");
    }
    return arr.join(" ");
}