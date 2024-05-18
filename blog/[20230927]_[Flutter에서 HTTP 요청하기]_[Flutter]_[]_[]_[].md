# Flutter에서 http 요청하는 방법

##### 1. http 관련 패키지 설치

- http 패키지
  http 요청 보내고, 응답 받을 수 있단 다트 공식 패키지.
  [https://pub.dev/packages/http](https://pub.dev/packages/http)

  ```dart
  http: ^1.1.0

  import 'package:http/http.dart' as http;
  ```

- Dio 패키지
  기존 http 패키지보다 더 많은 기능을 담고 있는 패키지
  [https://pub.dev/packages/dio](https://pub.dev/packages/dio)

  ```dart
  dio: ^5.3.3

  import 'package:dio/dio.dart';
  ```

##### 2. HTTP 사용할 대상의 URL 정의

##### 3. Method (get, post) 선택

##### 4. 요청 보내기

##### 5. 요청 응답받기

    http 패키지는 `res`까지만 입력하면 Instance of ‘Response’를 응답받기 때문에 `res.body`까지 불러와줘야한다.
    dio 패키지는 `res` 까지만 입력해도 응답이 바르게 온다.

##### 6. 출력

### get만 사용되는 경우

---

데이터를 읽거나 검색할 때 사용되는 메서드

주로 데이터를 읽을 때 사용된다.

```dart
void main() async {
  var url = 'https://sniperfactory.com/sfac/http_only_get';
  var response = await http.get(Uri.parse(url));
  print(response.body);
}
```

### post만 사용되는 경우

---

데이터를 새로 생성할 때 사되는 메서드

주로 데이터를 생성할 때 사용된다.

```dart
void main() async {
  var url = 'https://sniperfactory.com/sfac/http_only_post';
  var response = await http.post(Uri.parse(url));
  print(response.body);
}
```

# Dio 패키지로 http 요청하기

## Dio 패키지

---

기존 http 패키지보다 더 많은 기능을 담고 있다.

요청 대상 및 연결에 관한 정보를 미리 설정해줄 수 있다.

- 요청 전 데이터를 검수
- 응답이 오면 데이터를 한번 점검
- 1차적으로 가공
  dio 패키지는 `res` 까지만 입력해도 응답이 바르게 온다.
- 파일(이미지), 다중파일같은 FormData를 사용해야할 때 손쉽게 구현가능

## Dio 패키지로 요청 응답 받는 방법

---

### res

`{"items" : {"key": "value",}}`

http 패키지에서 res.body로 응답을 가져 때와 같은 형태로, **String** 타입의 데이터를 가져온다.

### res.data

`{item: {key: value}}`

**\_InternallinkedHashMap<String, dynamic>** 타입의 데이터를 가져온다.
res나 http 패키지의 res.body와 달리 해당 데이터에 접근하려고 할 때 따로 가공이 필요 없다는 것이 장점.

```dart
res.data["item"]["key"]
```

## Dio 패키지의 headers

---

### headers: ‘user-agent’

- 사용자가 접속한 브라우저가 무엇인지 알고 싶을 때
- 크롤링 봇을 막을 때 유용하게 사용됨 (user-agent 설정하면 무효화 가능)

### headrs: ‘authorization’

- 내가 원하는 사용자에게만 데이터를 주고싶을 때 그들에게 미리 키를 공유해놓기
- 로그인 → 로그인성공 → 서버가 JWT 토큰 발급 → 디바이스에 저장 → 요청시 JWT 토큰 장착
- `authorization: 'JWT token'`

```dart
var dio = Dio();

getDataUsingDio() async {
    var res = await dio.get('url주소',
        options: Options(headers: {
            'user-agent': 'Safari',
						'authorization': 'Barer ey-123123123123';
        }, ),
    );
    print(res);
}

IconButton(
    onPressed: () {
        getDataUsingDio();
    },
    child: Icon(Icons.play_arrow),
),
```
