# 😨유데미 X 스나이퍼팩토리 Day6

주말엔 하루 정도 공부하고 하루는 쉴 생각이었는데 안드로이드 스튜디오는 내 계획에 관심이 없었던 것 같다. 토요일에 에뮬레이터가 안 켜져서 꽤 고생했다는 뜻이다…낑낑대다 다른 분들의 도움으로 겨우 해결하고 새벽 4시 반에 잔 것이 몸상태 박살의 시작이었다…일요일에는 기록 템플릿도 만들고 뚝딱뚝딱 복습을 잘 진행해서 뿌듯함x100이었다. 모든 할일이 끝난게 오늘 아침 9시였던 것만 빼면…블로깅이 밀리면 안됐는데 우째 이렇게 시간이 항상 부족할까 🥲…밤샌거 원투데이도 아니고 하루정도는 뭐…하면서 오늘을 맞이했지만 보란듯이 오후에 복통이 찾아왔다. 앜~

내가 생각하기에 개발자가 밤을 자주 안 새고 여유 있을 때 잘 쉬어줘야 하는 이유는…다음 날은 예상치 못한 일로 진짜 불가피하게 밤을 새야할 수도 있기 때문이다…컨디션 조절 안하면 금방 비실비실해질게 뻔하다 🤧
다행인건 오늘 강의는 프로그래밍 언어에서 공통되는 문법들 위주였다. 팀멤버 소개도 둘러보면서 쉬엄쉬엄 공부했다. 중간에 Zep 팀 강의실 복도에서 사이버 공연도 볼 수 있었다…

![image](https://github.com/CosmicLatte009/blog/assets/87015026/74e42c06-867e-487c-ae5d-4ef66162533f)

반짝반짝이들의 단스 공연…의상 통일감이 굿이었다

# ✍️Day6 과제1-2

# ✅과제 요구사항

### 과제1-1.

주어진 데이터를 활용하여 제시되는 결과를 만드는 코드를 작성하시오.

### 과제1-2.

스크롤이 가능한 형태이며 모든 수를 대상으로
width : [수*2], height: 24 만큼의 크기를 가진 Container를 100개를 나열하는 코드를 작성하시오.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/efb08d3b-8f9e-4634-ab41-b1a69c3141e2)

### 과제2.

키오스크 앱을 업그레이드.

**<조건>**

1. 클릭시 메뉴가 주문 리스트에 담깁니다. 이 때 Chip 위젯으로 들어가게 됩니다.

   Chip은 Delete 아이콘 버튼이 있으며, 클릭시 주문 리스트에서 삭제합니다.

2. 기존의 버튼은 **초기화하기**였으나**,** 동작하지 않는 **결제하기** 버튼으로 바뀝니다.
3. 주문 리스트가 비었다면, 하단의 **결제하기** 버튼이 표시되지 않습니다.
4. 앱바의 **분식왕 이테디 주문하기**를 더블클릭하면, 관리자 페이지로 이동하게 됩니다.

# 📚과제하며 새로 배운 내용

## Card Widget에 border radius

---

### RoundedRectagleBorder 클래스

그림자, 경계선 및 배경색과 같은 시각적 요소를 시각적 스타일과 모양을 정의하는 클래스.

Card, Cotnainer, Button 등 위젯에서 쓰인다.

```dart
Card(
	shape: RoundedRectangleBorder(
		borderRadius: BorderRadius.circular(20.0),
	),
),
```

## BoxShadow

---

### spreadRadius

- 그림자의 확장 정도.
- 양수 값: 그림자 확장
- 음수 값: 그림자 축소
- 값이 클수록 그림자가 더 넓게 확장된다.

### blurRadius

- 그림자의 흐림 정도
- 양수 값: 그림자 흐림 정도 증가
- 0에 가까울 수록 그림자 가장자리가 선명
- 값이 클수록 그림자가 더 흐릿하게 보인다.

```dart
Container(
     child: Center(child: Text(mathData[index].toString())),
     width: mathData[index] * 2,
     height: 24,
     decoration: BoxDecoration(
         borderRadius: BorderRadius.circular(20.0),
         color: Colors.white,
         boxShadow: [
             BoxShadow(
                 color: Colors.grey.withOpacity(0.5),
                 spreadRadius: 1,
                 blurRadius: 1,
             )
         ]),
 ),
```

## isNotEmpty

---

✅ 과제2 - 조건2: 주문 리스트가 비었다면, 하단의 결제하기 버튼이 표시되지 않습니다.

String, List, Map 등의 데이터 구조가 비어 있지 않은지 확인하기 위해 사용되는 메소드.

데이터 구조 크기나 길이가 0이 안인 경우 true 반환,

데이터 구조가 비어 있으면 false 반환.

```dart
List<String> orderedList = [];

floatingActionButton: orderedList.isNotEmpty ?
    FloatingActionButton.extended(
        label: Text('결제하기'),
        onPressed: () {},
    ) :
    null,
```

# 🌟과제 Point

## ListView.builder 안의 Container 위젯 width 제대로 나오게 하기

---

### 문제

ListView.builder 내에서 직접 Container를 사용하면 Container의 width가 설정한 width보다 더 크게 나오고 화면의 가로를 차지했다.

### 문제 원인

Container는 기본적으로 사용 가능한 최대 가로 공간을 차지하려고 시도하기 때문에 ListView.builder의 가로 공간을 다 차지해서 생긴 문제.

### 해결방식

ListView.builder \***\*내에서 **Row Widget\*\*으로 Container를 감싼다.

Row는 자식들의 크기에 따라 가로 공간을 분배하고 자식들을 가로로 정렬한다.

따라서 **Row**가 할당하는 공간에 맞게 **Container**의 width가 동적으로 조절된다.

```dart
ListView.builder(
        itemCount: mathData.length,
        itemBuilder: (context, index) {
            return Row(
                children: [
                    Padding(
                        padding: const EdgeInsets.all(10),
                            child: Container(
                                child: Center(child: Text(mathData[index].toString())),
                                width: mathData[index] * 2,
                                height: 24,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20.0),
                                    color: Colors.white,
                                    boxShadow: [
                                        BoxShadow(
                                            color: Colors.grey.withOpacity(0.5),
                                            spreadRadius: 1,
                                            blurRadius: 1,
                                        )
                                    ]),
                            ),
                    ),
                ],
            );
        },
    ),
```

## List 안에 아이템 있을 시에만 Widget 보여주기

---

✅ 과제2 - 조건1: Chip은 Delete 아이콘 버튼이 있으며, 클릭시 주문 리스트에서 삭제합니다.

1. `isNotEmpty` 로 orderedList가 비어있는지 않은지 확인한다.
   orderedList 안에 요소가 있어서 true면 ListView.builder 위젯을 반환한다.
2. Chip 위젯의 `onDeleted` 속성에 해당 요소의 인덱스를 삭제하는 코드를 작성한다.

   `orderedList.removeAt(index);`

```dart
List<String> orderedList = [];

Container(
      height: 50,
      child: orderedList.isNotEmpty ?
      ListView.builder(
          scrollDirection: Axis.horizontal,
          itemCount: orderedList.length,
          itemBuilder: (context, index) {
              return Chip(
                  label: Text(orderedList[index]),
                  onDeleted: () {
                      orderedList.removeAt(index);
                      setState(() {});
                  },
              );
          },
      ) :
      Text('주문한 옵션이 없습니다.'),
  ),
```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/8fa7a496-74ef-4ac7-962e-c7eb425ead7e)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
