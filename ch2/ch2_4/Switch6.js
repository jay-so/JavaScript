let fruit = '사과';
//if문을 이용함
if(fruit === '사과'){
    console.log('사과입니다!');
}else if(fruit=== '배'){
    console.log('배입니다!');
}else if(fruit=== '포도'){
    console.log('포도입니다!');
}else{
    console.log('뭔지 모르겠습니다!');
}

//switch문을 이용함
switch (fruit){
    default:
        console.log('뭔지 모르겠습니다!');
    case "사과":
        console.log('사과입니다!');
        break;
    case '배':
        console.log('배입니다!');
        break;
    case '포도':
        console.log('포도입니다!');
        break;
}