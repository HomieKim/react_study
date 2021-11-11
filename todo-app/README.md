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
