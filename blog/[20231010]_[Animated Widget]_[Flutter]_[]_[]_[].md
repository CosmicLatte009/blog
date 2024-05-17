## AnimatedOpacity Widget

---

opacity값을 바꿔주면 값 사이에 자동으로 애니메이션 효과 적용하는 위젯.

즉, 투명도가 서서히 바뀌는 애니메이션을 자동으로 만들어준다.

아래 예시는 GestureDetector를 누르면 해당 Text가 투명도가 0일 경우 1로 변하고, 1일 경우 0으로 변한다.

```dart
double currentOpacity = 1.0;

AnimatedOpacity(
	opacity: currentOpacity,
	duataion: Duration(milliseconds: 300),
	child: GestureDetector(
			onTap: () {
				currentOpacity = currentOpacity == 0 ? 1 : 0;
				setState((){});
			},
			child: Text("안녕하세요"),
		),
),
```

## AnimatedContainer Widget

---

캐치되는 속성값을 감지하여 애니메이션 효과 적용하는 위젯.

Container의 속성들이 바뀌면 자동으로 애니메이션이 들어간다. 따로 child로 Container를 주는 것이 아니라 이 위젯 자체가 Container의 속성들을 갖는다.

```dart
double currentWidth = 200;
var currentColor = Colors.red;

AnimatedContainer(
	duataion: Duration(milliseconds: 300),
	width: currentWidth,
	height: 300,
	color: currentColor,
	child: GestureDetector(
			onTap: () {
				currentWidth = currentWidth == 200 ? 400 : 200;
				currentColor =
					currentColor == Colors.red ? Colors.blue : Colors.red;
				setState((){});
			},
		),
),
```
