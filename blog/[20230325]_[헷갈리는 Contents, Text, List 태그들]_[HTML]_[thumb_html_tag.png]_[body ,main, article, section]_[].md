### 1. 시맨틱 태그

의미가 있는 태그들

#### 왜 시맨틱 태그가 중요한가?

- SEO 검색엔진 최적화를 위해
- 웹 접근성을 위해
- 개발자들의 웹사이트 구조 이해를 돕기 위해 (-> 유지보수성)

---

### 2. Contents

body > main > article > section

### `<main>`

페이지의 본문

### `<article>`

- 포스트 하나, 기사 하나 자체를 묶어줄 때
- 독립적으로 다른 페이지에 보여줬을 때 전혀 문제가 없어야 한다
- `<main>` 태그 내에 있어도 main 내의 다른 내용들과 상관없이 독립적으로 고유한 정보 나타낼 때 사용 가능

### `<section>`

- `<article>` 태그 내에서 서로 연관 있는 내용들을 묶어 주고 싶을 때.
- `<main>` 태그 내에서 바로 `<section>` 태그 사용해도 무방.

---

### 3. Text

### `<i>`

- 시각적으로만 이탤릭체
- 책의 제목이나 인용구 등

### `<em>`

- 문맥적으로도 강조하는 이탤릭체
- 문장 등

### `<b>`

- 시각적으로만 볼드체

### `<strong>`

- 문맥적으로도 중요한 볼드체

---

### 4. List

ol > li > ol, ul  
ul > li > il, ul  
dl > dt, dd

### `<ul>`

- 순서가 중요하지 않은 List

### `<ol>`

- 순서가 중요한 List

### `<dl>`

- 어떤 한 단어에 대해서 정의, 설명 등을 묶는 List

### `<dt>`

- 설명할 단어 표기

### `<dd>`

- `<dt>`단어에 대한 설명

![image](https://velog.velcdn.com/images%2Fseul06%2Fpost%2F32e68949-3d2b-42de-a341-35f5aca730be%2FUntitled.png)
