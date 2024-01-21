function secondSmallest(arr) {
    let smallest = arr[0];
    let secSmallest = Number.POSITIVE_INFINITY;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] != smallest && arr[i] < secSmallest) {
            secSmallest = arr[i];
        }
    }
    return secSmallest;
}
let arr = [1, 4, 5, 7, 6, 12, 0, 88, 15];
console.log(secondSmallest(arr));
