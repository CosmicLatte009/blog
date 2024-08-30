# 최신 CSS 기능들과 다양한 스타일링 방법들에 대해서...

#### 수많은 스타일링 방법들이 있다....

최근 멘토링을 받으며 왜 그렇게 다양한 스타일링 방법들이 많은지 조금씩 정리해보고 있다. Styled-Component와 Tailwind가 대체로 더 많이 사용되는 것 같지만 개인적으로는 전통적인 CSS 전처리기인 SCSS와 CSS module을 함께 사용하는걸 선호했다. 하지만 유튜브에서 제주코딩베이스캠프가 무료 제공되하는 강의에 따르면 SCSS과 같은 CSS 전처리기에서만 사용할 수 있던 기능이나 더 유용한 문법들이 더 추가되었던걸로 보인다. 멘토링에서 배운 내용과 잘 몰랐던 CSS 기본 기능들을 같이 정리해보자.

## 우선 제코베가 알려주는 최신 CSS 기능들

최신이라고 하지만 사실 2017~2023년도에 나온 문법들이다. PostCSS 등을 쓰다보니 눈부시게 발전한 CSS를 몰라봤다...Nesting 기능이 기본 CSS에서도 되고 있었을 줄이야?

[![연도별 정리! 반드시 알아야 할 CSS 최신 기능들!](https://github.com/user-attachments/assets/5dc113be-f479-49ac-82cd-d06f1bf0bef8)](https://www.youtube.com/watch?v=Um_0gTiamzQ)

#### 학습한 내용들

##### Nesting이 기본 CSS에서도 된다~

SCSS처럼 `&`앰퍼샌드도 사용 가능하다! 2023년부터 됐다고 한다.

```css
button {
	background-color: blue;
	color: white;
	&:hover {
		background-color: green;
	}
}
```

##### :is()와 :where()

2020년에 도입된 문법.
여러 개의 선택자를 지정할 때 사용한다.
`:is()`의 우선순위가 더 높고, `:where()`의 우선순위가 낮다.

###### 기존 방식

만일 heading 태그들 안에 있는 a 태그를 선택하고 싶다면 옛날에는 아래처럼 해야 했다.

```css
h1 a,
h2 a,
h3 a {
	color: blue;
}
```

###### :is를 사용해서 간략하게

하지만 `:is()`를 사용하면 이만큼이나 축약할 수 있다.

```css
:is(h1, h2, h3) a {
	color: blue;
}
```

##### :not()과 :has()의 조합

`:has()`는 특정 요소가 자식 요소를 포함하고 있는지 검사할 수 있게 해준다.
2022년에 도입된 매우 핫한 문법.

```css
//a 요소를 가진 div만 선택
div:has(a) {
	background-color: lightblue;
}
```

`:not()`은 선택자에서 제외할 요소를 지정할 때 사용한다. 이를 통해 특정 요소를 제외하고 스타일을 적용할 수 있다. 2011년에 도입됐다.

둘을 같이 사용하면 아래와 같이 복잡한 경우의 수도 짧게 축약하여 선택할 수 있다.

```css
//a 요소를 가진 경우를 제외하고 span 태그 선택
span:not(:has(a)) {
	color: blue;
}
```

## PostCSS랑 CSS 전처리기가 헷갈린다.

[PostCSS](https://postcss.org/)는 JS 플러그인을 사용하여 CSS를 변환하는 도구다. CSS의 Babel.
CSS 전처리기는 작성하는 과정에서 표준 CSS 문법을 확장하여 유지보수가 용이하게끔 도와주는 도구다. 확장된 문법을 표준 CSS로 트랜스파일해주는 것까지 해준다.

전통적인 CSS 전처리기인 SCSS(Sass)는 CSS 전처리기이면서 PostCSS와도 함께 사용이 가능하다.

## CSS-in-CSS, CSS-in-JS

CSS-in-CSS는 전통적인 CSS 적용 방식으로, CSS 파일 내에서 스타일을 작성하고 HTML에서 이를 참조하는 방식이다.
CSS-in-JS는 JavaScript 코드 내에서 CSS를 작성하고, 컴포너트와 스타일을 밀접하게 결합하는 방식이다.
CSS-in-CSS를 사용한다면 Tailwind를, CSS-in-JS를 사용한다면 Styled-Components(Emotion)를 사용하는 경우가 많다.

## Emotion(Styled-Components)에서 만난 문제

나도 이번에 진행하던 사이드프로젝트에서 Emotion을 사용했고...이렇듯 세상은 이 둘이 점령한듯 보였으나...의외의 불편한 점을 발견했다.

> prop "isActive" is being sent through to the DOM

조건부 스타일링을 위해 사용자 정의 prop을 React DOM에 넘겨주면 당연히 HTML 표준에는 정의되지 않은 속성들이 DOM 요소에 추가되어 자잘한 에러가 생긴다.
대강 아래처럼 슬프고 길고 무섭게 나온다. (그리고 추천하는 방법대로 `$` prefix를 사용해봐도 문제가 고쳐지지 않는 경우들이 있다.)

> styled-components.browser.esm.js:33 styled-components: it looks like an unknown prop "isActive" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)

Emotion을 계속 사용하면서 이 문제를 해결하려면, 데이터 어트리뷰트 방식을 사용하면 좋다.

## 데이터 어트리뷰트 스타일링

데이터 어트리뷰트 스타일링은, React 컴포넌트에서 `data-*` attribute를 사용하여 CSS를 다르게 적용하는 방식이다. 컴포넌트 상태에 따라 동적으로 스타일링을 변경해야 할 때 유용하다.
`data-*`속성은 HTML5에서 제공하는 사용자 정의 데이터 속성이다.

##### 컴포넌트에서 attribute 작성하는 방법

```tsx
 <div data-selected-value={selectedValue}>
```

##### CSS에서 attribute의 값에 따라 다른 스타일 적용하는 방법

```css
div[data-selected-value="없음"] {
	background-color: lightgray;
	color: black;
}

div[data-selected-value="옵션1"] {
	background-color: blue;
	color: white;
}

div[data-selected-value="옵션2"] {
	background-color: green;
	color: white;
}
```

생각보다 이런 조건부 스타일링 문제 외에도 CSS-in-JS는 여러모로 불편한 점이 많다고 한다...
대표주자 Styled-Components 대신 그래도 요즘 추천하는 CSS-in-JS 라이브러리가 있다는데..
바로 [PandaCSS](https://panda-css.com/)이다.🐼🐼

PandaCSS의 유용함과 Styled-Components 비교는 아래 블로그 글과 공식문서의 글에서 확인할 수 있다.

[PandaCSS와 함께 CSS-in-JS의 미래로](https://tech.wonderwall.kr/articles/pandacss/)

[Why Panda?](https://panda-css.com/docs/overview/why-panda)
