# ✍️Day4 과제2

# ✅과제 요구사항

![image](https://github.com/CosmicLatte009/blog/assets/87015026/46e67d3d-b22f-43d3-a5f6-7f4030ab4b46)

**<조건>**

1. 음식을 누르면 주문 리스트에 담기는 키오스크앱을 만들어봅니다.
2. 음식이미지는 자유이며, 필요한 경우 위에 첨부된 파일을 이용하여도 됩니다.
3. 하단에 떠있는 버튼을 누르면 지금까지 주문된 주문 리스트를 초기화합니다.
4. 하단에 떠있는 버튼은 정중앙의 하단, 넓게 펴진 형태로 [ 초기화하기 ] 텍스트를 포함합니다.
5. 음식이 보여지는 것은 [갤러리] 형태로 보여지게 하며, 검색을 통해 해결합니다.
6. 그 외 UI 디자인은 자유입니다.

# 📚과제하며 새로 배운 내용

## GridView Widget

---

✅ 조건5: 하단에 떠있는 버튼을 누르면 지금까지 주문된 주문 리스트를 초기화합니다.

그리드 형태의 레이아웃을 생성하는 위젯.

GridView의 각 항목은 종종 Card위젯으로 래핑하여 내용을 작성한다.

### gridDelegate 속성

`SliverGridDelegateWithFixedCrossAxisCount` 를 통해 열(세로)의 수를 지정한다.

```dart
GridView(
    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3, //세로 기둥이 3개니까 가로로 아이템이 3개 놓인다
    ),
    child: Card(),
),
```

## GridView 아이템 안의 이미지 조절하기

---

### Expanded

Expanded Widget은 자식 위젯이 사용 가능한 영역까지 최대한 확장하게 한다.
따라서 이미지가 그리드 아이템 내에서 최대한 크게 표시된다.

자식 위젯의 크기가 너무 커서 부모 위젯의 공간을 넘칠 경우에도 적절한 크기로 조절되도록 해준다. 화면 크기에 맞춰 텍스트나 이미지가 잘리지 않고 표시되도록 도와준다.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/b3591527-7415-4fab-8c9a-51fd07cca38e)

### BoxFit.cover

BoxFit.cover은 이미지가 자신의 가로 세로 비율을 유지하면서, 부모 위젯(Expanded 위젯)에 가득 차게 한다.

그 결과 이미지가 부모 위젯 내에서 꽉 차게 표시되며, 부모 위젯의 공간을 모두 활용한다.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/d8c33210-470d-45ba-aaef-bfabe136e5d4)

```dart
Card(
      margin: EdgeInsets.all(4),
      child: Column(
           crossAxisAlignment: CrossAxisAlignment.stretch,
           children: [
               Expanded(
                   child: Image.asset(
                       imgUrl,
                       fit: BoxFit.cover,
                  ),
               ),
             Text(foodName),
             Text('[담기]'),
          ],
      ),
),
```

## FloatingActionButton 커스터마이징

---

✅ 조건4: 하단에 떠있는 버튼은 정중앙의 하단, 넓게 펴진 형태로 [ 초기화하기 ] 텍스트를 포함합니다.

### floatingActionButtonLocation 속성

FloatingActionButton의 위치를 지정할 수 있다.

`FloatingActionButtonLocation.centerFloat` 은 하단 가운데에 위치시킨다.

### FloaticActionButton.extended

더 많은 공간을 제공하여 FloatingActionButton에 텍스트와 아이콘을 함께 표시할 수 있게 해주는 확장된 버전이다.

- **icon**: 버튼에 아이콘 넣는 속성
- **label**: 버튼 아이콘 옆에 표시할 텍스트 작성하는 속성
- **onPressed**: 버튼을 눌렀을 때 실행할 함수나 동작을 지정하는 속성
- **backgroundColor**: 버튼의 배경색 지정하는 속성
- **elevation**: 버튼의 그림자를 조절하는 속성

```dart
Scaffold(
     body: 위젯명(...생략),
     floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
     floatingActionButton: FloatingActionButton.extended(
         onPressed: () {
             orderedList = [];
             setState(() {});
         },
         label: Text('초기화하기'),
     ),
 ),
```

# 🌟과제 Point

## 입력값을 List에 저장하여 보여주기

---

✅ 조건1: 음식을 누르면 주문 리스트에 담기는 키오스크앱을 만들어봅니다.

✅ 조건3: 하단에 떠있는 버튼을 누르면 지금까지 주문된 주문 리스트를 초기화합니다.

### List.add(추가할 값);

List에 값을 추가할 수 있다.

1. List 데이터 타입의 변수를 만들어준다.

   ```dart
   List<String> orderedList = [];
   ```

2. 해당 List가 화면에 나타날 수 있도록 Text위젯 등에 변수를 넣어준다.

   ```dart
   Padding(
       padding: const EdgeInsets.all(6), child: Text('$orderedList')),
   ```

3. 어떤 아이템(OptionCard)을 눌렀을 때 List에 해당 아이템이 추가되게끔 한다.

   ```dart
   InkWell(
       onTap: () {
           orderedList.add('떡볶이');
           setState(() {});
       },
       child: OptionCard(
           imgUrl: 'assets/option_bokki.png', foodName: '떡볶이'),
   ),
   ```

4. 이렇게 List에 값을 추가하는 코드가 있으면, 보통 초기화할 수 있는 버튼도 같이 만든다.

   ```dart
   floatingActionButton: FloatingActionButton.extended(
       onPressed: () {
           orderedList = [];
           setState(() {});
       },
       label: Text('초기화하기'),
   ),
   ```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/12230761-581a-4acf-97fe-39b5ce2ddbac)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
