# todo-list

* 메모
    - todos 배열의 id 값은 useRef이용해서 관리합니다. (id 값은 참조만될 뿐 바뀐다고해서 리렌더링 될 필요가 없기 때문에)
    - onInsert함수는 useCallback으로 감싸줍니다. props로 전달해야 할 함수를 만들 때는 useCallback을 사용하는 것이 좋습니다.
    - 지우기 기능은 배열 내장함수 filter 사용하면 편리합니다.
    - filter 함수에는 조건을 확인해 주는 함수를 파라미터로 넣어줌, 이 함수는 true or false를 반환 true만 새로운 배열에 포함됩니다
    ```javascript
    const array = [1,2,3,4,5,6,7,8,9,10];
    const biggerThanFive = array.filter(number => number >5);
    // 결과 : [6,7,8,9,10]
    ```

    - 컴포넌트에 함수 전달할 때 왜 콜백 넣을까?
    reference : https://ko.reactjs.org/docs/handling-events.html, https://ko.reactjs.org/docs/faq-functions.html
     ```javascript
     //일반적으로 props 전달할 때 이런식으로 함수의 레퍼런스 자체를 전달하게 됩니다.
     <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>

     // 이벤트 처리시 함수의 파라미터 값을 같이 넘겨 주려고 할 때는 화살표함수를 통한 바인딩이 필요합니다.
     <div className="remove" onClick={()=>onRemove(id)}>
     // 클래스 컴포넌트 사용시 
     <div className="remove" onClick={this.onRemove.bind(this, id)}>
    ```


# 11장
 - 많은데이터 렌더링시 React Dev Tool 이용해 성능을 check할 수 있습니다.
 - 컴포넌트는 다음과 같은 상황에서 리랜더링이 발생합니다.
    1. 자신이 전달 받은 props가 변경될 때
    2. 자신의 state가 바뀔 때
    3. 부모 컴포넌트가 리렌더링될 때
    4. forceUpdate 함수가 실행될 때
- 불필요한 리렌더링을 위해 최적화 필요

- React.memo를 사용하여 컴포넌트 성능 최적화
    - 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 하지 않도록 설정하여 컴포넌트의 성능을 최적화 해줄 수 있다

* 11.6 불변성의 중요성
    - 리액트 컴포넌트에서 상태를 업데이트 할 때 불변성을 지키는 것은 매우 중요합니다.
    - 불변성이 지켜지지 않으면 객체 내부의 값이 새로워져도 바뀐것을 감지 하지 못합니다. (memo를 통한 최적화 불가능)
    - 추가로 전개 연산자는 얕은 복사를 하기 때문에 객체 내부의 값이 객체 혹은 배열이라면 내부의 값 또한 따로 복사해주어야 합니다.
    ```javascript
    const todos = [{id :1, checked : true}, {id:2, checked : true}];
    const nextTodos = [...todos];

    nextTodos[0].checked = false;
    console.log(todos[0] === nextTodos[0]); // 똑같은 객체를 기리키기 때문에 true

    nextTodos[0] = {
        ...nextTodos[0],
        checked : false
    };
    console.log(todos[0] === nextTodos[0]); // 새로운 객체를 할당해 주었기 때문에 false
    // 객체의 구조가 많이 복잡한 경우 불변성을 유지하기 위해 immer라는 라이브러리를 사용하기도 함
    ```