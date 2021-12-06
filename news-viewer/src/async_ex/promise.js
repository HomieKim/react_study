function increase(number){
    const promise = new Promise((resolve, reject)=>{    // resolve는 성공, reject는 실패
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50){
                const e = Error('Number Too Big');
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}

increase(0)
    . then(number =>{
        //Promise에서 resolve 된 값은 .then을 통해 받아 올 수 있습니다.
        console.log(number);
        return increase(number);
    })
    .then(number=>{
        console.log(number);
        return increase(number);
    })
    .then(number=>{
        console.log(number);
        return increase(number);
    })
    .then(number=>{
        console.log(number);
        return increase(number);
    })
    .then(number=>{
        console.log(number);
        return increase(number);
    })
    .then(number=>{
        console.log(number);
        return increase(number);
    })
    .catch(e=>{
        // 도중에 에러가 발생한 다면 .catch를 통해 처리할 수 있습니다.
        console.log(e);
    })