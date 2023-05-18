// 두 코드는 동일함
function a(){
    console.log('a');
}
a();
function a(){
    console.log('a');
    return undefined;
}
a();