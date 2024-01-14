function movezerosToEnd(arr) {
    let insertPosition = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[insertPosition] = arr[i];
            insertPosition++;
        }
    }
    while (insertPosition < arr.length) {
        arr[insertPosition++] = 0;
    }
    return arr;
}
let Array = [0, 1, 0, 3, 12];

console.log(movezerosToEnd(Array));
