function commonElem3(arr1, arr2, arr3) {
    let n1 = arr1.length; // stores size of arr1
    let n2 = arr2.length;
    let n3 = arr3.length;
    let i = 0,
        j = 0,
        k = 0;
    while (i < n1 && j < n2 && k < n3) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            console.log(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
}

let Arr1 = [1, 5, 6, 20, 40, 80];
let Arr2 = [6, 7, 20, 80, 100];
let Arr3 = [3, 15, 20, 30, 70, 80, 120];
commonElem3(Arr1, Arr2, Arr3);
