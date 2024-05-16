# props의 정체

컴포넌트에 전달한 다양한 데이터를 담고 있는 자바스크립트 객체.

### props 전달 방법

1. 부모 컴포넌트에서 자식 컴포넌트 사용할 때 속성 지정하면,
2. 속성들이 하나의 객체로 모인다. (props)
3. 자식 컴포넌트를 정의한 함수의 파라미터로 이 props가 전달된다.

### 일반 props 데이터 전달 방향

부모 컴포넌트 -> 자식 컴포넌트

### props 전달 예시

#### 자식 컴포넌트

```JSX
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```

#### 부모 컴포넌트

```JSX
function App() {
    return (
        <div>
        <Greeting name="Alice" /> //자식컴포넌트
        <Greeting name="Bob" /> //자식컴포넌트
        </div>
    );
}

export default App;
```

---

# props 전개구문 및 구조분해 응용

- #### 자식 컴포넌트 함수에 객체 spread 할당으로 전달 받기

  `const 자식 컴포넌트명 = ({...props}) => {}`

- #### 자식 컴포넌트 함수에 구조분해 할당으로 전달 받기

  `const {value1, value2} = props;`

- #### 부모 컴포넌트 함수에서 구조분해 할당으로 props 모으고 spread 문법으로 한번에 전달하기

  1. props를 하나의 객체에 모으고,

     `const 변수명 = {속성1: 속성값1, 속성2: 속성값2};`

  2. 자식 컴포넌트 태그의 속성에 spread 문법으로 한번에 모든 props 전달.

     `<자식컴포넌트 {...변수명}/>`

#### 자식 컴포넌트

```JSX
function Greeting({ name, age, gender }) {

    return (
        <div>
        <h1>Hello, {name}!</h1>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        </div>
    );
}
```

#### 부모 컴포넌트

```JSX
function App() {
    const user = {
        name: 'Alice',
        age: 25,
        gender: 'Female',
    };

    return <Greeting {...user} />;
}
export default App
```

---

# children

자식 컴포넌트 태그로 감싸진 내용이 children 값에 담겨서 props로 전달된다.
container, wrap 스타일용 컴포넌트 만들 때 유용하게 쓰인다.

- #### 부모 컴포넌트에서 children props 값 작성

  `<자식 컴포넌트>텍스트, 엘리먼트, 컴포넌트</자식 컴포넌트>`

- #### 자식 컴포넌트에서 children props 설정

  `const 자식 컴포넌트명 = ({chldren}) => {return <>{children}</>}`

#### 자식 컴포넌트

```JSX
function Container({ children }) {
  return <div className="container">{children}</div>;
}
```

#### 부모 컴포넌트

```JSX
function App() {
  return (
    <Container>
      <h1>Hello, World!</h1>
      <p>This is a sample app.</p>
    </Container>
  );
}

export default App;
```

---

# defaultProps

props 기본값은 자식 컴포넌트 정의 함수 바깥에서 설정한다.

`자식 컴포넌트명.defaultProps = {속성: '속성값',};`

#### 자식 컴포넌트

```JSX
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.defaultProps = {
  name: 'Guest',
};
```

---

# 데이터 상향식 전달

### props 데이터 상향식 전달 방법

1. 부모 컴포넌트에서 props로 함수를 전달하고,

`<자식 컴포넌트 onChangeFilter = {함수}/>`

2. 자식 컴포넌트가 전달 받은 함수에 매개변수로 새 데이터를 전달하여 호출.  
   부모 컴포넌트에 다시 데이터 건네주는 것.  
   보통 이 전달 받은 함수는 또 다른 함수 안에서 호출한다.

`const 자식 컴포넌트명 = (props) => { const 함수 = () => { props.onChangeFilter(데이터); }}`

#### 자식 컴포넌트

```JSX
const ExpensesFilter = (props) => {
    //또 다른 함수 안에서 onChangeFilter 함수 호출
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

  return (
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
    );
  };

export default ExpensesFilter;
```

#### 부모 컴포넌트

```JSX
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

    return (
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}  //props로 onChageFilter 함수 전달
        />
  	);
};

export default Expenses;
```
