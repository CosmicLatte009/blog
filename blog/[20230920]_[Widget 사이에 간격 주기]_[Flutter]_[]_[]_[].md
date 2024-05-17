# Row에 놓인 2개의 위젯 간격 벌리기

## Spacer Widget를 중간에 넣기

---

내가 갖고 있는 영역을 꽉 채워버린다.

To wrap the code, you can use three backticks (\`\\\\`\`) before and after the code block. This will format the code with proper indentation and syntax highlighting. Here is the wrapped code:

```dart
Row(
  children: [
    Text(
      '주문할 매장을 선택해주세요',
      style: TextStyle(color: Colors.white),
    ),
    Spacer(),
    Icon(
      Icons.expand_more,
      color: Colors.white,
    )
  ],
),

```

## Expanded Widget로 wrap해주기

---

해당 위젯으로 감싸진 child 위젯이 가진 영역을 꽉 채워버린다.

To wrap the code, you can use three backticks (\`\\`\`) before and after the code block. This will format the code with proper indentation and syntax highlighting. Here is the wrapped code:

```dart
Row(
  children: [
    Expanded(
      child: Text(
        '주문할 매장을 선택해주세요',
        style: TextStyle(color: Colors.white),
      ),
    ),
    Icon(
      Icons.expand_more,
      color: Colors.white,
    )
  ],
),

```

## Row Widget의 mainAxisAlignment 속성

---

```dart
Row(
	mainAxisAlignment: MainAxisAlignment.spaceBetween,
	children: [
			Text('주문할 매장을 선택해주세요'),
			Icon(Icons.expand_more,),
		]
),
```
