# React Context

React 내부적으로 state를 관리할 수 있도록 해준다.  
 어떤 컴포넌트에서라도 직접 변경하여, 앱의 다른 컴포넌트에 직접 전달할 수 있게 해준다.  
 props 드릴을 피하게 해준다.  
 보통 특정용도-context.js 파일을 context 폴더에 모아주고 사용한다.

#### 파일 구조 예시

- context (혹은 store, state) 폴더
  - _auth-context.js_

---

# props VS Context

## props의 쓰임새

props는 컴포넌트를 구성하고 그것들을 재사용할 수 있도록 하는 매커니즘이기 때문에 대부분의 경우에서 잘 쓰인다.

## Context가 유용한 경우

- Context는 긴 props 체인을 끊기 위해서 검토할만한 방식이다.
- 앱 혹은 컴포넌트 전반에서 골고루 쓰이는 state에 적합하다.
- 매우 특정적인 일을 하는 컴포넌트로 데이터를 전달하는 경우에 잘 쓴다.  
   ex) 항상 사용자를 로그아웃 시키는 버튼.

## Context가 적합하지 않은 경우

- 복합적인 용도가 있는 버튼 이벤트 등
- 변경이 잦은 state를 관리하는 경우

---

# createContext()

기본 context를 만든다. 기본 context란 빈 state.

### 사용법

1. `const 컨텐스트명 = React.createContext({state명: 기본값;})`
   기본 context엔 객체도 문자열도 들어갈 수 있다.

   #### createContext를 변수에 지정하는 이유

   context 자체가 컴포넌트라서가 아니라,  
   컴포넌트를 포함할 객체이기 때문이다.

2. context에 함수 state 정의

---

# Context API 사용법

## 1. context 공급 (Provider)

해당 context를 사용해야 하는 모든 자식 컴포넌트를 부모 컴포넌트에서 공급 태그로 감싼다.

### 사용법

- `<컨텍스트명.Provider>다른 컴포넌트</컨텍스트명.Provider>`
- 직접 Provider 컴포넌트 생성한 경우  
  `<컨텍스트Provider명>다른 컴포넌트</컨텍스트Provider명>`

```JSX
//createContext 생성한 파일 내 하단에 컨텍스트Provider도 직접 작성

import React, {useState} from 'react';

export const 컨텍스트명 = React.createContext({
  프로퍼티1: false,
  프로퍼티2: () => {}
});

const 컨텍스트Provider명 = props => {
  const [state, setState] = useState(false);

  const 어떤함수 = () => {
    setState(true);
  };

  return (
    <컨텍스트명.Provider
      value={프로퍼티1: state, 프로퍼티2: 어떤함수}>
        {props.children}
    </컨텍스트명.Provider>
  );
}
export default 컨텍스트Provider;
```

#### Context의 state 기본값을 그대로 쓰는 경우

context 공급(Provider) 과정 없이 context 소비만 하면 된다.  
여기서 말하는 state는 createContext()에서 설정한 프로퍼티명이다.  
만일 기본값만 쓰는데 Provider도 설정하면 충돌이 일어난다.

#### Context의 state 업데이트를 감지하기

`<컨텍스트명.Provider value={{state명 업데이트되는state;}}>`

- value props  
   새 컨텍스트, 변경되는 새 state를 감지하여 props 전달 없이도 해당 컨텍스트를 소비하는 모든 컴포넌트에 전달된다.
- 업데이트 되는 state
  부모 컴포넌트에서 설정된 state다.  
   보통 createContext()에서 설정한 state명과 같은 이름으로 짓는다.

#### Context의 state에 함수를 지정해서 넘겨주기

`<컨텍스트명.Provider value={{state명 함수명;}}>`

해당 함수가 context 소비하는 자식 컴포넌트로 넘어가서 다른 이벤트에 지정될 수 있다.  
ex) `onClick={ctx.state명}`

## 2. Context 소비, 리스닝(Consumer)

해당 context가 직접 사용되는 자식 컴포넌트의 JSX 코드를 소비 태그로 감싼다.

### 사용법

1. `<컨텍스트명.Consumer>{ (ctx) => {return JSX코드} }</컨텍스트명.Consumer>`
   - ctx 인수에 context 데이터가 들어온다.
   - `useContext()`로 대체 가능. (권장)
2. `ctx.state명`
   context 상태 프로퍼티 갖고오기.  
   return하는 JSX 코드 안에서 context 데이터가 필요한 부분에선 이렇게 점 표기법으로 특정 state를 갖고온다.

3. Context에서 정의한 함수 소비

## 3. Context에 함수 정의하고 소비하기

### Context에 state 정의

1. state함수명 형태 지정
   `React.createContext({state함수명: () => {} })`

2. 함수 생성
   `const 함수명 = () => {업데이트할 내용}`

3. Provider의 state함수명에 생성한 함수 포인터 지정
   `<컨텍스트.Provider value={{state함수명 함수명}}>`

### Context에서 정의한 함수 소비

1. `const ctx = useContext(컨텍스트명)`
2. `const 함수명 = () => {ctx.state함수명()}`
   특정 함수 트리거 시 ctx.state함수명() 호출
3. Context와 `useReducer()` 함께 사용하기

---

# Context와 useReducer() 함께 사용하는 예시

```JSX
// create context
const MyContext = React.createContext();

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
 return { count: state.count + 1 };
    case 'DECREMENT':
 return { count: state.count - 1 };
    default:
 return state;
  }
};

// useReducer를 사용하여 state와 dispatch 생성
const [state, dispatch] = useReducer(reducer, { count: 0 });

// context 공급할 컴포넌트들  Provider로 감싸기
<MyContext.Provider value={{ state, dispatch }}>
  <ChildComponent />
</MyContext.Provider>

// 자식 컴포넌트에서 state와 dispatch 가져오기
const { state, dispatch } = useContext(MyContext);

```

---

# Context 사용 예시

auth에 따라 페이지 다르게 보여주기.

### 1. createContext, 컨텍스트Provider 생성

```JSX
//auth-context.js
//createContext, 컨텍스트Provider 생성

import React, {useState} from 'react';

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {}
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
value={{login: loginHandler, isAuth: isAuthenticated}>
  {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
```

### 2. 애플리케이션 전반에 컨텍스트Provider 공급

```JSX
// index.js
// 애플리케이션 전반에 컨텍스트Provider 공급

import AuthContextProvider from './context/auth-context';

ReactDOM.render(
  <AuthContextProvider>
    <App/>
  <AuthContextProvider>,
  document.getElementById('root')
  )
```

### 3. context의 함수 호출하여 로그인 상태 변경

```JSX
//Auth.js
//context의 login() 함수 호출, 즉 소비하여 isAuth 상태 변경해주는 컴포넌트

import React, {useContext} from 'react';
import {AuthContext} from '../context/auth-context';

const Auth = props {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  }

  return (
    JSX코드
  )
}

```

### 4. context의 상태에 따라 다르게 보여질 컴포넌트 페이지들 지정

```JSX
// App.js
// context의 isAuth 상태에 따라 달라지는 컴포넌트들 지정.

import {useContext} from 'react';
import {AuthContext} from './context/auth-context';

const App = props => {
  const authContext = useContext(AuthContext);

  let content = <Auth/>;

  if (authContext.isAuth) {
    content = <로그인 됐을 때 컴포넌트/>;
  }
  return content;
};

export default App;
```

---

# context의 잠재적 단점

### 복잡한 설정과 관리

    1. Context를 여러개 사용하는 경우, ContxtProvider 컴포넌트가 너무 많아져서 심하게 **중첩**될 수 있다.
    2. 큰 Context 하나만 사용하는 경우 인증, 테마, 사용자 입력 등 **한 곳에서 너무 많은 것을 관리하게 된다.**
    3. 다수의 컴포넌트나 전체 앱에 영향을 미치지 않는 다양한 상태가 있을 수 있기 때문에
    **Context 공급받는 자식 컴포넌트가 모든 상태를 필요로 하지 않는 경우 비효율적이다.**
    `Context.Provider`의 value state가 변경되면 해당 state를 안 써도 감싸진 컴포넌트들도 무조건 재렌더링되기 때문.

### 성능 저하

- 테마 변경이나 인증 같은 업데이트에는 유용하다. (저빈도)
- 데이터가 자주 변경되는 경우에는 적합하지 않다. (고빈도)
