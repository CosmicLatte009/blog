# Reack Hook이란?

함수형 컴포넌트에서 호출하고 사용할 수 있는 조금 특별한 JavaScript 함수.  
훅 함수 이름은 모두 'use'로 시작한다.

#### 지켜야할 사항

- 함수형 컴포넌트나 커스텀 훅에서만 사용해야 한다.
- 반드시 컴포넌트의 루트에서 생성해야 한다. 다른 함수 안에서는 훅 사용 불가.

---

# useState()

변화하는 데이터가 사용자 인터페이스에 반영되어야 한다면 state가 필요하다.

state가 바뀌면 해당 state가 등록된 컴포넌트형 함수를 컴포넌트 재평가, 재실행하여  
JSX 코드를 다시 평가하고 DOM이 업데이트된다.  
(의존성이 변경된 경우 useEffect 함수도 다시 실행된다.)

## 기본 사용법

1. ### `const [title, setTitle] = useState(props.title);`

   #### [현재 상태값, setter 함수]

   useState를 사용해서 상태를 등록하면 항상 위와 같은 2개의 값을 갖는다.

   #### useState(초기값);

   초기값에 대해서는 컴포넌트가 처음 렌더링될 때 단 한번만 고려되도록 처리한다.  
   컴포넌트가 재실행되어도 state의 초기화는 이루어지지 않는다.  
   즉, React는 최초의 초기화 이후에는 state의 관리와 갱신만 담당한다.

2. ### `setTitle('새 값')`
   state 업데이트하는 setter 함수.  
   state가 변할 때마다 업데이트 함수를 호출한다.  
   단, setState 함수가 적힌 코드 다음 줄에서 바로 상태가 갱신되는 것은 아니고 상태 갱신을 스케줄링하는 것일 뿐이다.  
   실제 상태 갱신은 컴포너트 재평가, 재실행이 되어서야 사용 가능한 최신 상태가 된다.

---

## 여러 state 사용법

여러 state 각각 초기화, 업데이트

```JSX
//여러 state 각각 초기화, 업데이트하는 기본 방법.
const [enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount] = useState("");
const [enteredDate, setEnteredDate] = useState("");

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value);
};
const amountChangeHandler = (event) => {
  setEnteredAmount(event.target.value);
};
const dateChangeHandler = (event) => {
  setEnteredDate(event.target.value);
};

//여러 state 각각 초기화,업데이트 후 폼에 제출할 때 객체로 state 모으는 방법
const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseData);
	};
```

#### 폼 제출 시 객체 생성 필수

여러 state를 각각 업데이트 시 state 데이터를 모아준 객체가 없으므로 객체 생성 작업 필요.

#### event.preventDefault의 필요성

브라우저는 원래 폼이 제출될때마다 웹페이지를 호스팅하고 있는 서버에 요청을 보낸다.  
여러 state 데이터를 수집하고 객체로 결합한 후 폼을 제출하고 싶다면 event 기본동작을 막아줘야 한다.

---

## 여러 state 하나의 state로 초기화하기 (결합된 접근방식)

```JSX
//여러 state 하나의 state로 초기화 및 등록
const [userInput, setuserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate:''
});
```

`const [state, setState] = useState({state1: '', state2: '',})`

1. `useState({})` 초기값을 빈 객체로 만든다.
2. 여러 state들을 객체 안의 key로,
3. 각 state의 초기값들은 문자열을 value로 등록.

---

## 여러 state 하나의 state로 초기화하기 (결합된 접근방식)

#### 1. Spread 전개 구문만 사용하기

```JSX
//여러 state 하나의 state로 업데이트 방법1
const titleChangedHandler = (event) => {
  setUserInput({...userInput, enteredTItle: event.target.value,
});
};
```

`setUserInput({...userInput, enteredTitle: 새 값,})`

업데이트 시에는 Spread 전개 구문으로 기존 key와 value를 복사 후 업데이트할 key state와 새 value의 쌍을 덧씌운다.

동시에 수많은 상태 업데이트를 계획하는 경우에는 오래되거나 잘못된 상태 스냅샷에 의존할 수 있다.

#### 2. 함수 폼의 인수에 이런 state 스냅샷 받아오기 (권장)

```JSX
//여러 state 하나의 state로 업데이트 방법2
const titleChangeHandler = (event) => {
  setUserInput((prevState)=>{
    return {...prevState, entererdTitle: event.target.value};
  });
};
```

`setUserInput((prevState)=> {return {...prevState, enteredTitle: 새 값,};})`

함수 폼의 인수로 이전 state 스냅샷 (prevState) 받아와서 새 객체 값 리턴한다.

상태 업데이트가 이전 상태에 의존하고 있다면 더 효율적인 방법.
함수의 인수에 가장 최신 state의 스냅샷과 항상 계획된 state 업데이트를 보장한다.

---

## state 업데이트하는 여러 방법들

#### 1. 유저 이벤트 발생

```JSX
const [enteredTitle, setEnteredTitle] = useState("");

const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

<input
      type="text"
      value={enteredTitle}
      onChange={titleChangeHandler}
 />
```

#### 2. 타이머 만료

---

## 양방향 바인딩 추가

```JSX
<input
type="text"
value={enteredTitle}
onChange={titleChangeHandler}
  />
```

useState는 변경되는 입력값(input값)만 state로 수신하는 것이 아니라 입력(input)에 새로운 값을 다시 전달할 수도 있다.

`onChange={titleChangeHandler}` state를 업데이트하기 위해 입력에서 변경사항을 수신.
`value={enteredTitle}` 입력에 state를 다시 보내주기.

## state(상태) 끌어올리기

자식 컴포넌트에서 어떤 부모 컴포넌트로 데이터를 이동해서, 해당 자식 컴포넌트에서 사용하거나 또는 다른 자식 컴포넌트로 데이터를 전달하는 것.  
데이터를 생성하는 컴포넌트와 데이터가 필요한 컴포넌트에 접근할 수 있을만큼만 끌어올리면 된다.
