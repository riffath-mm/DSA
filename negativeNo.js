function negativeNo(arr) {
    let LEFT = 0;
    let RIGHT = arr?.length - 1;
    while (LEFT < RIGHT) {
        if (arr[LEFT] < 0) {
            LEFT++;
        }
        if (arr[RIGHT] > 0) {
            RIGHT--;
        }
        if (LEFT == RIGHT) break;
        if (LEFT < RIGHT) {
            // Swap negative and non-negative elements
            let TEMP = arr[LEFT];
            arr[LEFT] = arr[RIGHT];
            arr[RIGHT] = TEMP;
        }
    }
    return arr;
}
let array = [-1, 2, -3, 4, 5, 6, -7, 8, 9, -6, 3];
console.log(negativeNo(array));
