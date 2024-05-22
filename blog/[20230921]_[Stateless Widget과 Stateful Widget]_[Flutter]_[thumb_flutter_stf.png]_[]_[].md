# build

Flutter 화면에 UI를 그리는 것을 build라고 한다.

개발자가 내용 수정 후 저장하면 화면이 바뀌는 것도 build가 다시 일어났기 때문이다.

## build 함수

---

StatelessWidget을 처음 생성한 모습을 보면,

@overried 아래로 그림이 그려지는 것을 담당하는 build 함수가 있다.

```dart
@override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
```

> Widget 데이터 타입의 build라는 함수가
>
> BuildContext 데이터 타입의 context를 함수 인자 값으로 받고,
>
> MaterialApp을 반환함으로써 그림을 그리는 것.

> 🪄 모든 Widget는 build 함수를 통해 그려지고 있다.
>
> 그렇기 때문에 Widget 안으로 Ctrl 클릭하여 들어가보면 build 함수를 포함하고 있다.

# Stateless Widget과 Stateful Widget

## Stateless Widget

---

- 한번 build 되면 스스로 재build 불가능한 위젯.
- 스스로 state가 없다.
- 한번 build하면, 수정할 필요가 없다.
- ex) Text, Container 위젯

`stl` 후 tab 하면 Stateless Widget 자동완성 가능.

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}
```

> 🪄 단, Stateless Widget의 부모가 재build되면 Stateless Widget도 재build가 된다.
> 스스로 재build가 불가능한 것이지 재build가 아예 안되는 것은 아니다.

## Stateful Widget

---

- 스스로를 재build, 즉 업데이트가 가능한 위젯.
- 스스로 state가 있다.
- ex) Checkbox, TextField 위젯

`stf` 후 tab 하면 Stateless Widget 자동완성 가능.

`convert to stateful widget` 으로 stateless → stateful 로 변경 가능.

stateless와 달리 class가 두개로 나뉘는데, 이 두 class를 한 세트로 봐주면 된다.

```dart
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}
```

## Stateful Widget이 스스로 재build하는 방법

---

### setState((){}) 함수

Stateful Wdiget이 스스로 재build하려면 특정 함수 호출(실행)이 필요하다.

그 함수가 바로 `setState((){});`

Flutter가 setState 함수를 마주치면 재build를 시작한다.

보통 상태가 변하는 코드 작성 직후에 setState 함수를 작성해주면 된다.

```dart
class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int level = 1; //level 변수 선언

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
            child: InkWell(
          onTap: () {
            level += 1; //level 변수를 1씩 증가시켜주는 코드
            setState(() {}); //level 변수의 상태가 변했으니 바로 재build하자!
          },
          child: Text('현재 $level레벨입니다'),
        )),
      ),
    );
  }
}
```

## Stateless Widget과 Stateful Widget의 생명 주기

![Stateless Stateful](https://github.com/CosmicLatte009/blog/assets/87015026/c8290416-cf70-4796-ac38-f6253c784344)

#### StatelessWidget 라이프사이클

위젯이 처음 생성될 때 build 메서드가 호출되고, 그 이후에는 더 이상 호출되지 않는다.

```dart
class MyStatelessWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text('Hello, World!');
  }
}
```

#### StatefulWidget 라이프사이클

StatefulWidget은 StatefulWidget 클래스 자체와 State 클래스 두 부분으로 나뉜다.
StatefulWidget 클래스는 불변(immutable)하며, State 클래스는 상태를 가지고 있으며 mutable하다.

##### State 클래스의 라이프사이클 메서드

`initState` : 위젯(=State 객체)이 처음 생성될 때 호출된다. 초기화 작업 실행 가능.
`build` : 상태가 변경될 때마다 호출된다.
`dispose` : 위젯이 제거될 때 호출된다.

```dart
class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    // 초기화 작업
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Counter: $_counter'),
        ElevatedButton(
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
          child: Text('Increment'),
        ),
      ],
    );
  }

  @override
  void dispose() {
    // 정리 작업
    super.dispose();
  }
}
```
