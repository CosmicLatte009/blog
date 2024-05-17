# Class란?

객체 지향에 꼭 필요한 문법.

객체 지향이란 현실에 있는 무언가를 프로그래밍으로 구현한다는 뜻.

클래스를 통해 생성된 결과물이 **객체(Object)** 혹은 **인스턴스**(Instance)라고 불린다.

하나의 Class로 여러 결과물을 만들 수 있다.

리스트로 무언가 반복되는게 있다면 그걸 Class화 시켜보자.

## 무엇이 Class인가?

---

### 데이터 타입도 Class

Stirng, int, Widget 등의 Dart의 모든 데이터 타입도 Class로 만들어진 것이다.

즉, 다른 말로 내가 직접 데이터 타입 Class를 만들 수도 있다는 뜻.

### 패키지에서 쓰이는 Class 예시

아래와 같은 코드가 있다면,

dio 변수와 imagePicker 변수가 객체 및 인스턴스가 되는 것이고,

Dio()와 ImagePicker()가 Class인 것이다. (Class 생성자)

```dart
var dio = Dio();
var imagePicker = ImagePicker();
```

여러 개의 인스턴스 만들기.

```dart
var dioInternalApi = Dio(); //내부API만 사용할 dio 객체 만들기
var dioExternalApi = Dio(); //외부API만 사용할 dio 객체 만들기
var dioPrivateApi = Dio(); //편하게 사적으로 쓰는 객체
```

## Class를 구성하는 것들

---

### 멤버변수

Class 객체 내에서 사용할 수 있는 변수

```dart
class Human {
	Stirng name; //멤버변수
	int age;
	double height;
	MBTI mbti;
	Human? girlfriend; //모든 사람이 여자친구가 있는건 아닐테니까 null일 수도 있다는 표시를 해준것
	List<Human?> relations;
}
```

### 멤버함수 (메소드)

객체들이 사용할 수 있는 능력들

```dart
class Human {
	eat(String foodName) {
		print("와구와구 $foodName 먹어야지");
		weight += 0.3;
	}
	workout(int hours) {
		print("운동해야지 $hours동안");
		weight += hours*0.5;
	}
	getMoney(int amount) {
		cash += amount;
	}
	spendMoney(int amount) {
		cash -= amount;
	}
}
```

### 클래스 생성자 (Constructor)

객체를 생성할 수 있는 생성함수

`클래스명()`

객체를 생성해주는 핵심 함수.

생성자가 없으면 객체를 생성해서 변수에 넣어주지 못한다.

`var dio = Dio()`의 Dio()가 생성자 함수에 해당한다.

- **방식1. 이름 없는 생성자 함수**

  ```dart
  Class User {
  //멤버 변수
  	final name;

  //this에는 생성할 때 만드는 변수가 들어간다 user1, user2
  	User(this.name);
  }

  void main() {
  	var user1 = User('이테디');
  	var user2 = User('홍길동');

  	print(user1.name);
  	print(user2.name);
  }
  ```

- **방식2. 이름 있는 생성자 함수**

  ```dart
  Class User {
  //멤버 변수
  	Stirng name;

  //이름 있는 생성자 함수
  	User.withName(String inputName): name = inputName;
  	User.withAnonymous() : name = 'Anony'; //익명으로 만들기
  }

  void main() {
  	var user1 = User.withName('이테디');
  	var user2 = User.withAnonymous();

  	print(user1.name);
  	print(user2.name);
  }
  ```

- **방식3.** **속성 명확히 나타내기 위한 선택 매개변수 지정**

  속성을 선택해서 직접 값을 넣어준다.

  `required` 키워드: 무조건 값이 들어와야한다는 의미

  `?` 키워드로 null safety 처리를 해주지 않은 멤버 변수들이 매개변수로 들어갈 떄는 required 키워드가 필수다.

  ```dart
  Class User {
  //멤버 변수
  	Stirng name;
  	Stirng phone;

  //이름 있는 생성자 함수
  	User.withName({
  		required String name,
  		requried String? phone
  }): name = name,
  		phone = phone;
  }

  void main() {
  	User.withName(name: '이테디', phone: '010-1000-2000');
  	User.withnName(name: '홍길동');
  }
  ```

- **방식4.** **속성을 매개변수 밖으로 빼기**
  인스턴스를 생성할때 속성명을 써주지 않아도 된다.
  매개변수 밖으로 빠진 속성은 기본적으로 필수가 된다.
  방식3과 섞어쓸 수 있다.

  ```dart
  Class User {
  //멤버 변수
  	Stirng name;
  	Stirng phone;

  //이름 있는 생성자 함수
  	User.withName(
  		String name, {
  		String? phone,
  }): name = name,
  		phone = phone;
  }

  void main() {
  	User.withName('이테디', phone: '010-1000-2000');
  	User.withnName('홍길동');
  }
  ```

# Class vs Map

둘다 List를 다룰 수 있는데 차이가 뭐지…

### Class 장점

- IDE가 자동완성 기능을 보여준다
- 재사용성이 높아서 한번 만들어놓으면 다른 앱에서도 사용가능하다.

```dart
Class User {
	String userId;
	String nicknmae;
	DateTime created;
	DateTime updated;
	DateTime visited;
	List<User> followers;
	List<User> following;
	List<User> blocked;
}
```

### Map은…

- IDE에서 자동완성 기능을 안해준다 (오타나면 못 찾는다)
- 개발자가 구조 파악이 어려워진다.

```dart
List<Map<String, String>>words = [
	{
		"words" "apple",
		"meaing" : "사과",
		"example" : "I want to eat an apple",
	},
	{
		"words" "paper",
		"meaing" : "종이",
		"example" : "Could you give me a paper",
	},
];
```
