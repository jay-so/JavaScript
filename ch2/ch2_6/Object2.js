const jay = {
    name: '제이',
    year: 1995,
    month: 4,
    date:3,
    gender: 'M',
};

const name = 'date';
console.log(jay['name']);
console.log(jay[name]); //jay['date']와 같음
console.log(jay.hello);