> 점 세개 `...`가 나오는 문법들이 같이는 쓰여도 개별적인 문법들이었다는걸 깨닫고 그 차이점을 정리해본 포스팅.

# 1. 전개구문 (Spread 연산자)

배열,객체를 각각의 개별 값으로 펼치는 문법.

## 1-1. 배열 Spread

### `...Array`

- 배열을 좀더 편리하게 복사 가능
- 배열 Spread 구문은 하나의 값이 아니라 여러 값의 목록으로 평가된다.

### 기본 사용법

```JavaScript
...Arr
```

### 배열을 객체로

```JavaScript
{...Arr};
```

### 복사본 만들기

const 변수 = Array.slice 대체

```JavaScript
const 변수 = [...Arr];
```

### 복사본에 새 요소 추가

```JavaScript
//복사본.push('새 요소') 대체
const 변수 = [...Arr, '새 요소'];
```

### 두 배열 합쳐서 새 배열로

```JavaScript
//Arr1.concat(Arr2) 대체
const 변수 = [...Arr1, ...Arr2];
```

### 파라미터 여러개 있는 함수 호출 시 배열 Spread 활용

여러 개의 인자를 받을 수 있는 함수의 경우,
함수 호출 시 배열 전개구문으로 배열을 펼쳐서 각각의 아규먼트로 사용 가능하다.

```JavaScript
const introduce = (name, birth, job) => {
    console.log('안녕!');
    console.log('내 이름은 ${name}야.');
    console.log(`${birth}살이고`);
    console.log(`직업은 ${job}야.`);
}

const myArr = ['송이', 27, '프론트엔드 개발자'];
introduce(...myArr);

//안녕!
//내 이름은 송이야.
//27살이고
//직업은 프론트엔드 개발자야.
```

## 1-2. 객체 Spread

### `{...Object}`

- 반드시 객체 표현하는 중괄호 안에서 활용
- 객체 Spread 구문 사용하여 객체에서 새 배열 만들기는 불가
- 객체 Spread 구문을 함수의 아규먼트로는 사용 불가

### 기본 사용법

```JavaScript
{...Obj};
```

### 복사본 만들기

```JavaScript
const 변수 = {...Obj};
```

### 복사본에 새 요소 추가

```JavaScript
const 변수 = {...Obj, 새 key: '새 value'};
```

### 두 객체 합쳐서 새 객체로

```JavaScript
const 변수 = {...Obj1, ...Obj2};
```

---

# 2. 구조분해 (Destructuring)

배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식.

## 2-1. 배열 구조분해

### `const [변수1, 변수2] = Arr`

- 배열을 분해해서 대괄호 `[]` 안에 변수를 지정하는 방식으로 인덱스 순서대로 하나씩 할당할 수 있다.
- 꼭 선언된 변수 개수와 배열 length가 같아야 할 필요는 없다.

### 기본 사용법

```JavaScript

const [변수1, 변수2, 변수3] = Arr;
// const 변수1 = Arr[0];
// const 변수2 = Arr[1];
// const 변수3 = Arr[2];

```

### 변수 개수 > 배열 length

남는 변수는 기본값 지정 안하면 자동으로 `undefined` 할당된다.

```JavaScript
const [변수1, 변수2, 변수3 = '기본값'] = Arr;
```

### 변수 개수 < 배열 length

남는 배열의 요소를 구조분해의 마지막 변수에 배열로 모아서 담기

```JavaScript
const [변수1, 변수2, 변수3, ...변수4] = Arr;
```

### 배열 구조분해 예시

```JavaScript

const dessert = ['cookie', 'cake', 'jelly', 'icecream', 'macaron'];
const [a,b,c,...d] = dessert;

console.log(a); //cookie
console.log(b); //cake
console.log(c); //jelly
console.log(d); //['icecream', 'macaron']


const drinks = ['milk', 'juice'];
const [e,f,g='coffee'] = drinks;

console.log(e); //milk
console.log(f); //juice
console.log(g); //coffee
```

1. `const [a,b,c,...d] = dessert` 남는 요소를 마지막 변수에 배열로 모아서 담기.
2. `const [e,f,g='coffee'] = drinks;` 남는 변수에 기본값 지정할 수 있다. 지정 안하면 undefined 출력.

## 2-2. 객체 구조분해

### `const {프로퍼티1, 프로퍼티2} = Obj`

- 점 표기법으로 매번 객체를 작성하는 대신 간결하게 **프로퍼티 네임 자체를 변수처럼 사용**하고자 할 때 쓴다.
- 즉, 프로퍼티 네임과 똑같은 변수를 중괄호 안에서 선언한 것.

### 기본 사용법

```JavaScript
const {프로퍼티1, 프로퍼티2} = Obj
```

### 프로퍼티네임에 새 이름의 변수 지정

프로퍼티 네임을 변수 이름으로 바로 사용할 수 없는 경우 새 이름의 변수 선언 필요.

```JavaScript
const {프로퍼티1:변수} = Obj;
```

### 없는 프로퍼티 네임으로 변수 선언 시

객체에 존재하지 않는 프로퍼티 네임으로 변수 선언 시 `undefined`가 할당된다.기본값 지정 가능.

```JavaScript
const {프로퍼티1, 변수 = '기본값'} = Obj;
```

### 변수 개수 < 객체 length

남는 프로퍼티를 마지막 변수에 객체로 모아서 담기

```JavaScript
const {프로퍼티1, 프로퍼티2, ...변수} = Obj;
```

### 객체 구조분해 예시

```JavaScript
const foods = {
    bread: 'sandwich',
    'milk-flavor' : 'chocolate milk',
    pasta: 'oil pasta',
    icecream: 'mango icecream'
};

const {bread, 'milk-flavor':drink, fruit='orange', ...more} = foods;

console.log(bread); //'sandwich'
console.log(drink); //'chocolate milk'
console.log(fruit); //'orange'
console.log(more); //{pasta: 'oil pasta', icecream: 'mango icecream'}
```

1. `milk-favor:drink` 프로퍼티 네임을 변수 이름으로 바로 사용할 수 없는 경우 새 이름의 변수 선언하여 쓴다.
2. `fruit = 'orange'` 프로퍼티 네임과 일치하지 않는 변수에 기본값 지정. 안 하면 undefined 할당됨.
3. `...more` 남는 프로퍼티를 마지막 변수에 객체로 모아서 담기.

---

# 3. 전개구문 VS 구조분해

## 전개구문

전개구문은 배열, 객체를 각각의 개별 값으로 펼치는 문법이다.

`const 변수 = [...Arr]`
`const 변수 = {...Obj}`

## 구조분해

구조분해는 배열, 객체를 해체하여 개별 변수에 담을 수 있게 하는 표현식이다.
남는 요소를 마지막 변수에 모아줄 때 전개구문이 쓰여서 헷갈릴 수 있으니 주의.

`const [변수1, 변수2, 변수3, ...변수4] = Arr`
`const {프로퍼티1, 프로퍼티2, ...변수} = Obj`

---

# 4. 레스트 파라미터 (Rest Parameter)

### `...파라미터`

여러 아규먼트를 하나의 파라미터로 묶는 방식.

- 배열 형태이지만 배열 메소드 사용불가.
- 아규먼트 전체를 다루기 때문에 일부 아규먼트를 다루고 싶다면 인덱싱을 통해서 한번더 세분화하는 과정이 필요하다.

### 기본 사용법

여러 아규먼트를 전달받는 함수 구현 가능.

```JavaScript
function printRank(first, second, ...others) {
    console.log(`우승: ${first}`);
    console.log(`준우승: ${second}`);
    for (const arg of others) {
        console.log(`참가자: ${arg}`);
    }
}

printRank('곰돌이', '토끼', '여우', '오소리', '너구리');
//우승: 곰돌이
//준우승: 토끼
//참가자: 여우
//참가자: 오소리
//참가자: 너구리
```

### 레스트 파라미터가 배열 형태인 점을 이용해 구조분해하기

```JavaScript
function printWinners(...arg) {
    const [macbook, ipad, airpods, ...coupon] = arg;

    console.log('이벤트 결과를 알려드립니다!');
    console.log(`맥북의 주인공은 ${macbook}님 입니다.`);
    console.log(`아이패드의 주인공은 ${ipad}님 입니다.`);
    console.log(`에어팟 주인공은 ${airpods}님 입니다.`);
    console.log('스타벅스 기프티콘 주인공은');

    for (let user of coupon) {
        console.log(`${user}님`);
    }

    console.log(`이상 총 ${coupon.length}명 입니다.`);
}

printWinners('민경', '서희', '윤희', '혜명', '송이', '곰돌');
// 이벤트 결과를 알려드립니다!
// 맥북의 주인공은 민경님 입니다.
// 아이패드의 주인공은 서희님 입니다.
// 에어팟 주인공은 윤희님 입니다.
// 스타벅스 기프티콘 주인공은
// 혜명님
// 송이님
// 곰돌님
// 이상 총 3명 입니다.
```

- `const [macbook, ipad, airpods, ...coupon] = arg;`  
  남는 배열의 요소를 구조분해의 마지막 변수에 배열로 모아서 담기

---

# 4. 함수에서 활용하는 구조분해

### 4-1. 레스트 파라미터가 배열 형태인 점을 이용해 구조분해하기

여러개의 아규먼트를 전달 받는 함수로 구현.
파라미터에 레스트 파라미터`(...arg)`를 적고, 구조분해를 레스트 파라미터에 할당하면 호출 시 여러 개의 아규먼트 전달 받을 수 있다.

```JavaScript
function printWinners(...arg) {
    const [macbook, ipad, airpods, ...coupon] = arg;
}

//호출
printWinners('민경', '서희', '윤희', '혜명', '송이', '곰돌');
```

### 4-2. 파라미터에 바로 배열 구조분해 활용

배열 하나를 아규먼트로 전달 받는 함수로 구현.
파라미터에 바로 구조분해를 넣으면 함수에서 배열 하나를 아규먼트로 전달 받을 수 있다.

```JavaScript
function printWinners([macbook, ipad, airpods, ...coupon]) {
}
//호출
const ranks = ['민경', '서희', '윤희', '혜명', '송이', '곰돌'];
printWinners(ranks);
```

### 4-3. 파라미터가 객체 형태인 함수에서 객체에 간결하게 접근하기.

`const {breakfase, lunch, dinner} = object;`

함수 내부에서 매번 객체에 접근하는게 아니라 구조분해 할당으로 미리 프로퍼티 모아두고 편하게 객체에 접근할 수 있다.

```JavaScript
const meals = {
    breakfase: 'bread',
    lunch: 'pasta',
    dinner: 'soup',
};

function printMeals(object) {
    const {breakfase, lunch, dinner} = object;

    console.log(`아침식사 메뉴는 '${breakfase}'입니다.`);
    console.log(`점심식사 메뉴는 '${lunch}'입니다.`);
    console.log(`저녁식사 메뉴는 '${dinner}'입니다.`);
}

printMeals(meals);
```

### 4-4. 파라미터에 바로 객체 구조분해 활용.

`function printMeals({breakfast, lunch, dinner}) {}`

함수 내에서 딱 정해진 프로퍼티들만 사용하는 경우,  
파라미터에 바로 구조분해 문법을 쓰는게 편하다.

```JavaScript
const meals = {
    breakfase: 'bread',
    lunch: 'pasta',
    dinner: 'soup',
};

function printMeals({breakfast, lunch, dinner}) {
    console.log(`아침식사 메뉴는 '${breakfast}'입니다.`);
    console.log(`점심식사 메뉴는 '${lunch}'입니다.`);
    console.log(`저녁식사 메뉴는 '${dinner}'입니다.`);
}

printMeals(meals);
```

### 4-5. 파라미터에 이벤트 객체 대신 target 프로퍼티 구조분해 활용.

이벤트 핸들러 작성할 때 파라미터로 이벤트 객체가 전달된다.  
매번 이벤트 객체에 접근하는 대신 target 프로퍼티만 사용하면 더 간결히 접근 가능하다.

#### 이벤트 객체에 접근하는 경우

```JavaScript
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event)=> {
    event.target.classList.toggle('checked');
})
```

#### target 프로퍼티로 간결히 접근하는 경우 (권장)

```JavaScript
const btn = document.querySelector('#btn');

btn.addEventListener('click', ({target}) => {
    target.classList.toggle('checked');
})
```

### 4-6. 중첩 객체 구조 분해

#### 콜론기호`:`를 갖고 한번 더 분해하는 방식

`({target : {classList}})`

```JavaScript
const btn = document.querySelector('#btn');

btn.addEventListener('click', ({target: {classList}}) => {classList.toggle('checked');
})
```

#### 함수 내부에서 구조분해 문법을 한번더 활용하는 방식

```JavaScript
const btn = document.querySelector('#btn');

btn.addEventListener('click', ({target}) => {
    const {classList} = target;
    classList.toggle('checked');
})
```
