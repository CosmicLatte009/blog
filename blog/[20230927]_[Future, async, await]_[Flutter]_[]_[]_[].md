# Future 데이터 타입

- 미래(Future)를 달리는 데이터타입
- Future<데이터타입>

## Future 데이터 처리하는 방법

---

### async

비동기 함수 앞에 선언하는 키워드.

코드 내부에 await이 하나라도 들어가있으면 반드시 써줘야한다.

### await

await 뒤에 오는 코드들은 Future가 끝날 때까지 기다렸다가 실행된다. (동기처럼 실행)

반드시 결과 데이터를 전달 받아서 처리해야 할 경우

```dart
void main() async {
	print("로그인 시도");
	await Future.delayed(Duration(seconds:3));
	print("로그인에 성공");
}
```

### then

일단 Future 코드 실행 후, 끝나면 then 뒤에 별도 처리 코드가 실행된다.

then 코드블록 안의 변수는 밖에서 실행 불가.

```dart
void main() async {
 Future.delayed(Duration(seconds:3)).then((res){
		print("로그인에 성공했습니다.");
	});
 print("반가워요");
}
```

## HTTP 요청 보낸 뒤 데이터 갖고오기

---

### await 활용

```dart
var url = '주소';
var data = await dio.get(url);
print(data);
```

### then 활용

```dart
var url = '주소';
dio.get(url).then((data) {
	print(data);
});
print(data); //then 코드블록 안의 변수는 밖에서 실행 불가.
```

## Future 데이터 처리 예시

---

### ID, PW를 주고 로그인을 하는 경우.

ID와 PW를 전달 받으면 실제 ID가 존재하는지, PW가 일치하는지 확인하기 위해 백엔드 측에게 시간이 필요하다.

```dart
Future<bool> login(String id, String pw) async {
	var dio = Dio();
	var res = await dio.post("주소", {"id":id, "pw":pw});
	if(res.success) {
		return true;
	}
	return false;
}
```

### 인스타그램의 피드를 불러오는 경우.

유저의 피드들을 수집하여 보내주기 위해 백엔드 측에게 시간이 필요하다.

```dart
Future<List<Feed>> readFeed() async {
	var dio = Dio();
	var res = await dio.get("주소");
	if(res.success) {
		return res.data;
	}
	return [];
}
```

### 채팅리스트 불러오는 경우.

```dart
Future<List<Message>> readMessage(String roomId) async {
	var dio = Dio();
	var res = await dio.get("주소", {"id": roomId});
	if(res.success) {
		return res.data;
	}
	return [];
}
```

### Map 데이터 불러오는 경우.

```dart
Future<Map<String, dynamic> getData() async {
	var dio = Dio();
	var res = await dio.get("주소");
	if(res.success) {
		return res.data;
	}
	return {};
}
```

## Flutter에서 Future 데이터 처리 예시

---

버튼을 누르면, 네트워크에서 데이터를 가져오고 난 뒤 응답을 화면에 갱신하는 코드.

1. 데이터 담을 변수 선언

   ```dart
   var message = '';
   ```

2. 데이터 보여줄 위젯 생성

   ```dart
   Text(message),
   ```

3. 네트워크에 Future 코드를 작성해서 데이터를 기다렸다가 받아오는 함수 선언

   ```dart
   Future<String> getData() async {
     var dio = Dio();
     var res = await dio.get("주소");
     return res.data["result"];
   }
   ```

4. 이벤트 핸들러 함수 선언

   ```dart
   void handleOnPressed() async {
     message = await getData();
     setState((){});
   }
   ```

5. 버튼 위젯에서 이벤트가 발생되면 이벤트 핸들러 함수 실행시키기

   ```dart
   TextButton(
     onPressed: () {
       handleOnPressed();
     },
     child: Text("클릭하면 데이터를 갖고옵니다"),
   )
   ```
