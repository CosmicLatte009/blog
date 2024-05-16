# SPA와 MPA

## SPA

#### Single Page Application

index.html 한개의 페이지로 이루어진 애플리케이션을 뜻한다.  
JavaScript 파일이 여러개다.  
대표적인 SPA 프레임워크는 React가 있다.

### SPA의 단점

- SEO 검색엔진 최적화에 비효율적이다.

  title, meta가 검색엔진에 걸려야하는데  
   SPA는 JavaScript로 데이터를 보여주기 때문에 검색엔진에 잘 안 잡힌다.  
   `useHelment()` 등의 훅을 쓰면 단점 보완이 가능하지만 완전하지 않다.  
   Next가 이 단점을 보완하기 위해 나온 프레임워크다.

## MPA

#### Multi Page Application

원하는 페이지마다 html 파일이 개별로 만들어진 애플리케이션을 뜻한다.  
깜빡임, 접속 많은 때 렌더링 부담 문제가 있다.

---

# 렌더링 방식

## CSR

#### Client Side Rendering

브라우저가 서버에 HTML과 JavaScript 파일을 요청한 후 로드되면  
**사용자의 상호작용에 따라 클라이언트 단에서 JavaScript를 이용해서 동적으로 렌더링시키는 방식이다.**

React와 같은 많은 Single Page Application(SPA) 이 Client Side Rendering(CSR) 방식을 채택한다.  
하지만 모든 SPA가 CSR 방식을 채택하는 것은 아니다.

### CSR의 장점

- 컴포넌트 재사용이 용이하다.  
   컴포넌트 단위로 UI를 구성하기 때문에 재사용에 용이하고 중복을 줄일 수 있다.
- 사용자 경험 (UX)이 좋다.  
   첫 로딩만 기다리면, 동적으로 빠르게 렌더링되기 때문에 페이지 전환이 부드럽다.
- 서버에 부담이 적다.  
   변경된 사항만 서버에 요청을 보내면 되기 때문에 서버의 부담이 적다.

### CSR의 단점

- 초기 페이지 로딩이 오래 걸린다.
- SEO 검색엔진 최적화에 비효율적이다.  
   검색엔진의 검색 봇이 크롤링을 하는데 어려움을 겪기 때문에 SEO가 어렵다.  
   구글 봇의 경우는 JavaScript를 지원하지만 다른 검색엔진은 그렇지 않다.

### CSR이 유용한 경우

- 데이터가 자주 업데이트 되는 경우
- 사용 중 빠른 사용자 경험 인터랙션이 더 중요한 경우 (첫 로딩 이후를 말한다.)
- 사용자별 비공개 페이지처럼 SEO에 적합하지 않은 경우

## Pre-Rendering

서버로부터 완성된 각 페이지별 완성된 HTML 문서를 받아오는 방식이다.  
이렇게 하면 CSR과 달리 JavaScript 없이도 화면을 렌더링시킬 수 있다.

CSR적인 부분을 Pre-Rendering 방식으로 바꿔 적용하기 위해 개발된 프레임워크들이 있다.  
대표적으로 React 생태계엔 Next와 Gatsby, 그리고 Vue 생태계엔 Nuxt가 있다.

### Pre-Rendering의 장점

- 초기 렌더링, 즉 초기 뷰가 빠르다.
- SEO 검색엔진 최적화가 효율적이다.  
   JavaScript를 이용한 렌더링이 아니기 때문에 검색엔진 최적화가 쉽다.

---

# Pre-Rendering의 옵션들

Pre-Rendering은 SSR, SSG, ISR 방식으로 다시 나뉜다.  
모두 Pre-Rendering의 장점을 갖지만 각자가 유용한 경우가 다르고,  
하나의 애플리케이션에서 하나의 방식만 사용해야 하는 것은 아니다.

## SSR

#### Server Side Rendering

HTML 문서가 매 페이지 요청이 있을때마다 생성되는 방식이다.

### SSR의 단점

- 서버에 매번 요청을 하기 때문에 서버에 부하가 많다.
- 응답 속도가 SSG보다는 떨어진다.
- 사용자 경험(UX)이 CSR보다 좋지 않다.  
   페이지 전환할 때마다 새로고침되기 때문에 화면이 깜빡거린다는 느낌을 받을 수 있다.

### SSR이 유용한 경우

- SSG처럼 미리 데이터를 보여줄 필요는 없지만 빠른 첫 로딩이 필요한 경우
- 데이터가 자주 업데이트 되는 동시에 SEO가 요구되는 경우
- 사용자의 요청이 있어야 데이터가 변경되는 경우

## SSG

#### Static Site Generation

HTML 문서가 빌드 타임에 생성되고, 매 페이지 요청 시 이미 생성완료된 페이지(Static)를 반환함으로써 재사용되는 방식이다.

Next 프레임워크에서는 SSG 방시이 default 값이다.

### SSG가 유용한 경우

- 빠른 뷰가 아주 중요한 경우  
   사용자 요청 전에 미리 페이지를 보여줘도 되는 경우  
   (마케팅 페이지, 블로그 게시물, 제품 목록 등)

## ISR

#### Incremental Static Regeneration

SSG의 단점을 보완한 방식이다.  
SSG는 빌드시에 HTML을 생성하지만, ISR은 특정 시간(초)마다 정적페이지에 필요한 데이터를 업데이트하여 재생성한다.

### ISR의 장점

- HTML 문서에 변경 사항이 있어도 다시 build하지 않아도 된다.

### ISR이 유용한 경우

- 빠른 뷰가 중요한 동시에 변경사항 업데이트도 종종 있는 경우

---

# TTV와 TTI

## TTV

#### Time To View

**TTV** 는 보여지는 시점.

## TTI

#### Time To Interact

**TTI** 는 인터랙션 사용자와의 통신이 가능해지는 시점.

### CSR과 Pre-Rendering에서의 TTV, TTI 차이

CSR은 사용자에게 보여짐과 동시에 (TTV) 모든 HTML과 JavaScript를 불러온 상태이기 때문에, 모든 동적인 행동도 할 수 있게 된다. (TTI)

하지만, Pre-Rendering은 HTML과 일부 JavaScript 파일을 서버로부터 사전에 받아 놓기 때문에  
TTV 상태에서도 TTI가 전부 활성화되어 있지는 않다.

---

# SEO란?

## SEO

#### Search Engine Optimization

SEO는 검색 엔진으로부터 웹사이트나 웹페이지에 대한 웹사이트 트랙픽 품질과 양을 개선하는 과정이다.  
즉, 검색 엔진의 검색 결과 페이지 상단에 노출시키는 검색 엔진 최적화 작업이다.

Pre-Rendering처럼 사전에 HTML 문서를 검색 엔진이 찾을 수 있도록 제공하면 SEO를 향상 시킬 수 있다.
