# 🌞유데미 X 스나이퍼팩토리 Day2

플러터 캠프의 둘째날이 밝았다.

오늘은 팀원 한분과도 처음으로 인사 나눴다.

마이크 켜놓고도 아니고 팀방 채팅도 아니고 DM으로…내향인답게 인사했다. 🤭

오늘은 플러터의 폴더구조, 컨테이너 역할을 하는 위젯들과 이미지 위젯들과 이미지 위젯을 배웠다.

강의를 보는건 의외로 일찍 끝난다. 배속으로 보면 4시 전엔 웬만하면 다 볼 수 있다.
하지만 어차피 과제를 하다보면 시간이 블랙홀처럼 빨려들어가기 때문에… 강의 내용을 잘 소화시킬 수 있도록 커리큘럼이 짜여진 것 같다.

# ✍️Day2 과제1

오늘 하루 기분 체크 앱

# ✅과제 요구사항

아래의 이미지와 동일한 결과물을 만들고, 이를 만들기 위한 전체 코드를 작성하세요.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/31c500c8-4b4f-40c3-a2d8-68ec0bdbd858)

**<조건>**

1. 3가지 이상의 기분을 담고있는 위젯을 페이징이 가능하게 만드세요. (gradient, radius 필수)
2. **ListTile 위젯을 사용하지 않고**, 동일한 결과물을 만드세요.

   - 위와 아래를 구분하는 구분선은 **Divider** 위젯입니다.

   ```dart
   // 사용 예시
   Column(
   	children: [
   		Text('제목'),
   		Divider(),
   		Text('내용'),
   	]
   )
   ```

# 📚과제하며 새로 배운 내용

## BoxDecoration class

---

✅ 조건1: (gradient, radius 필수)

그래픽 디자인을 정의하기 위한 클래스다.

Container Widget, SizedBox 등의 decoration 속성에 쓰인다.

### color 속성

BoxDecoration의 상위 위젯 색상을 결정한다.

BoxDecoration에 color 속성을 주면 BoxDecoration의 상위 위젯에 color속성이 불필요하다.

```dart
Container(
	width: 300.0,
  height: 180.0,
	child: Text('Container를 색상으로 채우기'),
	decoration: BoxDecoration(
            color: Colors.blue,
       ),
)
```

### borderRadius 속성

`BorderRadius.circular(n)` 으로 BoxDecoration의 상위 위젯 모서리의 둥글기 정도를 조절한다.

```dart
Container(
	width: 300.0,
  height: 180.0,
	child: Text('Container의 모서리를 둥글게둥글게'),
	decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
       ),
)
```

### gradient 속성

`LinearGradient` class로 BoxDecoration의 상위 위젯을 그라데이션으로 채운다.

- begin 속성: 그라데이션이 시작하는 위치
- end 속성: 그라데이션이 종료되는 위치
- colors 속성: 작성한 순서대로 [시작컬러, 종료컬러]

```dart
Container(
	width: 300.0,
  height: 180.0,
	child: Text('Container를 그라데이션으로 채우기'),
	decoration: BoxDecoration(
          gradient: LinearGradient(
		          begin: Alignment.centerLeft,
		          end: Alignment.centerRight,
		          colors: [
		               Colors.blue,
		               Colors.green,
	             ],
	        ),
       ),
)
```

### 과제에서 BoxDecoration을 적용한 코드

```dart
Container(
  child: Center(
    child: Text(
      '행복함',
      style: TextStyle(
        color: Colors.white,
        fontSize: 18,
        fontWeight: FontWeight.normal,
      ),
    ),
  ),
  decoration: BoxDecoration(
    borderRadius: BorderRadius.circular(10),
    gradient: LinearGradient(
      begin: Alignment.centerLeft,
      end: Alignment.centerRight,
      colors: [
        Colors.orange,
        Colors.yellow,
      ],
    ),
  ),
),

```

# 🌟과제 Point

## PageView Widget 크기 설정하기

---

PageView 자체에 width나 height 속성이 없기 때문에
Container 혹은 Sizedbox로 PageView를 감싸서 width 및 height을 지정해준다.

> 🪄 PageView에 **height이 없으면 에러가 나고**, width가 없으면 화면의 가로 폭을 전부 사용한다.

> 🪄 PageView의 children 아래에 들어가는 Container들은 부모 Container에서 지정한 width와 height와 동일하게만 나온다.

처음에는 자손 Container들에게도 모든 크기를 지정해주었다.
그러나 자손 Container들의 크기가 부모 Container와 같다면 굳이 자손 Container의 크기를 지정해줄 필요 없다는걸 알고 자손 Container들의 width와 height은 삭제했다.

```dart
Container(
  margin: EdgeInsets.symmetric(vertical: 10),
  width: 300.0, //여기서 PageView의 width와
  height: 180.0, //height을 지정해줬다.
  child: PageView(
    children: [
      Container(), //자손 Container의 width,height은 지워주었다.
			Container(),
    ],
  ),
),

```

## PageView Widget의 페이지 간격 설정하기

---

스와이프할 때 페이지 Container들 사이에 간격이 보통 있으므로 margin 속성을 사용한다.

처음에는 오른쪽으로 스와이프하니까 간격이 오른쪽에만 있는 것처럼 보여서 오른쪽에만 margin을 줬다. 😅

하지만 당연히 오른쪽에만 margin이 있으면 페이지별 UI가 깨지므로 양쪽에 margin이 생기도록
`EdgeInsets.symmetric(horizontal: 20)` 로 바꿔주었다. 🥰

```dart
Container(
  margin: EdgeInsets.symmetric(vertical: 10),
  width: 300.0,
  height: 180.0,
  child: PageView(
    children: [
      Container(margin: EdgeInsets.symmetric(horizontal: 20),),
			Container(),
    ],
  ),
),

```

## ListTile Widget과 유사한 Row Widget 꾸미기

---

✅ 조건2: ListTile 위젯을 사용하지 않고, 동일한 결과물을 만드세요.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/b0ee4497-e606-447d-bd50-03e66cd15fbd)

### Row의 크기 지정

Row를 Container로 감싸서 Container에 padding을 준다.

### Row 안의 자식 위젯들 사이 간격 조절

1. **자식 위젯들 간격이 좁은 경우**

   한번더 컨테이너용 위젯으로 감싸주고 그 안에서 `SizedBox` 위젯을 사용한다.

2. **자식 위젯들 간격이 넓은 경우**

   `Spacer()` 로 사용 가능한 빈 공간을 차지하게끔 한다.

   `Spacer(flex: n)` 으로 요소들 간의 간격을 원하는 비율로 조절할 수도 있다.

### ClipOval 안의 이미지를 원형태로 유지하면서 크기 조절하는 법

ClipOval 말고 Image.network 위젯의 width를 조절한다.

```dart
 Container(
     color: Colors.blue,
     padding: EdgeInsets.all(12), //Row의 크기는 Container의 padding으로 지정
     child: Row(
         children: [
             Row(
                 children: [
                     ClipOval(
                         child: Image.network(
                             '이미지 주소',
                             width: 60, //이미지 원형태로 유지하면서 크기 조절
                         ),
                     ),
                     SizedBox(
                         width: 10, //자식 위젯들 간격 좁을 때
                     ),
                     Column(
                         crossAxisAlignment: CrossAxisAlignment.start,
                         children: [
                             Text('곰돌이'),
                             Text('프론트엔드'),
                             Text('flutter, react'),
                         ],
                     ),
                 ],
             ),
             Spacer(), //자식 위젯들 간격 넓을 때
             Icon(
                 Icons.add,
                 color: Colors.white,
             ),
         ],
     ),
 ),
```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/65f273c7-873a-4ae5-811f-32928cbe97b9)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
