# 함수

- 어떠한 행동을 하고 결과를 나한테 남겨주는 것
- 코드블록에 이름 붙여주고 언제든 갖다 쓸 수 있다. (혹은 이름X)

```dart
void main() {
	print(getMyAge());
	print(getMyNickname());
	print(getMyFollowers());

	var isFollowed = tryFollow();
	print(isFollowed);
}
```

# 함수의 선언과 호출

함수는 선언 후 반드시 호출을 해야 사용할 수 있다.

1. 선언(정의): 함수를 만드는 것
2. 호출(실행): 함수를 실행하는 것

## 함수 선언

---

반환값(리턴값) 타입을 반드시 지정해줘야한다.

void 타입 외의 타입 함수들은 return이 반드시 필수다.

`반환값타입 함수명() {실행할 코드;}`

### void : 반환 없음!

```dart
void printWelcomeMsg() {
	print("새로운 유저가 입장했습니다!");
	print("모두 환하게 반겨주세요!");
}
```

- 그냥 실행만 하고 결과를 주지 않는 함수 선언.
- return 불필요.
- void 함수는 void 타입 작성을 생략할 수 있다.
- ex) 로그인시 인사하는 함수 → 사용자가 돌려받을 반환값이 불필요

### int

```dart
int getMyAge() {
	return 34;
}
```

- int형 데이터를 반환한다.
- ex) 내 나이 정보 주는 함수 → int 타입 반환 필요

### String

```dart
String getMyNickname() {
	var user = //...서버통신해서 유저정보 가져오기..//;
	return user.name;
}
```

- String형 데이터를 반환한다.
- ex) 내 닉네임 정보 받는 함수 → String 타입 반환 필요

### List

```dart
List<String> getMyFollowers() {
	var followers = //서버통신해서 팔로워 정보 가져오기..//;
	return followers;
}
```

- List형 데이터`[]`를 반환한다.
- ex) 내 팔로워들 정보 받는 함수 → List<String> 타입 반환 필요

### bool

```dart
bool tryFollow() {
	var res = //...서버에서 팔로우 걸어보고 결과 가져오기..//;
	return res;
}
```

- bool형 데이터를 반환한다.
- ex) 팔로우 거는 것이 성공했는지 실패했는지 결과를 알려주는 함수 → bool 타입 반환 필요

## 함수 호출(실행)

---

void형 함수를 제외한 retun값이 있는 함수들은 호출과 동시에 결과값을 변수에 저장할 수 있다.

```dart
printWelcomeMsg();

var myAge = getMyAge();
var myNickname = getMyNickname();
var myFollowers = getMyFollowers();
var isFollowed = tryFollow();
```

# 함수의 기본 특성

#### 1. 한 함수 당 특수한 임무/목표를 갖도록 정의한다.

#### 2. 재사용성이 좋다.

#### 3. 독립적인 메모리 공간을 사용한다.

- 예를 들어, 함수 내의 변수는 함수 코드블록 밖에서 사용할 수 없다.

  ```dart
  List<String> getMyFollowers() {
  	var followers = //서버통신해서 팔로워 정보 가져오기..//;
  	return followers;
  }

  print(followers); //Error: followers라는 변수 없는뎅?
  ```

#### 4. 함수에 데이터 전달이 가능하다.

- 함수에 데이터(함수인자값) 전달 방법 → 호출할 때
  ```dart
  void main() {
  	printWelcomeMsg("테디", "주노") // 테디, 주노 새로운 유저가 입장했습니다!
  }
  ```
- 데이터를 함수에 받아오는 방법 → 선언할 때
  받오는 데이터 앞에도 꼭 타입을 작성해준다.
  ```dart
  void printWelcomeMsg(String myName, String friendName) {
  	print("새로운 $myName, $friendName 유저가 입장했습니다!");
  }
  ```
