# 14장 News Viewer Project

* 14.1 비동기 작업의 이해
    - 웹 애플리케이션을 만들다 보면 처리할 때 시간이 걸리는 작업이 있습니다.
    - 서버 쪽 데이터가 필요할 때는 Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신합니다.
    - 네트워크 송수신 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라 응답을 받을 때 까지 기다렸다가 전달받은 응답 데이터를 처리합니다.
    - 이 과정에서 동기적으로 작업을 처리하게 되면 요청이 끝날 때 까지 작업이 중지되기 때문에 다른작업을 할 수 없습니다. 
    - 이를 비동기적으로 처리한다면 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러가지 요청을 처리할 수 있고 기다리는 과정에서 다른 함수도 호출할 수 있습니다.
    - 이러한 비동기 작업의 예시로 setTimeout 함수를 들 수 있습니다.
    ```javascript
        function printMe(){
            console.log('Hello World!');
        }
        setTimeout(printMe, 3000);
        console.log('대기중...');
        // 실행 결과
        /*
            대기중 ...
            Hello World!
        */
    ```
    - setTimeout 함수가 호출되는 시점에서 3초동안 멈추는 것이 아니라. 코드가 위에서 아래까지 호출 되고 3초뒤에 지정해준 printMe 함수가 호출 됩니다.
    

* 14.1.1 콜백함수
    - 비동기 작업을 할 때 가장 흔히 사용하는 방법은 콜백함수를 사용하는 것입니다.
    - 1초 뒤 10을 더해서 출력하는 함수
    ```javascript
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
    });
    console.log('Hello World!');
    ```
    - 1초에 걸쳐서 순차적으로 처리하고 싶을 때는
     ```javascript
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
    ```
    - 이런식으로 처리할 수 있습니다. 이런식으로 콜백을 여러번 중첩시키면 코드의 가독성이 떨어집니다.
    - 이런 콜백지옥을 해결하기 위해 ES6에 도입된 기능이 Promise입니다.


* 14.1.2 Promise
    - 예제
    ```javascript
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
    ```


* 14.1.3 async / await
    - async / await은 Promise를 더욱 쉽게 사용할 수 있게 해주는 문법입니다.
    - 사용법은 함수의 앞부분에 async 키워드를 추가하고, 해당 함수 내부에서 Promise의 앞부분에 await 키워드를 사용합니다.
    - 이렇게 하면 Promise가 끝날 때 까지 기다리고, 결과 값을 특정 변수에 담을 수 있습니다.
    ```javascript
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

    async function runTasks(){
        try{
            let result = await increase(0);
            console.log(result);
            result = await increase(result);
            console.log(result);
            result = await increase(result);
            console.log(result);
            result = await increase(result);
            console.log(result);
            result = await increase(result);
            console.log(result);
            result = await increase(result);
            console.log(result);
            result = await increase(result);
        }catch(e){
            console.log(e);
        }
    }
    ```