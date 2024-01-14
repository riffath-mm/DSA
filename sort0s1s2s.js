function sort0s1s2s(arr) {
    let temp;
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;
                high--;
                break;
        }
    }
    return arr;
}
let Arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1, 0, 2];

console.log(sort0s1s2s(Arr));
