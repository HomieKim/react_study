#12장

* immer 사용법
    - immer는 불변성을 유지하는 작업을 간단히 처리하기 위해 사용하는 라이브러이 입니다.
    ```javascript
    import produce from 'immer';
    const nextState = produce(originalState, draft =>{
        //바꾸고 싶은 값을 바꿉니다.
        draft.somewhere.deep.inside = 5;
    })
    ```
    - produce 함수는 두가지 파라미터를 받습니다. 첫번째는 수정하고 싶은 상태, 두번 째는 상태를 어떻게 업데이트할지 정의하는 함수입니다.
    - 두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면, produce함수가 불변성을 유지해 주면서 새로운 상태를 생성해 줍니다.
    