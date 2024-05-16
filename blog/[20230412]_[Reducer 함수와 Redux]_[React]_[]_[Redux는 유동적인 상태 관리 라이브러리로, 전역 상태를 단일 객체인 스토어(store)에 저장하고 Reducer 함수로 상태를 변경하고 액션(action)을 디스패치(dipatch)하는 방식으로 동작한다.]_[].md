# Reducer 함수

리듀서란, 여러 개의 입력을 받아 하나의 결과를 반환하는 함수다.  
리듀서 함수는 반드시 순수 함수여야 하고 부수 효과가 없고 동기식이어야 한다.

## Reducer 함수 정의

`const httpReducer = (state명, action) => {action 타입 정의; return state}`

- #### state명
- #### action 타입 정의
  switch문 혹은 if문으로 action의 타입명에 따라 반환할 값을 지정한다.

### 1. switch문으로 Reducer함수 정의

```JavaScript
const httpReducer = (curhttpState, action) => {
  swtich (action.type) {
    case 'SEND':
return {loading: true, error: null};
    case 'RESPONSE':
return {...httpState, loading: false};
    case 'ERROR':
return {loading: false, error: action.errorMessage};
    case 'CLEAR':
return {...curHttpState, error: null};
    default:
throw new Error('Should not be reached!');
  }
}
```

### 2. if문으로 Reducer함수 정의

```JavaScript
const initialState = {counter: 0, showCounter: true};

const counterReducer = (state: initialState, action) => {
    if (action.type === 'increment') {
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter
      };
    }

   if (action.type === 'decrement') {
         return {
           counter: state.counter - 1,
           showCounter: state.showCounter
         };
   }

  if (action.type === 'toggle' {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
          }
  })

  return state;

};
```

### 3. action 객체에 프로퍼티를 포함한 리듀서 함수 정의

`action.프로퍼티`

action 타입 정의할 때 action 객체에 프로퍼티를 작성할 수 있다. (프로퍼티명 작성은 자유)  
단, **useReducer()**나 **useDispatch()**의 dispatch 함수에서도 프로퍼티에 값을 작성해줘야한다.

- #### useReducer의 dispatch 함수에서 프로퍼티에 값 작성하는 방식

  `const 변수명 = () => {dispatch({type: 'type명', 프로퍼티: 값})}`

- #### useDispatch의 dispatch 함수에서 프로퍼티에 값 작성하는 방식

  `dispatch({type: '타입명', 프로퍼티: 값})`

```JavaScript
   return {
		counter: state.counter + action.amount,
    };
```

## Reducer 함수 사용

### 1. useReducer() 훅

state의 모든 업데이트 로직을 리듀서 함수에 모으고 action만 dispatch할 수 있게끔 도아주는 훅.  
state를 한 곳에서 더 명확한 방식으로 관리 가능.  
데이터가 어떻게 관리되고 있는지 파악하기 쉬워진다.

#### useReducer가 유용한 경우

- 복잡한 형태의 state를 사용하는 경우
- 여러 state들이 함께 속해 있는 경우
- 같은 state를 관리하는데 관리한느 측면이 다른 경우
- 다른 state에 의존하여 state 업데이트를 하는 경우
  함수 폼의 인수에 이전 state 스냅샷 받아오기 (권장) 쓰지 못하는 경우

#### 기본 사용법

1. `const [state, dispatch] = useReducer(reducerFn, initialState, initFn);`

   - **[state, dispatch]**

     state 현재 상태값.  
      useState의 state처럼 현재 상태값이 될 변수명 작성한다.

     dispatch 디스패치 함수  
      해당 함수를 호출하여 리듀서함수의 액션을 디스패치한다. 함수명 작성은 자유롭게 할 수 있다.

   - **useReducer(리듀서함수명, 초기값, 초기함수)**

     Reducer 함수.  
      초기값에 대해서는 컴포넌트가 처음 렌더링될 때 단 한번만 고려되도록 처리한다.

2. `dispatch({type: '타입명', 프로퍼티: 값})`

   dispatch 함수를 호출.  
   리듀서함수의 action 중 어떤 type을 dispatch할지 작성한다.
   리듀서함수 정의에서 액션 객체 내 프로퍼티를 사용하는 경우,  
   디스패치 함수에서도 프로퍼티에 컴포넌트 내에서 받아올 수 있는 값을 작성.

### 2. useDispatch() 훅

Redux store에 action을 dispatch, 즉 발송하여 상태 데이터를 변경해준다.

#### 사용법

1. `import {useDispatch} from 'react-redux'`
2. `const dispatch = useDispatch()`
3. `const 변수명 = () => { dispatch({ type: 'type명'})}`

   해당 type명은 스토어에서 만든 action.type에 지정된 type명 중 사용할 type명과 동일하게 지정해준다.

4. `const 변수명 = () => { dispatch({ type: 'type명', 프로퍼티: 값})}`

   action 객체를 사용하여 추가적인 데이터를 전달하는 방법.

### 3. useSelector() 훅

Redux store로부터 상태 데이터를 불러와준다.  
Redux 저장소에서 상태 데이터가 변경될 때마다 자동으로 업데이트되고 최신 상태를 받아온다.

#### 사용법

1. `import {useSelector} from 'react-redux'`
2. `const 변수 = useSelector(state => state.불러올 state명)`  
   불러올 state명은 initialState의 state 중 하나다.

---

# Reducer 함수 주의할 점

리듀서에서 반환하는 객체는 기조 state와 병합되지 않고 기존 state를 아예 덮어쓴다.

리듀서 함수 내부에서는 절대 부수 효과 코드, 즉 비동기 코드(useEffect, http 요청 fetch 등)를 작성해서는 안된다.

### Redux에서 절대 하면 안되는 Reducer 함수 정의 예시

#### 1. JavaScript의 객체와 배열은 참조값은 절대 기존의 state를 변형해서는 안된다.

```JavaScript
//예시1: 기존 state를 변형한 후 새 state 객체를 반환하여도 기존 state 원본이 이미 변형되었기 때문에 문제

if (action.type === 'increment') {
  state.counter++;

  return {
    counter: state.counter,
  }
}
```

#### 2. 새로운 state 객체를 반환하여 항상 재정의해야 한다.

```JavaScript
//예시2: 기존 state를 변형하고 새로운 state 객체를 반환하지 않은 문제

if (action.type === 'increment') {
  state.counter++;

    return state;
}
```

---

# Redux

Redux는 유동적인 상태 관리 라이브러리다.

## Redux의 특징

- Context API의 잠재적 단점을 보완 가능하다.
- React에서만 사용하는 것이 아니라 JavaScript와 그 외의 언어에서도 사용 가능하다.
- Redux에는 전역 상태를 담당하는 단 하나의 주요 리듀서 함수만 있어야 한다.

## Redux 사용법

1. 전역 상태를 단일 객체인 스토어(store)에 저장하고
2. **Reducer 함수**로 상태를 변경하고
3. 액션(action)을 디스패치(dipatch)하는 방식으로 동작한다.

---

# Redux 스토어(store) 생성 방법들

## 1. createStore

하나의 리듀서만 전달해야한다.

#### 사용법

1. `import {createStore} from "redux"`
2. `const store = createStore(리듀서함수명)`
3. `const store = createStore(리듀서함수명.reducer)`
   - Redux toolkit의 사용으로 slice가 있는 경우
   - `createStore`은 하나의 리듀서만 전달해야해서 slice가 여러개면 문제가 생길 수 있다.
   - 서로 다른 slice에 접근하는 리듀서도 여러개가 되므로.

## 2. combineReducers

여러 개의 리듀서를 하나로 결합하여 전체 상태를 관리한다.

#### 사용법

`import {createStore, combineReducers} form 'redux';`

## 3. configureStore 함수

여러 개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다.

#### 사용법

1. `import {configureStore} from @reduxjs/toolkit;`
2. `const store = configureStore({reducer: 리듀서함수명.reducer})`  
   리듀서가 하나이기 때문에 이렇게만 작성해도 된다.

3. `const store = configureStore({ reducer: {key값: 리듀서함수명.reducer} });`  
   규모가 큰 애플리케이션에서 다중 slice를 사용한다면, 위와 같은 방식이 필요.

   reducer 프로퍼티에 객체를 할당해서  
    그 객체 내의 프로퍼티값에 또 다른 리듀서 함수를 할당한다. (리듀서 맵 생성)  
    주요 리듀서(reducer key)의 값이 객체 맵이 되고,  
    configureStore가 맵의 모든 리듀서를 하나의 큰 리듀서로 병합한다.

---

# React Redux

## 1. 시작

`npm install redux react-redux`

## 2. 리액트용 스토어 만들기

#### 2-1. import해오기

`import {createStore} from "redux"`

#### 2-2. 리듀서 함수 정의

`const 리듀서함수명 = (state = {세부state명: 초기값}, action) => {action 타입 정의; return state}`

#### 2-3. 스토어 생성

`const store = createStore(리듀서함수명)`

#### 2-4. 스토어 export

`export default store`

```JavaScript
// /src/store/store.js
import { createStore } from "redux";

//리듀서 함수
const counterReducer = (state = { counter: 0 }, action) => {
if (action.type === "increment") {
return {
counter: state.counter + 1,
};
}

if (action.type === "decrement") {
return {
counter: state.counter - 1,
};
}
return state;

};

//스토어 생성
const store = createStore(counterReducer);

export default store;
```

## 3. 리액트용 애플리케이션에 스토어 제공하기

- #### import해올 것

  `import {Provider} from "react-redux";`  
   `import store from "./store/index";`

- #### return할 것

  `<Provider store={store}><App/></Provider>`

```JavaScript
//App.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
```

---

# Redux의 비동기 및 부수 효과 코드

## 부수 효과 코드의 위치

리듀서 함수 내부에서는 절대 부수효과 코드, 즉 비동기 코드 (useEffect, http 요청 fetch 등)를 작성해서는 안된다.

### 부수 효과 코드 처리하는 2가지 방법

1. 컴포넌트 안에서 useEffect() 내부에 부수효과 코드 작성. 대신 Redux와 무관해진다.

2. 액션 생성자 함수 안에 코드 포함시키기.

## 액션 생성자 Thunk

- 다른 작업이 완료될 때까지 작업을 지연시키는 단순한 함수 Thunk
- 한 slice 안에서 Thunk 함수 생성.
- Thunk 함수 안에 fetch 및 dispatch 코드를 넣으면 컴포넌트를 lean하게 유지할 수 있다.

### Thunk 함수 예시

```JavaScript
//cart-slice.js 안의 Thunk 함수

export const sendCartData = (cart) => {
  return async (dispatch) => {
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      meassage: 'Sending cart data!',
    })
  };

  const sendRequest = async () => {
    const response = await fetch(
    	'https://react-http-6b4a6.firebaseio.com/cart.json',
      	{
          method: 'PUT',
          body: JSON.strigify(cart),
        }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }
  };

  try {
    await sendRequest();

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  } catch (error) {
    dispatch(
    	uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!',
      })
    );
  }
};
```

```JavaScript
//App.js

import {sendCartData} from './store/cart-slice'

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state)=> state.ui.cartIsVisible);
  const cart = useSelector((state)=> state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart)); //Thunk 함수 사용

  }, [cart, dispatch]);

  return (
   	<>
    {notification && (
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
        )}
       />
    </>
  )
}

```

---

# 일반 Redux의 잠재적 단점

1. Reducer 함수의 길이가 점점 길어져서 Redux 파일이 너무 거대해질 수 있다.
2. 상태 변경 불가성을 꼭 지켜야하기 때문에 항상 새로운 상태 스냅숏을 반환해야하는데 실수로 중첩된 데이터 등을 바꾸는 실수가 일어날 수 있다. (리듀서 함수 주의할 점)

   #### 쉬운 해결방안

   Reducer 함수 정의할 때 action type명을 const 상수로 따로 저장하여 사용한다.  
   Reducer 함수 사용 시에도 `dispatch({type: '타입명', 프로퍼티: 값})`의 type명에 그대로 상수를 사용한다.

   ```JavaScript
   //리듀서 함수 정의
   const INCREMENT = increment; //action type명 상수로 저장

   const counterReducer = (state = initialState, action) => {
   if (action.type === INCREMENT) {
       return {
       counter: state.counter + 1;
       showCounter: state.showCounter,
       };
   }
   }

   //리듀서 함수 사용
   import {INCREMENT} from "../store/index"
   const incrementHandler = () => {
       dispatch({type: INCREMENT});
   }
   ```

   #### 더 나은 해결방안

   일반 Redux의 잠재적 단점을 보완하고 Redux의 몇가지 특징을 단순화한 써드파티인 Redux toolkit 등을 사용한다.

---
