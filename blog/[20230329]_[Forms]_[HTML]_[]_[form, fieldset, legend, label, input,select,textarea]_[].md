## form 태그

form > fieldset > legend / label / input,select,textarea

### form의 주요 속성

- `action` 입력 값을 전송할 페이지.

  - get의 경우
    action="./001.html" 과 같이 일반 html파일에 보내기
    자동으로 해당 페이지로 이동한다.

  - post의 경우
    action="http://localhost:8080" 과 같이 서버에 보내기

- `method` 폼의 데이터 전송할 방법 정의. get,post 등.
  - get의 경우
    URL의 쿼리 속성(query=string&)에 사용자 입력이 노출된다.  
    폼 컨트롤의 name 속성이 쿼리값, 입력 및 선택 값이 string값이 된다.

### form 태그 사용 예시

```HTML
<form action="get.html" method="get">
    <label>
        form 테스트:
        <input type="text" name="test" />
    </label>

    <input type="submit" />
</form>
```

<img
    width="400"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/bd7799f0-dc90-4bc5-a091-6e31fb919102"
  />

---

## label 태그

폼 컨트롤(`input, select, textarea` 등)태그를 설명하는 태그.  
단순히 input 태그 옆에 텍스트를 쓰는 것보다 시맨틱하기 때문에 쓰는 방식.

#### 사용 방식

1. label 태그 내에 input 태그 포함시키기
2. label 태그의 for 속성과 input 태그의 id 속성 값 일치시키기

### label의 필수 속성

- `for` 해당 레이블이 속할 폼 컨트롤(`input, select, textarea`)의 'id' 값과 일치해야 연결된다.

### label 태그 사용 예시

```HTML
<form action="get.html" method="get">
    <p>label 사용방식</p>
    <label><input type="radio" name="fruit" value="apple" />Apple</label>
    <label><input type="radio" name="fruit" value="banana" />Banana</label>

    <label for="mySearch">검색:</label>
    <input type="search" id="mySearch" />

    <input type="submit" />
</form>
```

<img
    width="400"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/4b05d4fb-db0a-4459-bb35-e9ffe2fc357d"
  />

---

## input 태그

사용자에게 정보를 입력 받는다.  
form 태그 내에 사용한다.

### input의 주요 속성

- `type` 태그 모양 다양하게 변경
  - text: 입력한 텍스트 그대로 표현.
  - password: 마스크 처된 텍스트 input.
  - button: 누를 수 있는 간단한 버튼. (버튼 이름은 value속성으로)
  - search: 검색 창. 텍스트 입력 시 옆에 x 표시가 뜬다.
  - date: 날짜 선택 및 입력 (유사한 month, week도 있다)
  - time: 시간 선택 및 입력 - range: 슬라이드 바
  - number: 숫자만 선택 및 입력 가능.
  - color: 색 선택
  - radio: 선택 항목 중 하나만 선택 가능
  - checkbox: 선택 항목 중 0개 이상 선택 가능
  - file: 파일 업로드 - email: 이메일 주소 입력
    (모바일에서 '@'가 포함된 키패드가 화면에 등장.)
  - url: 웹페이지 주소 입력 - tel: 전퐈번호 입력.
    (모바일에서 숫자 키패드가 화면에 등장.)
  - submit: 제출 버튼. 기본값 '제출'
- `name` 태그 이름 지정. URL의 쿼리=string 구조에서 쿼리에 해당하는 값.
- `id` label 태그의 for속성 값과 연결할 때 사용.
- `value` 입력, 선택시 전달되는 값.

### input의 기타 속성

- `placeholder` 입력할 값에 대한 힌트.
- `checked` 처음부터 선택된 상태.
- `readonly` 읽기 전용으로 지정.  
  (단독으로 쓰이기보다 value속성으로 기본값 지정하고 입력 못하도록 하는 방식으로 쓰인다)
- `maxlength` 최대 글자 수
- `minlength` 최소 글자 수
- `required` 필수 태그로 지정. 입력 안하고 submit시 에러가 떠 데이터 전송되지 않는다.
- `autofocus` 웹페이지 로딩되면 autofocus 속성을 지정한 태그로 포커스가 바뀐다.
- `pattern` 정규표현식 사용하여 특정 범위 내의 유효한 값을 입력 받을 때 사용.

### input 태그 주요 type들 사용 예시

```HTML
<form action="get.html" method="get">
    <p>types</p>
    <label>
        아이디:
        <input type="text" name="id" />
    </label>
    <label>
        비밀번호:
        <input type="password" name="pw" />
    </label>
    <input type="button" value="click" />

    <label for="mySearch">검색:</label>
    <input type="search" id="mySeach" />

    <label for="myDate">날짜:</label>
    <input type="date" id="myDate" />

    <label for="myTime">시간:</label>
    <input type="time" id="myTime" />

    <label for="myRange">범위:</label>
    <input type="range" id="범위" />

    <label for="myNumber">숫자:</label>
    <input type="number" id="myNumber" />

    <label for="myColor">색깔:</label>
    <input type="color" id="myColor" />

    <input type="submit" />
</form>
```

<img
    width="600"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/9df0de46-2240-4e18-92ab-0b792cf6361e"
  />

### input 태그 radio와 checkbox type 사용 예시

```HTML
<form action="get.html" method="get">
    <p>Foods: 라디오와 체크박스</p>
    <label><input type="radio" name="fruit" value="apple" />Apple</label>
    <label><input type="radio" name="fruit" value="banana" />Banana</label>

    <label><input type="checkbox" name="drinks" value="milk" />Milk</label>
    <label><input type="checkbox" name="drinks" value="juice" />Juice</label>

    <input type="submit" />
</form>
```

<img
    width="400"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/00c00ee4-f755-4911-8487-b5e0439ea7a1"
  />

### input 태그 기타 type들 사용 예시

```HTML
<form action="get.html" method="get">
    <p>기타 Types</p>
    <input type="file" />
    <input type="email" />
    <input type="url" />
    <input type="tel" />
    <input type="submit" />
</form>

```

<img
    width="400"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/7a55d966-888a-47fc-8bf9-d00377748724"
  />

### input 태그 기타 속성들 사용 예시

```HTML
<form action="get.html" method="get">
    <p>기타 속성</p>
    <input type="text" name="age" placeholder="나이를 입력해주세요." />
    <input type="text" name="age" maxlength="5" minlength="2" />
    <input type="text" name="age" readonly />
    <input type="text" name="age" required />
    <input type="text" name="age" autofocus />
    <input type="text" pattern="abc" />

    <input type="submit" />
</form>
```

---

## select 태그와 option 태그

`<select>` 태그는 드롭다운 리스트 박스 생성.  
`<option>` 태그는 리스트 박스 안의 아이템.

### select의 주요 속성

- `name` 태그 이름 지정. URL의 쿼리=string 구조에서 쿼리에 해당하는 값.

### select의 기타 속성

- `multiple` 여러개 option요소 선택할 수 있게 된다. shift 혹은 ctrl 누르며 선택하면 여러개 선택 가능해진다.
- `size` 드롭다운 리스트에서 한번에 보여줄 수 있는 option의 개수 조절.

### option의 주요 속성

- `value` 선택시 전달되는 값.

### option의 기타 속성

- `selected` 페이지가 로딩되고 난 뒤 기본적으로 선택되는 옵션.

### selecte와 option 태그 사용 예시

```HTML
<form action="get.html" method="get">
    <label for="myTools">문구류를 선택하세요.</label>
    <select name="tools" id="myTools" size="2" multiple>
        <option value="pencil">연필</option>
        <option value="eraser" selected>지우개</option>
        <option value="pen">펜</option>
        <option value="ruler">자</option>
    </select>

    <input type="submit" />
</form>
```

<img
    width="300"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/6d71759a-68bb-4c33-addf-8fde676d6e3a"
  />

---

## fieldset 태그와 legend 태그

`<fieldset>` 태그는 자식 요소로 사용되는 폼 컨트롤(input, select, textarea)들을 그룹화.  
`<legend>` 태그는 fieldset 폼 그룹의 목적을 나타내는 제목. 반드시 fieldset의 첫번째 자식 요소로 사용.

### fieldset와 legend 태그 사용 예시

```HTML
<form action="get.html" method="get"">
    <fieldset>
        <legend>아이디와 비밀번호</legend>
        <label for="myID">아이디: </label>
        <input type="text" name="id" id="myID" />
        <label for="myPW">비밀번호: </label>
        <input type="password" name="pw" id="myPW" />
    </fieldset>
    <fieldset>
        <legend>음식</legend>
        <label for="myFood"></label>
        <select type="text" name="foods" id="myFood">
            <option value="soup">수프</option>
            <option value="bread">빵</option>
            <option value="salad">샐러드</option>
        </select>
    </fieldset>

    <input type="submit" />
</form>
```

<img
    width="800"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/fb768471-fced-48fb-8dc1-bcd38f77fbaa"
  />

---

## button 태그

버튼의 모습을 다양하게 제어하고 버튼 내부에 다른 자식 요소 추가하고 싶을 때 사용.  
스타일 적용 수월. 가상 요소 사용 가능.

### button의 주요 속성

- `type` 버튼의 행동 방식 설정하는 속성
  - `submit` 서버로 양식 데이터 제출. 지정 안 할 시 기본값.
  - `reset` form의 모든 값 초기화.
  - `button` 사용자가 기능 부여 전까지 클릭 외에 다른 작동 없다.

### button 태그 사용 예시

```HTML
<button id="search_btn" type="submit" title="검색">
    클릭
    <span class="icon_search_submit"></span>
</button>
```

## textarea 태그

여러 줄의 텍스트 입력 받을 수 있다.

### textarea의 주요 속성

- `name` 태그 이름 지정. URL의 쿼리=string 구조에서 쿼리에 해당하는 값.
- `cols` 입력창의 넓이. 양수 값만 사용 가능. 기본값 20. 약 20글자.
- `row` 입력창이 보여줄 입력 줄 수.

### textarea 태그 사용 예시

```HTML
<form action="get.html" method="get">
    <label for="posting">게시물 작성</label>
    <textarea name="posting" id="posting" cols="60" rows="10"></textarea>

    <input type="submit" />
</form>
```

<img
    width="500"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/bfc78f62-905e-4f15-973e-e8fc4dd1c1fa"
  />

## datalist 태그

input과 select 섞어서 사용할 수 있도록 하는 태그.  
사용자에게 선택옵션 제공하고, 옵션 중 선택하고 싶은 값이 없을 시 직접 입력받을 수 있도록 하는 것이 목적.

#### 사용 방식

input의 list 속성과 datalist의 id 속성 값 일치시켜서 연결한다.

### datalist 태그 사용 예시

```HTML
<form action="get.html" method="get">
    <label for="mobile">핸드폰을 선택하세요:</label>
    <input type="text" id="mobile" list="userMobile" name="userMobile" />
    <datalist id="userMobile">
        <option value="galaxy">갤럭시노트</option>
        <option value="iphone12">아이폰12</option>
        <option value="iphone13">아이폰13</option>
        <option value="iphone13_pro">아이폰13 pro</option>
        <option value="iphone14">아이폰14</option>
    </datalist>

    <input type="submit" />
</form>
```

<img
    width="400"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/9d2059ee-b91e-4059-a3e0-7f517241715c"
  />
