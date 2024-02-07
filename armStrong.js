function armStrong(num) {
    let sum = 0,
        rem = 0,
        z;
    z = num;
    while (num > 0) {
        rem = num % 10;
        sum = sum + rem * rem * rem;
        num = Math.floor(num / 10);
    }
    if (z === sum) {
        console.log(`${z} is Armstrong Number`);
    } else {
        console.log(`${z} is Not  Armstrong Number`);
    }
}
let num = 153;
armStrong(num);
