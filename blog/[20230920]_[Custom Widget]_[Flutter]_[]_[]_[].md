# Custom Widget이란?

사용자가 직접 만들어서 쓰는 위젯

- 내가 표현하고자 하는 디자인 요소 명확히 선언 가능
- 내가 자주 쓰는 위젯 따로 빼서 관리 가능
- 코드 유지보수 및 관리에 용이

## Custom Widget 작성법

---

### 1. Extract Widget

Custom 위젯으로 변할 위젯을 잡고 `Extract Widget` 하면 하단에
커스텀 위젯 코드가 생성되고 현재 코드가 커스텀위젯으로 대체된다.

### 2. 하단에 생성된 커스텀 위젯 코드를 파일로 옮겨준다.

Custom Widget이 될 파일명은 UpperCamelCase로 작성.

### 3. 하드코딩된 데이터들을 데이터타입을 지정한 변수로 치환해준다.

**final 키워드 붙이고 `데이터타입 변수명` 작성**

```dart
커스텀Widget명(
  final String name;
  final String phone;
  final String imgUrl;
)

```

**Add final field formal parameters**
클래스명(ContactTile) 에 Ctrl + . 후 `Add final field formal parameters`선택하면
다음과 같은 코드가 추가된다

```dart
const ContactTile(
    {super.key,
    required this.name,
    required this.phone,
    required this.imgUrl})
```

**커스텀 위젯 코드를 옮긴 후 material.dart import해오기 필수.**

```dart

*import* 'package:flutter/material.dart';

```

### 4. 속성들의 값에 들어갈 데이터들을 변수명으로 대체해주기

> 🪄 **int 데이터 타입을 string을 요구하는 속성에서 사용하는 방법**
>
> 1. price.toString() + '원'
> 2. ‘$price원’

### 5. 커스텀 위젯 파일 import해오기

커스텀 위젯 사용하는 파일에서 커스텀 위젯 파일 import해온다.

대체된 커스텀 위젯이 자동으로 import되오지 않는다면
`Ctrl + .` 입력하여 import해오면 된다. 2가지 방법이 툴팁에 뜨는데 보통 아래에 있는 것을 쓴다.

# Custom Widget 파일 예시 - ContactTile.dart

```dart
import 'package:flutter/material.dart';

class ContactTile extends StatelessWidget {
  const ContactTile(
      {super.key,
      required this.name,
      required this.phone,
      required this.imgUrl});

  final String name;
  final String phone;
  final String imgUrl;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(name),
      subtitle: Text(phone),
      leading: CircleAvatar(
        backgroundImage: NetworkImage(imgUrl),
      ),
      trailing: Icon(Icons.call),
    );
  }
}

```
