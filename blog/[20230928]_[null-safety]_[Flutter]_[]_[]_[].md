# null 데이터 타입

데이터가 존재하지 않음을 나타내는 데이터 타입.

### 네트워크에서 데이터가 존재하지 않는 경우

- 10년 전 작성했던 게시글이 사라진 경우
- 회원정보를 가져오려고 했는데 탈퇴한 경우

> 🪄 프론트엔드는 데이터가 도착하지 않는 상황도 고려하여 미리 대처를 해놓아야 한다.

# null-safety

변수가 null도 가질 수 있도록 하는 것.

데이터 타입 뒤에 `?` 를 붙여주면 해당 변수는 앞에 지정한 타입 혹은 null 타입일 수도 있게 된다.

`데이터타입? 변수명 = null`

`List<데이터타입?> 변수명 = []`

```dart
String? message = null;

List<String?>myFirends = ["Teddy", null, "Chris", null, null, "Juno"];
```

# null-safety 핸들링

## 변수에 null이 들어가 있지 않음을 확신하는 경우

---

### **문제**

위젯에서 null-safety `String?` 변수를 그냥 화면에 그리려고 하면 해당 변수가 null일 가능성이 있으니 받아들이지 않겠다는 에러를 낸다.

```dart
String? message = "Hello";

Text(message),
```

### **해결 방법**

현재 시점에는 해당 변수에 반드시 String이 들어갈 것이라는 표시를 해준다.

`변수명!`

```dart
String? message = "Hello";

Text(message!),
```

## 변수에 null이 실제로 들어가 있는 경우

---

### **문제**

실제로 변수에 null이 들어가 있어서 위젯에서 null-safety 변수에 `!` 를 달아주어도 받아들일 수 없다는 에러가 발생한다.

```dart
String? message = null;

Text(message!),
```

### **해결 방법 1 (if문)**

if문으로 null을 핸들링해준다.

`변수명!`

```dart
String? message = null;

if(message != null) {
	Text(message!)
} else {
	Text("데이터를 불러올 수 없습니다.");
}
```

### **해결 방법 2 (삼항 연산자)**

삼항 연산자로 null을 핸들링해준다.

```dart
message != null ? Text(message!) : Text("데이터를 불러올 수 없습니다.")
```

### **해결 방법 3** ⭐ (??)

`??` 를 사용하여 null을 핸들링해준다.

`??` 는 앞의 변수가 다른 데이터 타입이면 그대로 변수를 출력, null이면 `??`뒤의 코드를 실행한다.

```dart
message ?? Text("데이터를 불러올 수 없습니다.");
```

# Nullable, Null-Safety 쉽게 요약하자면...

1. 데이터 타입이 null일 수도 있다
2. 데이터 타입이 null이 아니면 이렇게 해줘

이 값은 데이터 타입이 null일 수도 있어

`데이터타입?` 인 값은 클래스명.값 을 불러오려고 할 때 null일 수도 있다며!..하면서 에러낸다.

```dart
class 클래스명 {
	String? 값,
}
```

- **해결방법들**
  - 이 값이 null이라면 이렇게 해줄거야 `??`
    ```dart
    얘가 null이라면 ?? '이거 보여줄거야'
    ```
  - 나 null 아니야 진짜야 `!`
    ```dart
    클래스명!.값;
    ```
