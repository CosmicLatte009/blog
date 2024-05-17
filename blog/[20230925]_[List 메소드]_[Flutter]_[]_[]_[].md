# .forEach()

List 안의 요소들을 전부 반복문 돌리고 싶을 때 사용하는 메소드.

### 사용법

```dart
var myFriends = ['Teddey', 'Chris', 'Juno', 'Harry', 'Helen'];

myFriends.forEach((value)) {
	print('${value} 출력');
});
```

### 결과

List의 각 요소에 대한 조작을 수행하지만 반환값은 없다. 그래서return도 불필요.

```dart
Teddey 출력
Chris 출력
Juno 출력
Harry 출력
Helen 출력
```

# .map()

List 안의 요소들을 전부 원하는 형태로 바꾸고 싶을 때 사용하는 메소드

### 사용법

ex) List 변수 안의 요소들을 전부 Text 위젯으로 바꿔준다.

```dart
var myFriends = ['Teddey', 'Chris', 'Juno', 'Harry', 'Helen'];

myFriends.map((e) {
	return Text(e);
}).toList();
```

### 결과값

1. 결과 값을 iterable(반복 가능한 객체)로 return해준다.
2. 그래서 결과 iterable을 List로 다시 바꿔줘야한다.

   `.toList()` 메소드 함수 활용

```dart
[Text('Teddy'), Text('Chirs'), Text('Juno'), Text('Harry'), Text('Helen')]
```

## map의 유용한 예시들

---

### List 데이터를 **Text 위젯**으로 바꿔서 **Row**에 뿌리기

Row의 children에는 List<Widget>이 들어가므로
List데이터 안 String을 전부 위젯으로 바꾸면 대체 가능해진다.

```dart
var categories = ['식품', '생활', '디지털', '뷰티', '패션', '자동차', '할인', '가구'];

Row(
     children: categories.map((e) {
         return Text(e);
  }).toList()),
```

### List 데이터를 **Chip 위젯**으로 바꿔서 **ListView에** 뿌리기

ListView의 children에도 List<Widget>이 들어가므로

List데이터 안 String을 전부 위젯으로 바꾸면 대체 가능해진다.

```dart
var categories = ['식품', '생활', '디지털', '뷰티', '패션', '자동차', '할인', '가구'];

ListView(
    scrollDirection: Axis.horizontal,
    children: categories.map((e) {
        return Padding(
            padding: const EdgeInsets.all(8.0),
                child: Chip(label: Text(e)));
    }).toList()),
```

### List 데이터를 **Column**에 뿌리기

Column의 children에도 List<Widget>이 들어가므로

List데이터 안 String을 전부 위젯으로 바꾸면 대체 가능해진다.

```dart
var myFriends = ['Teddey', 'Chris', 'Juno', 'Harry', 'Helen'];

Column(
    children: myFriends.map((e) {
        return ListTile(
            title: Text(e),
            subtitle: Text('동네친구 $e'),
            trailing: Icon(Icons.call),
        );
    }).toList()),
```

### List 데이터로 막대 그래프 표현하기

점수 데이터(e)를 배로 곱하면 점수가 높을수록 막대의 너비가 더 넓어지게 된다.

사용자에게 더 직관적으로 보여지는 막대 그래프를 생성할 수 있다.

![리스트 그래프](https://github.com/CosmicLatte009/blog/assets/87015026/7fc2fa7e-a507-4762-bc66-630b084a3c80)

```dart
var mathScore = [96, 92, 94, 95, 73, 98, 78, 82, 96, 48];

Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: mathScore.map((e) {
    return Container(
        width: e * 2,
        height: 24,
        margin: const EdgeInsets.only(bottom: 8),
            decoration: BoxDecoration(
                gradient: LinearGradient(
                    colors: [Colors.greenAccent, Colors.white])),
    );
}).toList()),
```

# .where()

필터를 걸어서 조건에 해당하는 요소만 남기고 싶을 때 사용하는 메소드

### 사용법

```dart
var mathScore = [96, 92, 94, 95, 73, 98, 78, 82, 96, 48];

mathScore.where((e) {
	return e > 80; //true인 요소만 살아남고, fase인 요소는 살아남지 못한다
})
```

### 결과값

1. 결과 값을 `Iterable<bool>`로 return해준다.
2. 그래서 결과 iterable을 List로 다시 바꿔줘야한다.

   `.toList()` 메소드 함수 활용

```dart
//80보다 큰 요소들만 반환된다.

[96, 92, 94, 95, 98, 82, 96]
```

# .where()과 .map() 같이 사용하는 예시

List 데이터에서 일부 요소만 갖고올 때 `.where()` 로 조건을 걸고

그 조건을 만족한 요소들만 모은 이터러블 `.map()`을 사용하여 위젯으로 변환한 다음 화면에 뿌려준다.

```dart
Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: mathScore.where((element) {
        return element > 80;
    }).map((e) {
        return Container(
            width: e * 2,
            height: 24,
            margin: const EdgeInsets.only(bottom: 8),
                decoration: BoxDecoration(
                    gradient: LinearGradient(
                        colors: [Colors.greenAccent, Colors.white])),
        );
    }).toList()),
```

# 화살표 함수

##### Arrow Function , Expression Body Function

좀더 편하게 사용하기 위한 축약형 함수

##### Block Body Function

중괄호와 return이 있는 기본형 함수

### 사용법

중괄호와 return을 생략한다.

```dart
void main() => runApp(MyApp());
```

```dart
Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: mathScore
    .where((element) => element > 80)
    .map((e) => Container(
        width: e * 2,
        height: 24,
        margin: const EdgeInsets.only(bottom: 8),
            decoration: BoxDecoration(
                gradient: LinearGradient(
                    colors: [Colors.greenAccent, Colors.white])),
    ))
    .toList()),
```
