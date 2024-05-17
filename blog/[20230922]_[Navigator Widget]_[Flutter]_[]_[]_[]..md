# Routing

다른 페이지로 이동하는 것을 Routing이라고 한다.

- Scaffold Widget을 페이지 단위로 만든다.
- Routing을 하려면, 무조건 최상단 Widget이 Scaffold여야 한다.

## Navigator Widget

---

Routing 기능 갖고 있는 위젯.

### Navigator.push

새로 페이지를 불러온다.

MyApp의 MaterialApp에서 첫번째 페이지가 될 Scaffold 위젯 반환.

첫번째 Scaffold 위젯 안에서부터 Navigator를 onPressed 속성 등에 사용하면 된다.

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FirstPage(),
    );
  }
}

class FirstPage extends StatelessWidget {
  const FirstPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => SecondPage()));
        },
        child: Icon(Icons.navigate_next),
      ),
      body: SafeArea(
        child: Text('첫번째 페이지'),
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(//...생략...//);
  }
}
```

### Navigator.pop

현재 페이지를 뺀다.

두번째 페이지부터 onPressed 속성 등에 사용하면 된다.

전 페이지가 없는데 Navigator.pop을 하면 화면이 까맣게 변하므로 주의.

어떤 페이지로부터 이동해오면 자동으로 AppBar에 전 페이지로 돌아가기 아이콘이 생긴다. `automaticallyImplyLeading: false,` 로 해당 기능을 끄고 킬 수 있다.

```dart
class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.pop(context);
        },
        child: Icon(Icons.navigate_before),
      ),
      body: SafeArea(
        child: Text('두번째 페이지'),
      ),
    );
  }
}
```
