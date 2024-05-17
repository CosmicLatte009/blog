# 🌞유데미 X 스나이퍼팩토리 Day4

오늘은 동적으로 화면을 변할 수 있게 하는 Stateful Widget, 입력과 이벤트를 배웠다.

이제 글자도 입력하고 버튼도 누를 수 있다~ 🥳

하쥐만 과제하며 제법 고통의 시간을 겪었다. 특히 다이얼로그를 띄우는데서 애를 먹었는데, 챗지피티와 구글을 붙잡고 열심히 울어봤지만 해결하지 못했다… 🥲

아래에 적겠지만 flutter의 context 개념을 잘 몰라서 생긴 문제였는데, 에러도 따로 뜨지 않아서 문제 파악을 못했다. 문제 자체를 모르니 답을 구할 수 있는 구체적인 검색이 안된 것이다. 🤯

주노 멘토님한테 겨우겨우 질문했는데 이미 다른 사람들도 같은 문제를 겪었다고 하더라…
앞으로는 너무 파김치가 되어서 여쭤보지 말고 30분 붙잡다가 모르겠으면 얼렁얼렁 도움 청하자…

나는 제대로 질문을 정리하지 않고 도움을 구하는게 양심이 따끔따끔해서 문제를 혼자 붙잡는 시간이 조금 긴데, 늘 느끼지만 좋은 점이 없는 것 같다.

어차피 질문이 제대로 정리가 되는 경우는 금방 풀 수 있는 문제란 뜻이고, 질문 정리가 안된다는 것이 바로 도움을 구해야하다는 절실한 신호기 때문에…앓는 시간을 단축해보자

# ✍️Day4 과제1

사칙연산

# ✅과제 요구사항

![image](https://github.com/CosmicLatte009/blog/assets/87015026/81335ef5-1930-4ec4-be8a-4ed9c4d56007)

**<조건>**

1.  TextField를 두 개 사용하여 변수에 저장합니다.
2.  사칙연산이 가능하도록 버튼을 4개 만듭니다. 각각의 버튼(+,-,\*,/)를 누르면 해당 연산자에 맞는 결과값을 출력합니다.
3.  이 때, 결과값은 **다이얼로그(Dialog)**로 출력합니다.
    Dialog란, 앱에서 팝업창처럼 화면위에 화면을 띄우는것을 말합니다.
    일반적으로 showDialog가 있고, AlertDialog를 주로 사용합니다.
4.  계산 결과를 result로 넣으면, 다이얼로그를 출력하는 예시코드가 제공됩니다.
    해당 코드를 활용하여 결과를 화면에 출력하세요.
    `dart
    showResultDialog(BuildContext context, var result) {
    	showDialog(
    				context: context,
    				builder: (context) {
    					return Dialog(
    						shape: RoundedRectangleBorder(
    							borderRadius: BorderRadius.circular(8.0)
    						),
    						child: SizedBox(
    						width: MediaQuery.of(context).size.width / 2,
    						height: 150,
    						child: Center(
    							child: Text("$result",
    								style: const TextStyle(fontWeight: FontWeight.bold),
    							)
    						),
    					),
    			);
    		},
    	);
    }
    `

# 📚과제하며 새로 배운 내용

## String을 int으로 변환

---

`int.parse(String)` 메서드를 사용하여 문자열을 정수로 변환한다.

만약 입력 문자열이 유효한 정수가 아니라면 예외 **`FormatException`**가 발생할 수 있다.

ex) TextField에서 숫자 키패드를 사용해도 입력값은 String으로 들어오기 때문에
입력값을 연산하는 경우에는 int으로 변환해줘야 한다.

```dart
// int inputValueX = 0;

TextField(
    onChanged: (value) {
        inputValueY = int.parse(value);
    },
    keyboardType: TextInputType.number,
),
```

## double을 int으로 만드는 방법

---

`round()` 메서드를 사용하여 소수를 가장 가까운 정수로 반올림한다.

ex) 나눗셈으로 double 타입이 된 결과값을 깔끔하게 보여줄 때 쓸 수 있다.

int이나 double이 String이어야만 화면에 보여지는건 아니므로 String으로까지 변환할 필요는 없다.

```dart
// int inputValueX = 0;
// int inputValueY = 0;
// int resultValue = 0;

ElevatedButton(
    onPressed: () {
        double divideValue = inputValueX / inputValueY;
        resultValue = divideValue.round();
        setState(() {});
        showResultDialog(context, resultValue); //숫자 그대로 다이얼로그에서 출력한다
    },
    child: Text('나누기의 결과값은?!'),
),
```

## InputDecoration class

---

TextField의 스타일을 지정할 때 decoration 속성에 달아서 쓴다.

### border 속성

`OutlineInputBorder()` 을 지정하면 input을 border가 있는 박스 형태로 만들 수 있다.

### labelText

input 입력필드 상단에 라벨이 생긴다.

### hintText

placeholder와 같은 역할. 입력 필드에 무엇을 적어야할지 힌트를 준다.

```dart
TextField(
    decoration: InputDecoration(
        border: OutlineInputBorder(),
        labelText: 'X의 값은?',
        labelStyle: TextStyle(color: Colors.black),
        hintText: 'X의 값을 입력하세요.',
    ),
),
```

## label과 input을 가로로 배치하기

---

![image](https://github.com/CosmicLatte009/blog/assets/87015026/c2088748-e208-4633-b52c-149904c3c63d)

Row 위젯 안에서 자식 Text 위젯과 자식 TextField 위젯을 분리하여 label, input을 나눈다.

TextField 위젯의 크기는 Container \*\*\*\*위젯이나 SizedBox 위젯으로 감싼 후 width를 통해 작성한다.

```dart
Row(
    children: [
        Text('X의 값은'),
        Container(
            width: 200,
            margin: const EdgeInsets.only(left: 50),
                child: TextField(
                    onChanged: (value) {
                        inputValueX = int.parse(value);
                    },
                    keyboardType: TextInputType.number,
                    decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'X의 값을 입력하세요.',
                    ),
                ),
        ),
    ],
),
```

# 🌟과제 Point

## TextField 입력값에 따라 화면 다시 그리기

---

✅ 조건1: TextField를 두 개 사용하여 변수에 저장합니다.

✅ 조건2: 사칙연산이 가능하도록 버튼을 4개 만듭니다. 각각의 버튼을 누르면 해당 연산자에 맞는 결과값을 출력합니다.

1. StatefulWidget 사용
2. TextField의 onChaged 속성에서 들어오는 입력값(value)을 각 변수에 저장하는 함수 bind
3. Button의 onPressed 속성에서 버튼이 눌리면 inputValueX와 inputValueY를 연산하는 함수 bind
4. 화면이 다시 그려지게 할 시점은 버튼이 눌린 직후이므로 `setState((){})` 연산 코드 바로 뒤에 넣기
5. 버튼이 눌릴 때 연산 결과 resultValue가 다이얼로그에 나오도록
   `showResultDialog(context, resultValue);` 넣기

```dart
class Scaff extends StatefulWidget {
    Scaff({super.key});

    @override
    State < Scaff > createState() => _ScaffState();
}

class _ScaffState extends State < Scaff > {
    int inputValueX = 0;
    int inputValueY = 0;
    int resultValue = 0;

    showResultDialog(BuildContext context, var result) {
        showDialog(
            context: context,
            builder: (context) {
                return Dialog(
                    shape:
                    RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
                    child: SizedBox(
                        width: MediaQuery.of(context).size.width / 2,
                        height: 150,
                        child: Center(
                            child: Text(
                                "$result",
                                style: const TextStyle(fontWeight: FontWeight.bold),
                            )),
                    ),
                );
            },
        );
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            body: Center(
                child: Column(
                    children: [
                        TextField(
                            onChanged: (value) {
                                inputValueX = int.parse(value);
                            },
                        ),
                        TextField(
                            onChanged: (value) {
                                inputValueY = int.parse(value);
                            },
                        ),
                        ElevatedButton(
                            onPressed: () {
                                resultValue = inputValueX + inputValueY;
                                setState(() {});
                                showResultDialog(context, resultValue);
                            },
                            child: Text('더하기의 결과값은?!'),
                        ),
                    ],
                ),
            ),
        );
    }
}
```

## showDialog가 정확한 위치에 뜨게 하는 방법

---

✅ 조건3: 이 때, 결과값은 다이얼로그(Dialog)로 출력합니다.

### context 전달

Flutter에서 **`BuildContext`** (context) \***\*는 **위젯 트리에서 현재 위치를 나타내는 데 사용되는 개념\*\*이다.

context는 해당 위치에서 위젯의 빌드 및 렌더링과 관련된 정보를 제공하며,
위젯 트리의 구조와 상호 작용하기 위해 사용된다.

하지만 위젯 스스로는 자신의 context를 직접 파악하지 못한다.

대신, 부모 위젯으로부터 context를 전달 받으면 파악할 수 있으므로
각 위젯 부모 위젯으로부터 context를 제공받아야 한다.

> 🪄 다이얼로그와 같은 경우에는 context를 상위 위젯으로부터 전달 받아야 하며,
> 이를 통해 다이얼로그를 올바른 위치에 표시할 수 있다.

### MaterialApp을 retrun하는 StatelessWidget

context를 명시적으로 전달하는 부모 위젯이다.

```dart
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: Scaff());
  }
}
```

### Scaffold를 retrun하는 StatefulWidget

context를 명시적으로 전달받는 자식 위젯이고 showDialog도 이 context를 사용한다.

```dart
class Scaff extends StatefulWidget {
    Scaff({super.key});

    showResultDialog(BuildContext context, var result) {
        showDialog(
            context: context,
            builder: (context) {
                return Dialog(...생략...);
    }

    @override
    State < Scaff > createState() => _ScaffState();
}

class _ScaffState extends State < Scaff > {

//...생략...//

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            body: 위젯시작(..생략...)
        );
    }
}
```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/f9cd7711-02d6-412c-8530-a67e6df6c95c)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
