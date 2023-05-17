let first = true;
let second = false;
if(first){
    console.log('첫 번째 조건 충족!');
    if(second){
        console.log('두 번째 조건도 충족!');
    }else{
        console.log('두 번째 조건은 불충족!');
    }
}else{
    console.log('첫 번째 조건 불충족!');
}