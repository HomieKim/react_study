# contextAPI 이해

* 15.1 전역상태 관리 흐름
    - 프로젝트내에서 환경설정, 사용자 정보와 같이 전역적으로 필요한 상태를 관리해야 할 때는 주로 최상위 컴포넌트인 App의 state에 넣어서 관리합니다.
    - 최상위 컴포넌트에서 여러 컴포넌트를 거쳐 props로 원하는 상태와 함수를 전달하는 경우 **ContextAPI를 사용하면 Context를 만들어 단 한번에 원하는 값을 받아 와서 사용할 수 있습니다.**

* 15.2 ContextAPI
    - 새 Context를 만들때는 createContext 함수를 사용합니다. 파라미터에는 해당 Context의 기본상태를 지정합니다.
    - Consumer에서 Context에 있는 value를 받아 옵니다.
    - Consumer사이에 중괄호를 넣어서 함수를 넣는 패턴을 Render Props라고 합니다.
    ```javascript
    const RenderPropsSample = ({children}) =>{
        return <div>결과 : {children(5)}</div>;
    };
    export default RenderPropsSample;
    // 위와 같은 컴포넌트가 있다면 추후 사용할 때 다음과 같이 사용할 수 있습니다.
    <RenderPropsSample>{value => 2*value}</RenderPropsSample>;
    // RenderPropsSample에게 children props로 파라미터에 2를 곱해서 반환하는 함수를 전달하면 해당 컴포넌트에서는 이 함수에 5를 인자로 넣어서 
    "결과 10"을 렌더링 합니다.
    ```

* 15.2.3 Provider
    - Provider를 사용하면 Context의 value를 변경할 수 있습니다.
    - Provider를 사용할 때는 value 값을 명시해 주어야 제대로 동작합니다.


* Context 파일 Update
    - Context의 value에는 함수를 전달해 줄 수도있습니다.
    - Consumer를 사용해 내보낼 수 있습니다.
    - 이때 state와 action을 분리하여 설계하면 다른 컴포넌트에서 사용시 편리합니다.
    ```javascript
    // const ColorConsumer = ColorContext.Consumer와 같은 의미
    const {Consumer : ColorConsumer} = ColorContext;
    ```

* 15.4 Hook, static contextType
    - Context를 사용할 때 Consumer대신 다른방법으로도 값을 받아올 수 있습니다.
    - 리액트 훅 중에 useContext라는 Hook을 사용하면 함수 컴포넌트의 Context를 편하게 사용 가능합니다.
    - 단, useContext는 함수형 컴포넌트에서만 사용이 가능합니다.
    - Class형 컴포넌트에서 Context를 사용하려면 static contextType을 정의하는 방법이 있습니다.


