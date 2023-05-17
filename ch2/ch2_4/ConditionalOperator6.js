let condition1 = true;
let condition2 = false;
let value = condition1
    ? condition2
        ? '둘 다 참'
        : 'conditional1만 참'
    : 'conditional1이 거짓';

console.log(value);