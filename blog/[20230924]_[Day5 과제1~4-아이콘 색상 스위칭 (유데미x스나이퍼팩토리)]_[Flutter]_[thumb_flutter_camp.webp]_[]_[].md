# 🌞유데미 X 스나이퍼팩토리 Day5

5일이 빠르게 지나서 첫 주 수업까지 마무리되었다.

이제 팀원분들과 말도 조금씩 트고 분위기가 많이 편해졌다. 주로 채팅으로 대화하긴 하지만 👩‍💻…

Flutter를 입문한 소감은…편하긴 한데…이전에 React를 다룰 때도 세상마상 편하다고 생각했지만 Flutter를 하다보면 React랑은 비교도 안되게 이렇게까지 이미 다 만들어진걸 갖다써도 되나…? 싶다. 그리고 별거 안해도 디자인이 막 완성되는 기분이 든다. 웹과 비교하면 아무래도 모바일 화면이 작은 것도 있고, 무엇보다 기본 폰트가 예뻐서 그런 것 같다. 웹에서는 하나하나 건드리지 않으면 처음 디자인이 무척 처참했기 때문에…반면 모바일은 시작부터 화면이 예뻐서 조금더 즐거움이 가미되는 장점이 있당. 🌼

오늘 수업에선 입력 값도 받아오고 버튼도 클릭할 수 있는 방법을 배웠다. 동적인 화면을 만드니까 훨씬 더 재밌어졌다.

강의와 과제는 밀리지 않았지만 아직도 블로그를 어떻게 해야할지 모르겠다. 4일차까지는 강의를 보면서 바로바로 메모를 하고 있는데 블로깅을 의식하면서 메모하다보면 주객전도가 되어서 강의 보는 시간이 너무 늘어졌다. 그래서 오늘은 강의부터 전부 보고 과제까지 해치운 다음에 다시 강의로 돌아가서 복습하자는 마음으로 내용을 메모해봤는데, 전체 소요시간은 크게 다르지 않았다…심지어 과제한 이후라 지쳐서 그렇게 복습이 잘 되지도 않았다.🥲

다음주에는 메모하면서 강의를 보되, 제목 및 코드부터 작성하던지 어떤 것을 기억해야하는지를 중점으로 기록해야겠다.

# ✍️Day5 과제1~4

# ✅과제 요구사항

### 과제1.

버튼 [1번 과제], [2번 과제], [3번 과제]를 구성하고, 클릭 시 각 과제 페이지로 이동하도록 만드세요.

### 과제2.

ScrollController를 활용하여 가장 상단으로 이동하는 기능을 구현합니다.

**<조건>**

1. **ListView.builder** 위젯을 활용하여 **높이가 300인 동물 위젯**을 생성합니다.
2. 하단의 FAB(FloatingActionButton)을 누르면, **스크롤 위치가 최상단으로 이동**되게합니다.

### 과제3.

입력된 텍스트 미러링하는 화면을 제작합니다.

**<조건>**

1. TextField에 입력시, 바로 밑에 위치한 하단의 Text위젯에 똑같이 적용되도록 합니다.
2. FAB(FloatingActionButton)을 클릭하면, 작성중이던 모든 내용이 사라집니다.

### 과제4.

**<조건>**

1. Sun, Moon, Star라는 값이 있으며,
   오른쪽의 버튼을 눌렀을 때, 스위칭이 각각 될 수 있도록 함.
2. 이 때 스위칭이란, 활성화 여부를 뜻하며
   불이 들어와 있을 땐 끄고, 꺼져있을 땐 켜는 것을 뜻함.
3. FAB를 클릭하면 모든 활성화되어있는 아이콘이 비활성화됨.
4. “태양” 입력 후 “엔터(혹은 제출)”하였을 때, 태양 아이콘의 색상이 스위칭이 되도록 함.
5. “달” 입력 후 “엔터(혹은 제출)”하였을 때, 달 아이콘의 색상이 스위칭이 되도록 함.
6. “별” 입력 후 “엔터(혹은 제출)”하였을 때, 별 아이콘의 색상이 스위칭이 되도록 함.

# 📚과제하며 새로 배운 내용

## \_scrollerController.animateTo()

---

✅ 과제2 - 조건2: 하단의 FAB(FloatingActionButton)을 누르면, 스크롤 위치가 최상단으로 이동되게합니다.

### ScrollerController()

스크롤을 제어하는 컨트롤러. 버튼 등을 눌렀을 때 작동하게끔 연결해준다.

최상단으로 이동하려면 animateTo에 0을 입력해준다.

```dart
final ScrollController _scrollController = ScrollController();

floatingActionButton: FloatingActionButton(
        onPressed: () {
          _scrollController.animateTo(0,
            duration: Duration(milliseconds: 300),
            curve: Curves.easeInOut,
          );
        },
        child: Icon(Icons.vertical_align_top),
      ),
```

## TextField의 onSubmitted 속성

---

✅ 과제4 - 조건4-6: 입력 후 “엔터(혹은 제출)”하였을 때, 아이콘의 색상이 스위칭이 되도록 함.

onChanged 속성은 TextField에 입력값을 실시간으로 체크하는 것인 반면

`onSubmitted` 속성은 엔터 키를 눌렀을 때 호출되는 함수를 지정한다.

```dart
TextField(
        onSubmitted: (value) {
              if (value == "태양") isSunClicked = !isSunClicked;
              if (value == "달") isMoonClicked = !isMoonClicked;
              if (value == "별") isStarClicked = !isStarClicked;
              setState(() {});
            },
        decoration: InputDecoration(
              hintText: '키고 끄고싶은 아이콘을 입력하세요.',
              border: OutlineInputBorder(),
            ),
      )
```

# 🌟과제 Point

## TextField 입력필드, 입력값 초기화

---

✅ 과제3 - 조건2: FAB(FloatingActionButton)을 클릭하면, 작성중이던 모든 내용이 사라집니다.

`textFieldController.clear()` 로 TextField의 입력필드를 초기화시킬 수 있다.

해당 입력값을 받아오는 변수는 TextField와 별개로 초기화 시켜줘야한다. `inputValue=''`

```dart
String inputValue = '';
final TextEditingController _textFieldController = TextEditingController();

floatingActionButton: FloatingActionButton(
        onPressed: () {
          inputValue = ''; //입력값 초기화
          _textFieldController.clear(); //입력필드 초기화
          setState(() {});
        },
        child: Icon(Icons.close),
      ),

//...생략...//

TextField(
            controller: _textFieldController,
            onChanged: (value) {
              inputValue = value;
              setState(() {});
            },
            decoration: InputDecoration(
              hintText: '입력하는대로 아래 글자가 나옵니다',
            ),
          ),
Text(inputValue)
```

## 활성화 여부 확인 후 아이콘 색상 변경(토글)

---

✅ 과제4 - 조건1: 오른쪽의 버튼을 눌렀을 때, 스위칭이 각각 될 수 있도록 함.

✅ 과제4 - 조건4-6: 입력 후 “엔터(혹은 제출)”하였을 때, 아이콘의 색상이 스위칭이 되도록 함.

1. 아이콘 활성화 여부 확인은 각 아이콘마다 bool타입 변수로 저장 후 꺼내와서 확인한다.

   ```dart
   bool isSunClicked = false;
   bool isMoonClicked = false;
   bool isStarClicked = false;
   ```

2. 버튼을 누르면 토글이 되도록 한다.

   토글이란 현재 변수가 true일 경우 false로, false일 경우 true로 변경하는 것.
   단항 연산자`!` 를 앞에 붙이면 현재 상태의 반대를 나타낸다.

   `isSunClicked = !isSunClicked;`

   ```dart
   IconButton(
       onPressed: () {
           isSunClicked = !isSunClicked;
           setState(() {});
       },
   ),
   ```

3. 입력필드에 알맞은 값이 입력되면 토글이 되도록 한다.

   ```dart
   TextField(
         onSubmitted: (value) {
         if (value == "태양") isSunClicked = !isSunClicked;
         if (value == "달") isMoonClicked = !isMoonClicked;
         if (value == "별") isStarClicked = !isStarClicked;
             setState(() {});
        },
   ),
   ```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/ec8a9c8a-c11f-4383-ad10-53d024037baa)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
