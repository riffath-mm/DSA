function insertElement(arr, x, pos) {
    for (let i = arr.length - 1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
    return arr;
}

let num1 = [5, 6, 7, 8, 9];
let insertedArray = insertElement(num1, 15, 2);
console.log(insertedArray);
