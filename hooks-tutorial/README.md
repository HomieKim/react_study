# 8장

---
hooks는 리액트 v16.8에 새로 도입된 기능으로 함수 컴포넌트에서도 상태관리를 할 수있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다. 
---

* 8.1 useState
    - useState는 함수형 컴포넌트에서 상태관리를 할 수 있게 도와주는 함수 입니다.
    - 예제 코드
    ```javascript
    const [value, setValue] = useState(0);
    ```
    useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다. 이 함수가 호출 되면 배열을 반환하는 데 그 배열의 첫번째 원소는 상태 값, 두번째 원소는 상태를 설정하는 함수입니다.
    - useState 함수는 하나의 상태 값만 관리할 수 있습니다. 컴포넌트에서 관리해야 할 상태가 여러개라면 useState를 여러번 사용하면 됩니다.

* 8.2 useEffect
    - useEffect는 리액트 컴포넌트가 렌더링 될때마다 특정 작업을 수행하독 설정할 수 있는 Hook입니다.
    - useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고, 업데이터 될 때는 실행하지 않으려면 함수의 두번째 파라미터러 빈 배열을 넣어주면 됩니다.
    ```javascript
    useEffect(()=>{
        console.log('마운트 될 때만 실행');
    },[])
    ```
    - 특정 값이 변경될 때만 호출하고 싶은 경우? 두번째 파라미터로 전달되는 배열안에 검사하고 싶은 값을 넣어주면 됩니다.
    ```javascript
    useEffect(()=>{
        console.log(name);
    },[name])
    ```
    - 배열안에는 useState로 관리하고있는 상태를 넣어 주어도 되고, props로 전달받은 값을 넣어 주어도 됩니다.
    - 컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해 주어야 합니다.

* 8.3 useReducer
    - userReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook입니다. 
    - Reducer는 현재상태, 그리고 업데이트를 위해 필요한 정보를 담은 action값을 받아 새로운 상태를 반환하는 함수 입니다.
    - Reducer함수에서 새로운 상태를 만들때는 반드시 불변성을 지켜주어야 합니다.
    - 예제
    ```javascript
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    ```
    위 Hook을 사용하면 state값과 dispatch함수를 받아옴, stat는 현재 가리키고있는 상태, dispatch는 액션을 발생시키는 함수