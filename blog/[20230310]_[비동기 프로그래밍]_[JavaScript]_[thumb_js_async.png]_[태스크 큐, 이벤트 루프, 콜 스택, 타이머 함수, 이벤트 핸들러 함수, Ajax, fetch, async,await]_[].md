# 비동기 프로그래밍

## 비동기(asynchronous) 방식이란?

현재 실행 중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 곧바로 실행하는 방식이다.

'동기 실행' 에 비해 동일한 작업을 더 빠른 시간 내에 처리하기 위해 존재한다.

![image](https://user-images.githubusercontent.com/87015026/224293856-1ed595df-5a7b-4809-8f9e-71cd081851ec.png)

> 실행 순서 관리는 콜 스택 (실행 컨텍스트 스택)이 관리한다.

## 무엇이 비동기 처리를 담당하나?

비동기 처리에서 소스코드의 평가 및 실행 제외한  
모든 처리는 **JavaScript 엔진을 구동하는 브라우저 환경(또는 Node.js)이 담당한다.**

브라우저와 JavaScript 엔진은 아래와 같은 환경으로 구성되어 있다.

### 브라우저 환경

브라우저 환경은 **멀티 스레드로 동작**한다. JavaScript 엔진, Web API, 렌더링 엔진을 제공한다.

#### 태스트 큐 (콜백 큐)

비동기 함수의 콜백 함수, 이벤트 핸들러가 일시적으로 보관되는 영역.  
 해당 함수는 비동기 방식으로 동작한다.

#### 이벤트 루프

콜 스택에 현재 실행 중인 실행 컨텍스트가 있는지, 태스크 큐에 대기 중인 함수가 있는지 반복해서 확인하여 태스크 큐에 대기 중인 함수를 콜 스택으로 이동시키는 역할을 한다. (실행시킨다)

### JavaScript 엔진

브라우저에 내장되어있지만 **싱글 스레드로 동작**한다.  
태스크가 요청되면 콜 스택을 통해 요청된 작업을 순차적으로 실행한다.

#### 콜 스택 (실행 컨텍스트 스택)

소스코드 평가 과정에서 생성된 실행 컨텍스트가 추가되고 제거되는 스택 자료구조.

#### 힙

객체 저장되는 메모리 공간.  
 실행 컨텍스트는 힙에 저장된 객체를 참조한다.

## 비동기 함수 실행 순서

0. 예를 들어 WebAPI에 해당하는 함수를 실행시킨다고 하면,  
   해당 함수를 WebAPI로부터 가져와 태스크 큐에 대기시킨다.
1. 콜 스택에 실행 중인 실행 컨텍스트가 없고 태스크 큐에 대기 중인 함수가 있으면,  
   **이벤트 루프가 태스크 큐에 대기 중인 함수를 콜 스택에 이동하여 실행시킨다.**

2. 콜 스택에 함수 실행 컨텍스트가 푸시되며 실행을 시작한다.

![image](https://user-images.githubusercontent.com/87015026/224307993-a01dd608-1bd6-4f86-a09d-f7a02116514b.png)

---

# 비동기 실행 관련 문법

## 1. 파라미터에 바로 콜백을 전달하는 형태의 전통적인 비동기 실행 함수

전통적인 비동기 실행 함수는 여러 비동기 작업의 순차적인 처리가 필요한 경우엔 가독성이 급격하게 떨어지는 **콜백 헬 문제**가 발생할 가능성이 높다.

### 타이머 함수

#### setTimeout / clearTimeout

특정 함수 실행을 원하는 시간만큼 뒤로 미루는 함수 / setTimeout 함수의 스케줄링을 취소하는 함수

#### setInterval / clearInterval

특정 함수를 일정한 시간 간격으로 반복 실행하도록 하는 함수 / setInterval 함수의 스케줄링을 취소하는 함수

```JavaScript
// 2초 간격으로 메시지를 보여줌
let timerId = setInterval((name) => alert(`째깍, ${name}`,), 2000, '송이');
```

### addEventListener 이벤트 핸들러 함수

파라미터로 전달된 콜백이 당장 실행되는 것이 아니라, 나중에 특정 조건(ex.클릭 이벤트 발생)이 만족될 때마다 실행하는 함수.

```JavaScript
btn.addEventListener('click', (e) => { console.log('You Clicked'); });
```

## 2. Ajax로 HTTP 요청 보내기

Ajax란 JavaScript를 사용하여 브라우저가 서버에게 **비동기 방식으로 데이터를 요청하고,**  
서버가 응답한 데이터를 수신하여 **웹페이지를 동적으로 갱신하는 프로그래밍 방식이다.**

Ajax로 HTTP 요청을 보내기 위해서는 XMLHttpRequest 혹은 **fetch**를 사용할 수 있다.

**fetch 메서드**는 Promist 객체를 기반으로 구성되어 있어서 비동기 처리를 위한 콜백 헬 단점에서 비교적 자유롭고, 프로미스 후속 처리 메서드`then, cath, finally` 등을 사용할 수 있어서 XMLHttpRequest보다 간편하다.

```JavaScript
fetch('https://www.google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```

## 3. async/await 구문

Promise 객체를 사용할 때, then 메소드 등을 사용하지 않고도 비동기 코드를 마치 동기 실행 코드처럼 가독성 좋고 편하게 작성하게 해주는 **Syntactic sugar** 문법이다.

#### async

비동기(asynchronous)의 축약어로, `async`를 앞에 붙인 함 수 내에 비동기적으로 실행될 부분 (= await)이 있다는 것을 의미한다.

#### await

Promise 객체를 리턴할 코드 앞에 붙인다.

1. `async` 함수 안의 코드가 실행되다가 `await`을 만나면, 일단 `await` 바로 뒤의 코드가 실행되고,
2. 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행한다.
3. `await` 뒤에 있던 Promise 객체가 fulfilled 혹은 rejected 상태가 되기를 기다린다.
4. 기다리던 **Promise 객체가 fulfilled 혹은 rejected 상태가 되면 `await`이 Promise 객체의 결과를 리턴한다.**

```JavaScript
async function fetchAndPrint() {
  try {
    const response = await fetch('주소);
    const result = await response.text();
    console.log(result);
  } catch(error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

fetchAndPrint();
```
