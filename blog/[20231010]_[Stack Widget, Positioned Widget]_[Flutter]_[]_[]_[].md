## Stack Widget

---

여러 위젯을 겹쳐서 쌓을 때 사용하는 위젯. (z-축 정렬)

첫 번째 자식 위젯이 가장 아래에 위치하고, 추가되는 자식 위젯들이 점차 위로 겹쳐진다.

**Positioned Widget**으로 Stack Widget 내 자식 위젯들은 위치도 자유롭게 조절할 수 있다.

### fit: StackFit.expand

**`StackFit.expand`**은 자식 위젯의 크기를 자동으로 조절하여 **`Stack`** 위젯과 같은 크기가 되게 한다.

```dart
Stack(
    fit: StackFit.expand,
    children: [
      Container(
	      color: Colors.red, //맨 마지막 레이어
	    ),
	    Container(
	      color: Colors.blue, //맨 위 레이어
	    ),
		]
),
```

## Positioned Widget

---

Stack 위젯 내에서 자식 위젯의 크기와 위치를 조절하기 위해 사용되는 위젯.

### top

Stack의 상단을 기준으로 위에서 아래 방향으로 얼마만큼 떨어져 있는지를 나타낸다.

### left

Stack의 왼쪽을 기준으로 왼쪽에서 오른쪽 방향으로 얼마만큼 떨어져 있는지를 나타낸다.

### right

Stack의 오른쪽을 기준으로 오른쪽에서 왼쪽 방향으로 얼마만큼 떨어져 있는지를 나타낸다.

### bottom

Stack의 하단을 기준으로 아래에서 위로 방향으로 얼마만큼 떨어져 있는지를 나타낸다.

```dart
Stack(
        children: <Widget>[
          // 빨간 상자를 왼쪽 상단에 배치
          Positioned(
            top: 20.0,
            left: 20.0,
            child: Container(
              width: 100.0,
              height: 100.0,
              color: Colors.red,
            ),
          ),

          // 파란 상자를 오른쪽 하단에 배치
          Positioned(
            bottom: 20.0,
            right: 20.0,
            child: Container(
              width: 100.0,
              height: 100.0,
              color: Colors.blue,
            ),
          ),
        ],
),
```
