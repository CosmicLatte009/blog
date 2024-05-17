# true/false에 따라 달라지는 Widget 2가지

## CheckBox Widget

---

### value 속성

현재 Checkbox가 체크되어있는지 안되어있는지 표시하는 속성

주로 동적으로 사용할 때는 boolean 데이터 타입이 저장된 변수를 넣어준다.

### onChaged 속성

value를 동적으로 바꾸는 코드를 넣어준다.

```dart
class ExampleWidget extends StatefulWidget {
  const ExampleWidget({super.key});

  @override
  State<ExampleWidget> createState() => _ExampleWidgetState();
}

class _ExampleWidgetState extends State<ExampleWidget> {

  var isChecked = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: SafeArea(
        child: Checkbox(
          value: isChecked, //value를 동적으로 바뀌게 하기 위해 변수 연결
          onChanged: (value) {
            isChecked = value!; //value의 현재 상태의 반대값을 isChecked에 저장해준다
            setState(() {});
          },
        ),
      ),
    );
  }
}
```

## Visibility Widget

---

### visible 속성

boolean 타입 변수를 연결해준다.

visible 속성이 true가 되면 해당 위젯의 child를 보여주고,

visible 속성이 false가 되면 해당 위제의 child를 숨긴다.

```dart
class ExampleWidget extends StatefulWidget {
  const ExampleWidget({super.key});

  @override
  State<ExampleWidget> createState() => _ExampleWidgetState();
}

class _ExampleWidgetState extends State<ExampleWidget> {
  var isLogined = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: SafeArea(
        child: Visibility(
          visible: isLogined,
          child: Text('로그인되었습니다'),
        ),
      ),
    );
  }
}
```
