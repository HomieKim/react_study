import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixedNumber : 0
    //     };
    // }  생성자 굳이 사용안해도 state 객체로 사용가능
    state = {
        number : 0,
        fixedNumber : 0
    }
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={()=>{
                        this.setState(
                            {
                                number : number + 1
                            },
                            () =>{
                                console.log('방금 setState가 호출 되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;