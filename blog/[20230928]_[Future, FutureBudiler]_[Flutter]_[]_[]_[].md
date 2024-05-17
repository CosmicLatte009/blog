# FutureBuilder

Created Time: 2023년 9월 28일 오후 10:40
Tag: Http, Widget, builder, 패키지

# Futuer 개념 잡기

#### Future가 정확히 뭐더라..

미래에 요청한 데이터가 오거나 에러를 확인할 수 있는 것.

네트워크 통신이 2초 걸린다면, 사용자 인터페이스(UI)는 멈추지 않고 다른 이벤트를 처리하거나 사용자와 상호작용을 계속할 수 있도록 해야한다.

#### setState((){})가 뭐더라…

builder 함수를 한번더 실행하여 화면을 다시 그려주는 놈

Futrue 대신 실행해주고 상태에 따라 보여주는 위젯도 다루고, 화면도 자동으로 다시 그려주는 얘가 Futrue.builder였다…그래서 setState((){})가 필요 없는 장점이 있었다

# Future를 다루는 위젯

## FutureBuilder Widget

---

Future를 실행시켜서 나온 데이터를 위젯으로 보여주고 싶을 때 사용하는 위젯.

FutureBuilder Widget 자체가 상태가 변할 수 있는 Stateful Widget으로 만들어져있다.

### FutureBuilder의 장점

- 변수 불필요
- setState 불필요
- Future를 실행하는 도중에 일어나는 상태를 계속 개발자에게 보고한다.

### ConnectionState

Future 실행하는 도중 일어나는 상태를 개발자에게 알려줄 때 사용되는 값.

- **ConnectionState.done**
  데이터 확인 가능
- **ConnectionState.waiting**
  데이터가 들어오길 기다리는 중

### snapshot

Future를 실행하는 도중 일어나는 상태(connectionState) 및 실제 데이터 값이 담겨있는 스냅샷.

- **connecionState**
  현재 스냅샷 정보.
  ConnectionState.done과 비교하여 통신이 완료되었는지 확인 가능
  ```dart
  if (snapshot.connectionState == ConnectionState.done) {
  	return Text(snapshot.data!.data["result"]);
  }
  ```
- **hasData**
  데이터가 존재하는지 확인
  ```dart
  if (snapshot.hasData) {
  	return Text(snapshot.data!.data["result"]);
  }
  ```

### FutureBuilder 예시

```dart
FutureBuilder(
  future: dio.get('주소'),
  builder: (context, snapshop) {

    if (snapshot.connectionState == ConnectionState.done) {
      return Text(snapshot.data!.data["result"]);
    }

    return Container(width: 20, height: 20, color: Colors.red,);
		//Future가 실행되기 전에 보여지는 위젯
  }
)
```

# 로딩 위젯

## CircularProgressIndicator Widget

---

빙글빙글 돌아가는 로딩 위젯

```dart
FutureBuilder(
  future: dio.get('주소'),
  builder: (context, snapshop) {

    if (snapshot.connectionState == ConnectionState.done) {
      return Text(snapshot.data?.data["result"] ?? "실패");
    }

    return CircularProgressIndicator();
		//Future가 실행되기 전에 보여지는 위젯
  }
)
```

## LinearProgressIndicator Widget

---

프로그레스바 로딩 위젯

```dart
FutureBuilder(
  future: dio.get('주소'),
  builder: (context, snapshop) {

    if (snapshot.hasData) {
      return Text(snapshot.data?.data["result"] ?? "실패");
    }

    return CircularProgressIndicator();
		//Future가 실행되기 전에 보여지는 위젯
  }
)
```

## flutter_spinkit 패키지

---

여러가지 모양의 로딩 패키지

[https://pub.dev/packages/flutter_spinkit](https://pub.dev/packages/flutter_spinkit)
