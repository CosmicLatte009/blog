# useRef()

다른 DOM요소에 접근해서 빠르게 읽기에 용이한 훅.

## 기본 사용법

1. `import React, {useRef} from 'react'`
2. `const nameInputRef = useRef()`
   여기서 생성되는 ref값은 항상 객체다.
   객체 안의 current props는 ref가 연결된 실제 값, 즉 DOM 노드를 갖는다.
3. `<input ref={nameInputRef}/>`
   ref를 html 요소에 연결. 나중에 실제 DOM 요소가 된다.

## 응용법

#### state 대신에 쓰기

`const enteredName = nameInputRef.current.value`

이렇게 state 대신 ref 사용 시 핸들러와 value 속성, onChange 속성이 불필요할 수 있다.
state에 비해 변화하는 것 없이 단순히 값을 읽는 용으로 쓰기 좋다.

#### 사용자가 입력한 값을 재설정하기

`nameInputRef.current.value=''`

ref로 DOM을 잘 조작하지 않지만 예외적으로 이 경우엔 괜찮은 방법.

## 제어되지 않는 컴포넌트 VS 제어되는 컴포넌트

리액트에서 input 컴포넌트를 쓸 때 주로 나오는 용어.

#### 제어되지 않는 컴포넌트

ref를 사용할 떄는 제어되지 않는 컴포넌트로 본다.

#### 제어되는 컴포넌트

state를 관리하고 모든 state를 업데이트하고, value props로 그 state를 input에 다시 양방향 바인딩하는 것을 제어되는 컴포넌트로 본다.
