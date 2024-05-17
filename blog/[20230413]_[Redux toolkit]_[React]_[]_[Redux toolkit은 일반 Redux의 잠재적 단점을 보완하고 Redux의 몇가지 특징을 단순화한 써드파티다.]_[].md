# Redux toolkit이란?

일반 Redux의 잠재적 단점을 보완하고 Redux의 몇가지 특징을 단순화한 써드파티다.

---

# immer

Redux toolit은 내부적으로 immer라는 다른 패키지를 사용한다.

일부러 항상 새로운 상태 스냅숏을 반환하지 않아도  
자동으로 원래 있는 state를 복제하고 새로운 상태 객체를 생성하여  
내부적으로 알아서 변경할 수 없는 코드로 변환한다.

모든 state를 변경할 수 없게 유지하고, 변경한 state는 변하지 않도록 오버라이드한다.

---

# Redux toolkit 기본 사용법

### 1. Redux toolkit 시작

`npm install @reduxjs/toolkit`
package.json에서 `"redux": ^버전명` 제거.  
 리덕스 툴킷에 이미 리덕스가 포함되기 때문.

### 2. createSlice 함수 정의

1. `import {createSlice} form @reduxjs/toolkit`
2. 전역 상태의 slice 생성
   Reducer 함수 정의와 같다.
   `const 리듀서함수명 = createSlice({name: 'slice명', initialState, reducers: {메소드명(state) {state 변경 코드;}, }})`

   - 리듀서함수명은 보통 slice명 + Slice 를 합쳐서 짓는다.
   - action 객체 프로퍼티는 필수는 아니고 필요하면 사용할수도 있다.
   - 새로운 상태 스냅숏 반환하지 않아도 된다.
   - 다중 slice일 경우 initialState 변수를 각 slice마다 만들어주고,  
     `initialState: initialCounterState`,  
     `initialState: initialState: initialAuthState`  
     와 같이 직접 지정해준다.

3. 스토어 생성
   `const store = configureStore({reducer: 리듀서함수명.reducer})`

4. action 객체 export
   `export const 액션명 = 리듀서함수명.actions;`
   액션명은 보통 slice명 + Actions 를 합쳐서 짓는다.
5. 스토어 export
   `export default store`

```JavaScript
//리듀서 함수를 정의하는 store용 파일에서 작성

import {createSlice, configureStore} from '@reudxjs/toolkit';

const initialState = { counter: 0, showCounter: true};

//리듀서 함수용 createSlice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    },
    increase(state, action) {
        state.counter = state.counter + action.payload;
        //payload 필드명을 위해 payload 데이터가 있을 경우 이 명칭은 고정
    },
    }
});

const store = configureStore({ reducer: counterSlice.reducer});

export const counterActions = counterSlice.actions;

export default store;

```

### 3. createSlice 함수 사용

1. `import {useSelector, useDispatch} from 'react-redux'`
2. `import {액션명} from '../store/index'`
3. `const dispatch = useDispatch()`
4. `const 변수 = useSelector(state => state.불러올 state명)`
   다중 slice가 있을 경우에는 `((state)=> state.key값.불러올 state명)`

   - 여기서 key값은 리듀서 맵의 각 프로퍼티명
   - `const store = configureStore({reducer: {key값: 리듀서함수명.reducer} });`

5. 액션 dispatch
   `const 함수명 = () => { dispatch(액션명.메소드명()) };`
6. payload 데이터가 포함된 액션 dispatch
   `const 함수명 = () => { dispatch (액션명.메소드명(payload 데이터))}`

```JavaScript
//Counter.js
import {useSelector, useDispatch} from 'react-redux';
import {counterActions } from '../store/index';

const Counter = () => {
const dispatch = useDispatch();
const counter = useSelector((state) => state.counter);
const show = useSelector((state)=> state.showCounter);

const incrementHandler = () => {
    dispatch(counterActions.increment());
};

const increaseHandler = () => {
    dispatch(counterActions.increase(10));
    // 원래 일반 redux의 경우: dispatch({ type: 'increase', amount: 10 });
    // Redux toolkit의 작동방식: { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
};

const decrementHandler = () => {
    dispatch(counterActions.decrement());
};

const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
};

return JSX코드;

}
```

---

# Redux toolkit에서 action 사용하기

고유 액션 식별자가 자동으로 생성하므로 따로 액션 식별자를 설정할 필요가 없다.

#### Redux toolkit에서 payload 데이터 포함하기

payload 데이터는 action 메서드의 인자에 전달하면 된다.  
 Redux toolkit은 인자에 전달한 데이터를 추가 필드명 *payload*인 곳에 저장하기 때문에
createSlice 함수정의할 때 payload 명칭은 고정된다.

---

# 다중 slice 사용법

1. 다중 slice일 경우 initialState 변수를 각 slice마다 만들어주고,
   `initialState: initialCounterState`,  
   `initialState: initialAuthState` 와 같이 직접 지정해준다.
2. 다중 slice가 있을 경우에는 `((state) => state.key값.불러올 state명)`
3. _store/counter-slice_ 혹은 *store/counter*와 같이 코드분할을 해준다.
4. _store/index_ 파일에서는 각 slice들의 리듀서들을 import해와서  
   `const store = configureStore({reducer: {key값: 리듀서함수명.reducer} });` 의 key값들에 할당해준다.

```JavaScript
//store/index.js 파일 예시
import {configureStore} from `@reduxjs/toolkit`;
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
reducer: { counter: counterReducer.reducer, auth: authReducer.reducer},
});

export default store

```
