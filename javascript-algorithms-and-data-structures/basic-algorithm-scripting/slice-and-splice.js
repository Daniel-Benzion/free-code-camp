function frankenSplice(arr1, arr2, n) {
    let arr3 = [];
    for (let i = 0; i < arr2.length; i++) {
        arr3.push(arr2[i]);
    }
    arr3.splice(n, 0, ...arr1);
    return arr3;
}