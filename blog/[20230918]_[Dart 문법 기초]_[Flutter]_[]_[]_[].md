# Dart 문법 기초

[https://dartpad.dev/](https://dartpad.dev/)?

### void main은 항상 맨 상단 첫번째

첫번쨰 void 함수명은 항상 main으로 짓기로 약속한것.

```dart
void main() {
  print("hello world");
  print("hello world");
  print("hello world");
}
```

```dart
void main() {
  print("hello world");
  print("안녕하세요");
  print("반갑습니다.");
}
```

### 세미콜론;이 없어서 나는 에러

```dart
void main() {
  print("1번째줄");
  print("2번째줄")
  print("3번째줄")
	print("4번째줄");
	print("4번째줄");
}
```

### 따옴표””가 없어서 나는 에러

```dart
void main() {
  print(1번째줄);
  print(2번째줄);
  print(3번째줄);
	print(4번째줄);
	print(4번째줄);
}
```

### \n 개행을 통해 한번에 여러 줄 출력

```dart
void main() {
  print("1번째줄\n2번째줄");
  print("3번째줄");
  print("4번째줄");
  print("4번째줄");
}
```

```dart
void main() {
  print("1번째줄\n2번째줄\n3번째줄\n4번째줄");
}
```

### print(연산결과)

수(정수,실수) 표현 시에는 따옴표 불필요

```dart
void main() {
	print(3);
}
```

```dart
void main() {
	print(10-99);
}
```

```dart
void main() {
	print(5103294 + 492934);
}
```

### 연산 미션

```dart
void main() {
	print(3923 + 592);
}

// 4515
```

```dart
void main() {
	print(59*32 + 5);
}

// 1893
```

```dart
void main() {
	print(100-5923);
}

// -5823
```

```dart
void main() {
	print((10+10+10)*50);
}

// 1500
```

```dart
void main() {
	print((10+10+10)\*(10-50*50)/2);
}

// Expected to find ')'.
```
