function UnionOf2Array(arr1, arr2) {
    let i = 0;
    let j = 0;
    let union = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            union.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            union.push(arr2[j]);
            j++;
        } else {
            union.push(arr1[i]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        union.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        union.push(arr2[j]);
        j++;
    }
    return union;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(UnionOf2Array(arr1, arr2));
