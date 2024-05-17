# if문

```dart
if (boolean) {
	//true일 때 실행할 코드
} else {
	//false일 때 실행할 코드
}
```

## if문으로 TextField 입력값에 따라 다른 결과 출력

---

```dart
var amountController = TextEditing();

...
TextField(
   controller: amountController,
),
TextButton(
	 onPressed() {
      if(int.parse(amountController.text>10)) {
          print('돈 보내기');
      } else {
	        print('돈은 10원 이상부터 보낼 수 있습니다.');
	    }
	 },
)

```

## if문으로 로그인 함수 만들기

---

**<조건>**

- login 성공시 true, 실패시 false
- 비밀번호는 8자 이상
- 정확한 이메일을 입력했는지 검사할 것
- 가입된 이메일인가 검사하고 할 것

else를 쓰는 대신 아래와 같이 if만 쓰는 제어문이 현업에서 잘 쓰인다.

가독성이 좋고 함수의 동작흐름을 명확하게 알 수 있다.

```dart
bool login(String id, String pw) {
  if(pw.length <= 8) return false;
  if(!isEmail(id)) return false; //가입된 이메일 id 확인 후
  if(!exists(id)) return false;

  ...//패스워드 검사..서버와 통신해서 로그인
  return true;
}
```

# Flutter 안에서 if문 쓰는 방법

중괄호 없이 딱 한줄씩에 if문 사용하여 그 아래 코드에 영향을 준다.

## if문 활용하여 보여줄 위젯만 보여주기

---

children: List<Widget> 에서 내가 원하는 위젯만 보여줄 수 있다.

ex) 로그인 되어있는 경우에만 로그아웃 버튼 보여주기

```dart
children: [
	Text('안녕하세요!'),
	if(isLogined)
		TextButton(
				onPressed: () {
						//로그아웃
				}
				child: Text('로그아웃'),
    ),
]
```

# 삼항연산자

조건? true일때 실행할 코드 : false일때 실행할 코드

```dart
isLogined
  ? ListTile(
          title: Text('로그아웃'),
          leading: Icon(Icons.logout),
    )
  : Text('로그인을 해야 볼 수 있습니다.'),
```
