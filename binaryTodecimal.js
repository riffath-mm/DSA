function binaryTodecimal(n) {
    let dec_value = 0;
    let base = 1;
    let temp = n;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
        dec_value += last_digit * base;
        base = base * 2;
    }
    return dec_value;
}
let num = 10101001;
console.log(
    `convert binary ${num} is equivalent of decimal  = `,
    binaryTodecimal(num),
);
