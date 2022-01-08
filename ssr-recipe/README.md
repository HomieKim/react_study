# 20장 서버사이드 렌더링

* 20.1 서버 사이드 렌더링의 이해
    - 리액트 프로젝트는 기본적으로 클라이언트 사이드 렌더링을 하고 있습니다.(CRA)
    - 클라이언트 사이드 렌더링이란 UI렌더링을 브라우저에서 모두 처리하는 것입니다. 
    - 서버 사이드 렌더링을 구현하면 사용자가 웹서비스에 방문했을 때 서버 쪽에서 초기 렌더링을 대신 해 줍니다. 사용자가 HTML을 전달받을 때 그 내부에 렌더링된 결과물이 보입니다.

* 20.1.1 서버 사이드 렌더링의 장점
    - 구글, 네이버 등의 검색 엔진이 우리가 만든 웹 애플리케이션의 페이지를 원활하게 수집할 수 있습니다.
    - 리액트로 만든 SPA는 검색 엔진 크롤러 봇처럼  자바스크립트가 실행 되지 않는 환경에서는 페이지가 제대로 나타나지 않습니다.
    - 따라서, 검색 엔진 최적화를 위해 서버사이드 렌더링을 구현하는 것이 좋습니다.
    - 또한, 초기 렌더링 성능을 개선할 수 있습니다.

* 20.1.2 서버 사이드 렌더링의 단점
    - 브라우저가 해야 할 일을 서버가 대신 처리하는 것이므로 서버 리소스가 사용된다는 단점이 있습니다.
    - 사용자가 많은 서비스라면 캐싱과 로드 밸런싱을 통해 성능을 최적화 해주어야 합니다.
    - 프로젝트의 구조가 복잡해집니다.
    - 데이터 미리 불러오기, 코드 스플리팅 호환 등 고려해야할 사항이 더 많아 집니다.'

* 20.1.3. 코드 스플리팅 충돌
    - 서버 사이드 렌더링과 코드 스플리팅을 함께 적용하면 별도의 호환 작업이 필요합니다.
    - 깜빡임 현상
    ```
        1. 서버 사이드 렌더링된 결과물이 브라우저에 나타남
        2. 자바스크립트 파일 로딩 시작
        3. 자바스크립트가 실행되면서 아직 불러오지 않은 컴포넌트를 NULL로 렌더링
        4. 페이지에서 코드 스플리팅 된 컴포넌트 들이 사라짐
        5. 코드 스플리팅된 컴포넌트들이 로딩된 이후 제대로 나타남
    ```
    - 라우트 경로마다 코드 스플리팅된 파일 중에서 필요한 모든 파일을 브라우저에서 렌더링하기 전에 미리 불러와야 합니다.

* 20.3 ssr 구현
    - 서버 사이드 렌더링을 구현하려면 웹팩 설정을 커스터 마이징 해주어야 합니다.
    - 엔트리는 웹팩에서 프로젝트를 불러올 때 가장 먼저 불러오는 파일 입니다.
    