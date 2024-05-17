# Dart 이벤트

개발자에게 핸들링할 수 있게 기회를 주는 것.

이벤트와 핸들러는 항상 한 세트로 bind해줘야한다.

- **Event**
  - 동작 발생
- **Event Handler**
  - 어떻게 처리할 것인지에 대해 함수를 통해 미리 정의해둔것

## 이벤트 종류

---

| 입력      | onChanged, onInserted |
| --------- | --------------------- |
| 클릭      | onPressed, onTap      |
| 두번 클릭 | onDoubleTap           |
| 동작 실패 | onFailed, onError     |

> 🪄 **onDoubledClick은 언제 쓰이는거지?**
>
> 인스타 좋아요를 처음 누르는거라면 [좋아요],
> 이미 눌렀던 적이 있다면 취소 기능이 실행되는 이벤트.

## TextField Widget

---

- 사용자에게 입력을 받을 수 있다

```dart
TextField(
	cursorColor: Colors.green,
	decoration: InputDecoration(
		label: Text("이메일 입력"),
		labelStyle: TextStyle(color: Colors.green),
		hintText: 'exaplme@email.com',
		fillColor: Colors.black12,
		filled: true,
	),
)
```

#### TextField에 입력되는 value를 받는 방법 2가지

1. 입력될 때마다 변수에 저장하기
2. Controller를 붙여서 사용자가 원하는 시점에 입력값이 저장되도록 하기

#### TextField에 이벤트 핸들러 bind해주기

---

##### 1. onChanged 속성에 바로 함수명 없이 bind

```dart
TextField(
	onChanged: (value)
		print(value);
	}
)
```

##### 2. 함수 따로 선언한 후, onChanged 속성에 함수명 bind

함수 선언은 Widget 함수 선언블록 바깥에 해준다.

```dart
void _handleOnChanged(String value) {
	print(vlaue);
}

...생략...

TextField(
	onChanged:_handleOnChanged,
)
```

# Button Widget 대표 4가지

onPressed 속성에 이벤트 핸들러 함수를 연결하여 버튼이 눌려질 때 함수를 실행시킬 수 있다.

#### TextButton Widget

---

텍스트 자체를 버튼으로 만들 때 사용

```dart
TextButton(
	onPressed: () {},
	child: Text('안뇽 난 text button'),
)
```

#### IconButton Widget

---

아이콘 자체를 버튼으로 만들 때 사용

Icon 위젯과 다르게 Padding (48x48)이 기본 적용되어 있다.

```dart
IconButton(
	onPressed: () {},
	icon: Icon(Icons.abc_sharp),
)
```

#### ElevatedButton Widget

---

- 확실히 강조하고 싶은 버튼
- 섀도우가 조금 들어가있다.

```dart
ElevatedButton(
	onPressed: () {},
	child: Text('난 강조 버튼'),
)
```

#### OutlinedButton Widget

---

- 테두리가 있는 버튼
- 섀도우가 조금 들어가있다.

```dart
OutlinedButton(
	onPressed: () {},
	child: Text('난 테두리 있는 버튼'),
),
```

# 이벤트 제공 Widget 2가지

아래 위젯들의 child로 들어간 위젯은 이벤트를 가질 수 있다.

#### Inkwell Widget

---

- 잉크처럼 애니메이션이 퍼지는 효과를 제공하는 위젯
- onTap 속성을 넣어야만 잉크 애니메이션이 들어간다.

```dart
Inkwell Widget(
	onTap: () {},
	child: Text('저도..이벤트를 가질 수 있나용?'),
)
```

#### GestureDetector Widget

---

- InkWell 위젯보다 더욱 많은 제스쳐 감지 가능한 위젯

```dart
GestureDetector Widget(
	onTap: () {},
	child: Text('저도..이벤트를 가질 수 있나용?'),
)
```
