let i = 0;
while(i<10){ // i가 9일때까지 반복함
    i++;
    if(i % 2 === 0){ //i가 짝수라면
        continue; //넘어감
    }
    console.log(i);
}