# Object의 기능들

어떠한 데이터 타입을 사용하든 사실은 Object가 부모이다.

Object로부터 받아서 쓸 수 있는 것 toString(), hashcode, noSuchmehod() 등이 있다.

## toString()

---

int 데이터를 String으로 바꾸고 싶을 때 사용하는 메소드.

어떤 클래스로부터 만들어진 인스턴스인지 확인하기 위해서도 쓰인다.

그럼 `Instance of ‘클래스명’` 과 같이 결과 확인 가능.

## hashcode

---

아무리 같은 클래스로 만든 같은 내용을 담고 있는 객체여도 객체들은 서로 다른 것으로 인식된다. 그래서 hashcode가 존재하는 것.

```dart
void main() {
	Word wordA = Word(word: "Apple", meaning: "사과", example: "Give me an apple");
	Word wordB = Word(word: "Apple", meaning: "사과", example: "Give me an apple");
	print(wordA == wordB); //false가 나온다.
}
```

## @override

---

기존의 부모 기능을 재정의할 수 있게 해주는 키워드.

### toString() 재정의

인스턴스의 명확한 데이터 표현 확인하도록 toString() 메소드를 재정의해줄 수 있다.

```dart
@override
String toString() {
	return "Word($word / $meaning / $example)";
}
```

### operator`==`를 재정의.

같은 Class에서 만든 같은 내용의 객체면 같은 것으로 간주하도록 operator를 재정의해줄 수 있다.

- **일반적인 코드**
  ```dart
  @override
  operator == (Object other) {
  	if (other is Human) {
  			return name == other.name;
  	}
  	return false;
  }
  ```
- **축약 코드1**
  ```dart
  @override
  operator == (Object other) {
  	return other is Human && name == other.name;
  }
  ```
- **축약 코드2**
  ```dart
  @override
  operator == (Object other) => other is Human && name == other.name;
  ```
