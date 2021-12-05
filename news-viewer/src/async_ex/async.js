function increase(number, callback){
    setTimeout(()=>{
        const result = number+10;
        if(callback){
            callback(result);
        }
    }, 1000);
}
console.log('작업시작');
increase(0, result =>{
    console.log(result);
    increase(result, result=>{
        console.log(result);
        increase(result, result=>{
            console.log(result);
            increase(result,result=>{
                console.log(result);
                console.log('작업완료');
            });
        });
    })
});
console.log('Hello World!');

/*
실행결과
작업시작
Hello World!
10
20
30
40
작업완료
*/