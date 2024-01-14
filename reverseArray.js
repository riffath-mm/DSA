function reverseArray(arr) {
    let Left = 0;
    let Right = arr.length - 1;
    while (Left <= Right) {
        let temp = 0;
        temp = arr[Left];
        arr[Left] = arr[Right];
        arr[Right] = temp;
        Left++;
        Right--;
    }
    return arr;
}
let Array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(reverseArray(Array));
