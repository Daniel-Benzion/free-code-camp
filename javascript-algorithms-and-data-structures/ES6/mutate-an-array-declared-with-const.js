const s = [5, 7, 2];
function editInPlace() {
    s.pop();
    s.unshift(2);
    return s;
}
editInPlace();