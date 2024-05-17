# 주요 Widget

## SafeArea 위젯

---

- 내가 사용하는 **자식 위젯(child)**이 시각의 안전 영역에 들어오게 해주는 위젯.
- 휴대폰마다 각각 다른 “노치” (아이폰의 맨상단) 때문에 생겼다.
  child에는 Widget 데이터타입만 들어갈 수 있다.
  `SafeArea(child: Text("hi!"))`

## Center 위젯

---

- child를 화면의 가운데로 위치시키는 위젯.
- 본인이 가질 수 있는 최대의 width, height를 기준으로 자식에게 가운데를 제공한다.
  `Center(child: Text('Hi!'))`

## Column 위젯

---

- 새로운 위젯을 나열할 때 사용
- 자식들을 가질 수 있는 위젯 (child → children)
- 속성: children에 데이터타입이 List<Widget>인 것만 넣어줄 수 있다.

```dart
Column(
	children: [
		Text('Widget: 1'),
		Text('Widget: 2'),
	]
)
```

## Row 위젯

---

- 가로로 위젯을 나열할 때 사용
- 자식들을 가질 수 있는 위젯 (child → children)
- 속성: children에 데이터타입이 List<Widget>인 것만 넣어줄 수 있다.

```dart
Row(
	children: [
		Text('이 아이콘은 더하기 아이콘입니다'),
		Icon(Icons.add),
		Text('신기하쥬'),
	]
)
```

## ListView Widget

---

- Column, Row에는 기본적으로 스크롤 기능이 없다.
- ListView가 바로 기본적으로 스크롤 기능을 장착해주는 위젯이다.

```dart
ListView(
	children: [
		Text('안녕..나는'),
		Text('Colum위젯이랑'),
		Text('Row위젯이랑'),
		Text('사용법이 같아'),
	]
)
```

### ListView 가로로 사용하려면…

ListView 방향의 기본값은 세로(column, vertiacl 수직) 이다.
이를 바꿔주려면 `scrollDirection` 속성을 `Axis.horizontal` 로 바꿔준다.

```dart
ListView(
	scrollDirection: Axis.horizontal,
	children: [
		Text('안녕..나는'),
		Text('Colum위젯이랑'),
		Text('Row위젯이랑'),
		Text('사용법이 같아'),
	]
)
```

## SingleChildScrollView Widget

---

- 자식 객체에 스크롤 기능을 만들어주는 위젯.
- ListView는 children으로 다수의 위젯을 달아서 길어지면 스크롤을 제공하는 반면
- SingleChildScrollView는 단일 위젯의 자식에게 스크롤을 제공할 수 있다.
  - ex) 웹툰에서 하나의 긴 이미지를 통으로 넣고 스크롤해야할 때 등

```dart
ListView(
	scrollDirection: Axis.vertical,
	child:
		Text(
'''재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.

선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.

대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다.

국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.

국회의원과 정부는 법률안을 제출할 수 있다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.'''
),
)
```

## PageView Widget

---

- 한 번에 한 위젯만 보여주고, 다음 위젯은 넘겨야만 보여줄 때 사용하는 위젯
- 스와이프 기능!

```dart
PageView(
	children: [
		Text('1번페이지'),
		Text('2번페이지'),
		Text('3번페이지'),
	]
)
```

## Sizedbox 위젯

---

- 자식 위젯에게 사용할 수 있는 공간(크기)를 정해줄 때
- 속성: height에는 double, int의 값을 줄 수 있다.
- 속성: width에는 double, int의 값을 줄 수 있다.
- 현업에서는 Column위젯이나 Row위젯의 자식들 사이사이에 간격을 넣을 때도 사용한다.

```dart
Sizedbox(
	width: 300,
	height: 300,
	child: Text('이테디'),
)
```

## Container 위젯

---

- 자식 위젯에게 사용할 수 있는 공간(크기)를 정해줄 때
- 예쁘게 내 자식을 포장해서 보여주고 싶을 때 (색상넣기, 둥글게 하기, 그림자넣기 등)
- 속성: height에는 double, int의 값을 줄 수 있다.
- 속성: width에는 double, int의 값을 줄 수 있다.
- 현업에서는 Column위젯이나 Row위젯의 자식들 사이사이에 간격을 넣을 때도 사용한다.

> 🪄 **현업 TIP**
>
> 1. 속성: margin을 통해 현재 위치에서 떨어지는 간격 넣기 가능
>    margin: EdgeInsets.all(24),
> 2. 속성: alignment를 통해 자식이 보여질 위치를 정할 수 있다. Center 위젯 대체.
> 3. 속성: padding이 이미 Container 위젯 안에 있으므로 Padding 위젯 추가 불필요.

1. 기본 사용법

   ```dart
   Container(
   	width: 300,
   	height: 300,
   	child: Text('이테디'),
   )
   ```

2. 색상만 넣는 경우 → color 속성

   ```dart
   Container(
   	color: Colors.indigo,
   	width: 300,
   	height: 300,
   	child: Text('이테디'),
   )
   ```

3. 전반적인 스타일링을 하는 경우 → decoratoin 속성

   - decoration 속성을 사용할 때는 반드시 color 속성이 decoration 안에서 사용되어야 한다.

   ```dart
   Container(
   	width: 300,
   	height: 300,
   	child: Text('이테디'),
   	decoration: BoxDecoration(
   		color: Colors.indigo,
   		border: Border.all(),
   		borderRadius: BorderRadius.circular(16),
   		gradient: LinearGradient(
   				begin: Alignment.topLeft,
   				end: Alignment.bottomRight,
   				colors:[
   					Colors.red,
   					Colors.blue,
   			],
   		),
   		boxShadow: [
   				BosShadow(
   					color: Colors.black12, //색상 뒤의 숫자는 높을수록 opacity100에 가깝다
   					blurRadius: 4,
   					spreadRadius: 8,
   					offset: Offset(3.2, 3.2) //그림자가 어디서 위치할 것인
   			),
   		],
   	),
   )
   ```

## Padding 위젯

---

- 자식에게 패딩(간격)을 원하는 만큼 띄우고 싶을 때 사용
- 속성: padding에는 **EdgeInsets 데이터**만 들어갈 수 있다.
  - 보통 일반적으로 8 정도의 간격을 쓴다.
- 속성: child에는 Widget 데이터만 들어갈 수 있다.

```dart
Padding(
	padding: EdgeInsets.all(8),
	child: Text('이테디'),
)
```

## ListTile 위젯

---

- 구글 머터리얼 디자인을 표현하기 위한 ListTile을 표현하기 위한, 디자인된 위젯
- 속성: title에는 Widget데이터만 들어갈 수 있다.
- 속성: subtitle에는 Widget 데이터만 들어갈 수 있다.

```dart
ListTile(
	title: Text('이테디'),
	subtitle: Text('010-1234-5678'),
)
```

- 보너스 속성: leading에는 앞에 위젯을 두고 싶을 때
  - ListTile의 leading 크기는 정해져있다. 만약 leading의 자리에 큰 크기의 이미지를 불러오고싶다면 ListTile이 적합하지 않을 수 있다.
- 보너스 속성: trailing에는 뒤에 위젯을 두고 싶을 때

```dart
ListTile(
	title: Text('이테디'),
	subtitle: Text('010-1234-5678'),
	leading: Icon(Icons.access_time),
	trailing: Icon(Icons.call),
)
```

## Text 위젯

---

- 화면상에 글자를 입력하고 싶을 때 사용하는 위젯
- Text 위젯은 데이터타입이 String인 것만 넣어줄 수 있다.
  `Text("Hi!")`

## Icon 위젯

---

- 아이콘을 보여줄 때 사용하는 위젯
- Icon 위젯은 데이터 타입이 IconData인 것만 넣어줄 수 있다.
  `Icon(Icons.access_time)`

아이콘 종류 및 검색: [https://fonts.google.com/icons?selected=Material+Icons](https://fonts.google.com/icons)

## RichText 위젯

---

> ❓ **MaterialApp 앞에 ‘const’가 있고 없고의 차이가 뭘까?
> ’const’를 지우면 파란색 경고로 ‘const’를 사용해보라고 하고,
> ‘const’를 추가하면 에러가 난다.**

> ❓ **MaterialApp 앞에 const가 있으면 에러가 떠서 삭제했더니
> test폴더의 widget_test.dart 파일 line16에서 const MyApp 앞의 const도 에러를 낸다.**
