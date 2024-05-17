# Material Design이란

- 구글에서 제작하고 제안한 웹/앱 디자인가이드 시스템
- 플러터에서 머터리얼 디자인을 쉽게 개발할 수 있도록 “디자인시스템” 기반 위젯을 제공한다. → Material Widget
- Material Design [https://m2.material.io/components](https://m2.material.io/components)

## MaterialApp Widget

---

- Material Design 제공 위젯
- Material Widget으로 최상단 위젯을 감싸면,
  위젯에서 기본적인 Material에 필요한 디자인 요소가 어플 전체에 적용된다.

## **Scaffold 위젯**

MaterialApp Widget에는 Scaffold 위젯이 필수로 따라오는데
MaterialApp 위젯이 건물(앱)을 짓기 위한 땅이라면,
Scaffold 위젯은 철근이라고 볼 정도로 필수라고 보면 된다.

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
			home: Scaffold(
						appBar: AppBar(),
						body: Text('본문내용'),
						bottomSheet: Container(),
						bottomNavigationBar: BottomNavigationBar(item: [],),
						floatingActionButton: FloatingActionButton(onPressed: (){},),
			),
		);
  }
}
```

### bottomSheet 속성

하단에 고정되어 실시간으로 정보를 보여주는 요소를 구성할 때 쓰인다.

ex) 주문하고 있는 장바구니 현황, 쿠폰받기, 재생 중인 음악 등

## AppBar Widget

---

- 앱의 헤더 위젯
- SafeArea 위젯을 통해 얻을 수 있는 “안전영역”을 기본적으로 제공한다.
- 위젯이지만 Scaffold 위젯의 appBar 속성에 넣어서 제공할 수 있다.

  ```dart

  home: Scaffold(
  	appBar: AppBar(
  		title: Text('타이틀이지롱'),
  		backgroundColor: Colors.transparent,
  		foregroundColor: Colors.black,
  		elevation: 0,
  		centerTitle: false,
  		leading: Icon(Icons.access_time),
  		actions: [
  			Padding(
  					padding: const EdgeInsets.all(8.0),
  					child: Icon(Icons.share),
  			),
  			Padding(
  					padding: const EdgeInsets.all(8.0),
  					child: Icon(Icons.shopping_cart),
  			),
  			Padding(
  					padding: const EdgeInsets.all(8.0),
  					child: Icon(Icons.search),
  			),
  		]
  	),
  	body: 본문위젯(),
  ),
  ```

### centerTitle 속성

title 기본값은 ios면 중앙 정렬, 안드로이드면 왼쪽 정렬인데
이를 centerTitle속성에 false 혹은 true를 주어서 변경할 수 있다.

### forgroundColor 속성

title 속성의 글자 색상을 변경해준다.

### actions 속성

ListTile 위젯의 trailing 속성처럼 title 이후에 따라붙는 요소들을 지정해줄 수 있는 속성. 단, AppBar에는 보통 아이콘이 여러개가 붙으므로 **List 형태로** 넣어주어야한다.

> 🪄 AppBar 배경색과 그림자 없애기
>
> backgroundColor 속성을 투명으로 바꾸고,
> shadow에 영향을 주는 elevation 속성에 0을 준다.

## BottomNavigationBar Widget

---

- 앱의 스크린 하단 네비게이션 위젯
- 위젯이지만 Scaffold 위젯의 bottomNavigationBar 속성에 넣어서 제공할 수 있다.

```dart

home: Scaffold(
	appBar: AppBar(),
	body: 본문위젯(),
	bottomNavigatorBar: BottomNavigationBar(
			type: BottomNavigationBarType.fixed,
			items:[
					BottomNavigationBarItem(
						icon: Icon(Icons.home),
						label: '홈'
					),
					BottomNavigatorBarItem(
						icon: Icon(Icons.search),
						label: '검색'
					),
					BottomNavigatorBarItem(
						icon: Icon(Icons.shop),
						label: '상점'
					),
			],
),
```

### items 속성

List를 요구하는 필수 속성값.

items에 제공되는 List의 length는 반드시 2개가 넘어야한다.

List 안에 `BottomNavigationBarItem` 위젯으로 아이템들을 생성할 수 있다.

> 🪄 List 안 요소가 3개 이상이 되면 BottomNavigatorBar의 모양이 바뀐다.
> type 속성에 BottomNavigationBarType.fixed, 로 하단에 잘 고정시켜줘야한다.

### fixedColor 속성

현재 선택된 아이템의 색상을 변경해준다.

### currentIndex 속성

숫자로 현재 아이템을 선택할 수 있다.

## FloatingActionButton Widget

---

- 항상 화면에 고정되어 floating(떠있는) FAB 버튼을 제공하는 위젯
- 위젯이지만 Scaffold 위젯의 floatingActionButton 속성에 넣어서 제공할 수 있다.

```dart

home: Scaffold(
	appBar: AppBar(),
	body: 본문위젯(),
	bottomNavigatorBar: BottomNavigatorBar(),
	floatingActionButton: FloatingActionButton(
		onPressed: (){},
		child: Icon(Icons.add),
		mini: true,
	),
),
```

### onPressed 속성

function을 요구하는 필수 속성값.

### mini 속성

버튼의 크기를 더 작게 할 것인지 boolean으로 정할 수 있는 속성.
