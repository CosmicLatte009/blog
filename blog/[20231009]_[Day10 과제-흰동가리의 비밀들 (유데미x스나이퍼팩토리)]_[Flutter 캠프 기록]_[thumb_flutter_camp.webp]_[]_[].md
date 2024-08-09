# 🌞유데미 X 스나이퍼팩토리 Day10

10일차에는 앱에 권한을 주는 방법과 갤러리를 통해 이미지를 불러오는 Image picker 패키지를 학습했다. 핸드폰에서만 요구되는 것들을 학습하니 찐 앱개발하는 것 같고 신기했다 😮

하지만 과제는 이 Image picker 패키지와는 무관해서 좀더 연습을 해봐야할 것 같다.

과제 자체는 재밌었다. 이전 과제들과 다르게 다른 디자인으로 화면을 구성할 것이 요구되어서 오히려 내것을 만드는 기분이 들어 즐거웠다. 하지만 이렇게 시간이 오래 걸릴 줄 알았더라면 디자인을 적당히…다르게 했을 것이다…내 업보라서 별 수 없었고…새벽에 같이 과제하시는 분들이 서버에 글 올리는걸 보며 외로움을 달랬다. 🥲

그동안 티스토리 블로그를 만들고 싶어서 낑낑대며 설정을 다 해놓았지만…도저히 에디터가 불편해서 쓸 수가 없었다…노션 글을 옮겨야했기 때문에 얌전히 에디터가 편한 벨로그를 선택하기로 했다. 다수가 선택하는데에는 이유가 있는 것 같다. 나중에는 노션 자체를 블로그화하는 oopy를 사용하고 싶다.

# ✍️Day1 과제10

# ✅과제 요구사항

제공되는 패키지 secrets_cat_sdk를 활용하여 다음의 기대 결과물을 따라 만드세요.

- 비밀듣는고양이 패키지 : https://pub.dev/packages/secret_cat_sdk
- 피그마 파일 : https://www.figma.com/file/0S0wzhrJqzYz4wIUmi1QJf/SniperFactory?type=design&node-id=151-2&mode=design&t=CD7cWLAJMOhtXNT7-0
- 이번 과제는 다음의 결과물과 다른 디자인으로 제작하는데 목표를 두세요.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/6511a426-e620-4e73-89f4-9710fa53cf5b)

**<조건>**

1. neo.ttf 어플리케이션에 적용
2. 각 위젯별 애니메이션은 최소 3개 이상 적용되어야 한다. https://pub.dev/packages/animate_do
3. 매인 캐릭터는 [flaticon](https://www.flaticon.com/)에서 마음에 드는 이미지를 골라 진행하세요.
4. 페이지들의 배경이미지는 [unsplash](https://unsplash.com/)에서 마음에 드는 이미지를 골라서 진행하세요.
5. SecretPage : 비밀을 볼 수 있는 페이지며, 모든 비밀을 데이터로 불러오며 각 비밀은 페이지로 이루어짐.
6. AuthorPage : 모든 작성자(회원)을 볼 수 있는 페이지
7. UploadPage: 비밀을 업로드할 수 있는 페이지

# 📚과제하며 새로 배운 내용

## ttf 폰트 파일 애플리케이션에 적용하기

---

✅조건1: neo.ttf 어플리케이션에 적용

1. assets 폴더에 폴더 파일 넣기

   **assets/fonts/neo.ttf**

2. pubspec.yaml 파일에서 font 설정

   ```dart
   fonts:
       - family: NeoFont
         fonts:
           - asset: assets/fonts/neo.ttf
   ```

3. 사용할 때는 pubspec.yaml의 family에서 설정한 이름을 fontFmaily에 작성해준다.

   ```dart
   TextStyle(
         fontFamily: 'NeoFont',
         fontWeight: FontWeight.bold,
   			fontSize: 14
         color: Colors.black,
       );
   ```

## PreferredSizeWidget

---

AppBar와 같이 높이가 고정된 위젯을 커스텀 위젯으로 사용하는 경우에는 **`preferredSize`** 가 필요하다. Scaffold 위젯이 AppBar의 높이를 설정하는데 **`preferredSize`** 를 사용한다.

### **implements PreferredSizeWidget**

해당 클래스 위젯이 **PreferredSizeWidget** 인터페이스를 구현하도록 선언한다.

CustomizedAppbar가 **`preferredSize`** 속성을 제공해야 함을 의미한다.

### **Size get preferredSize**

반환 유형이 Size인 메서드.

`get` 키워드는 해당 메서드를 호출하는 것이 아니라 속성처럼 사용되도록 한다.

### Size.fromHeight()

Size.fromHeight() 메서드는 해당 클래스 위젯의 기본 높이를 정의한다.

- **kToolbarHeight**
  **`kToolbarHeight`**는 플러터에서 기본 AppBar의 높이를 나타내는 상수다.

```dart
class CustomizedAppbar extends StatelessWidget implements PreferredSizeWidget {
  const CustomizedAppbar({
    super.key,
  });
  Size get preferredSize => Size.fromHeight(kToolbarHeight);

	@override
	  Widget build(BuildContext context) {
		return AppBar();
	}
}
```

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

## isEven 메서드

---

정수가 짝수인지 여부를 판별하여 **true** 또는 **false** 값을 반환하는 메서드.

데이터의 인덱스가 짝수인지를 판별하여 짝수 인덱스와 홀수 인덱스에 각각 다른 스타일을 적용해줄 수도 있다.

```dart
var isEvenIndex = index.isEven;
```

# 🌟과제 Point

## CustomizedAppbar Widget 만들기

---

커스텀 appbar를 사용할 페이지 Scaffold Widget의 appbar 속성에 CustomizedAppbar Widget 달기.

```dart
class _SecretPageState extends State<SecretPage> {
  @override
  Widget build(BuildContext context) {
	    return Scaffold(
	      appBar: CustomizedAppbar(),
	      backgroundColor: Colors.white,
	      body: 본 위젯();
		);
	}
}
```

### CustomizedAppbar Widget

```dart
import 'package:flutter/material.dart';

class CustomizedAppbar extends StatelessWidget implements PreferredSizeWidget {
  const CustomizedAppbar({
    super.key,
  });
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      leading: IconButton(
        icon: Icon(
          Icons.arrow_back,
          color: Color(0xFF2D698A),
        ),
        onPressed: () {
          Navigator.pop(context);
        },
      ),
      title: Text(
        '뒤로 가기',
        style: TextStyle(color: Color(0xFF2D698A)),
      ),
    );
  }
}
```

## CustomizedBackground Widget 만들기

---

커스텀 백그라운드를 사용할 페이지에서 Stack 위젯의 맨 첫번째 자식으로 CustomizedBackground Widget 넣기. 이렇게 하면 CustomizedBackground Widget이 가장 마지막 레이어가 된다.

```dart
class _SecretPageState extends State<SecretPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomizedAppbar(),
      backgroundColor: Colors.white,
      body: Stack(
        fit: StackFit.expand,
        children: [
          CustomizedBackground(),
					본 위젯(),
				],
			),
		);
	}
}
```

### CustomizedBackground Widget

![image](https://github.com/CosmicLatte009/blog/assets/87015026/32b9b063-25df-4158-9c78-8a7c0b1fea66)

- **fit: BoxFit.contain**
  이미지를 화면에 가능한 크게 표시하면서 이미지의 가로세로 비율을 유지한다.
- **alignment: Alignment.bottomCenter**
  이미지를 화면 아래 중앙에 맞추어 표시한다.
  이번 과제에서 사용한 이미지가 바닥에 물이 있는 그림이라 특별히 사용되었다.
- **color: Color.fromRGBO(255, 255, 255, 0.6)**
  이번 과제에서 이미지의 투명도를 낮추기 위해 사용되었다.
- **colorBlendMode: BlendMode.modulate**
  이미지에 배경 색상을 혼합시키는 블렌딩모드.
  이번 과제에서 자연스런 백그라운드 이미지 혼합을 위해 사용되었다.

```dart
import 'package:flutter/material.dart';

class CustomizedBackground extends StatelessWidget {
  const CustomizedBackground({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'assets/images/underwater.jpg',
      fit: BoxFit.contain,
      alignment: Alignment.bottomCenter,
      color: Color.fromRGBO(255, 255, 255, 0.6),
      colorBlendMode: BlendMode.modulate,
    );
  }
}
```

## 데이터 index의 짝수 여부에 따라 위젯 위치 변경하기

---

데이터의 index가 짝수인지 홀수인지를 isEven 메소드로 판별한다.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/1bae37c4-bf96-47a3-8c53-644b8d119361)

### 버블 Container 위치

index가 짝수면 버블 Container를 왼쪽으로 정렬하고,

index가 홀수면 버블Container를 오른쪽으로 정렬한다.

```dart
Align(
    alignment: isEvenIndex ?
	    Alignment.centerLeft : Alignment.centerRight, //버블 위치 동적으로
			  child: Container();
),
```

### 장식 물고기 위치

Stack 위젯의 겹침 방식을 활용하여 물고기 장식을 단다.

Stack 위젯 내에서 Positioned 위젯으로 장식 물고기 위치를 조절한다.

index가 짝수면 물고기의 위치를 오른쪽에서 20만큼 떨어지게,

index가 홀수면 물고기의 위치를 왼쪽에서 20만큼 떨어지게 한다.

Positioned의 위치 속성들이 null을 가지면 해당 속성이 없는 것이나 마찬가지이다.

left, right 속성이 둘다 표시되어있어도 짝수의 여부에 따라 둘 중 하나는 null을 가지므로 문제 없다.

```dart
var right = isEvenIndex ? 20.0 : null;
var left = isEvenIndex ? null : 20.0;

var fishImg = isEvenIndex
     ? 'assets/images/clown-fish-right.png'
     : 'assets/images/clown-fish-left.png';

Stack(
     fit: StackFit.expand,
     children: [
         Positioned(
             bottom: 0,
             left: left, //왼쪽 물고기 위치
             right: right, //오른쪽 물고기 위치
             child: Image.asset(
                 fishImg, //물고기 이미지 동적으로
                 width: 40,
                 height: 40,
             ),
         ),
     ],
 ),
```

### 버블 Container 전체 코드

```dart
var isEvenIndex = index.isEven;

var right = isEvenIndex ? 20.0 : null;
var left = isEvenIndex ? null : 20.0;

var fishImg = isEvenIndex
     ? 'assets/images/clown-fish-right.png'
     : 'assets/images/clown-fish-left.png';

Align(
    alignment: isEvenIndex ?
	    Alignment.centerLeft : Alignment.centerRight, //버블 위치 동적으로
    child: Container(
        width: 200,
        height: 200,
        child: ElasticIn(
            child: Stack(
                children: [
                    Stack(
                        fit: StackFit.expand,
                        children: [
                            Positioned(
                                bottom: 0,
                                left: left, //왼쪽 물고기 위치
                                right: right, //오른쪽 물고기 위치
                                child: Image.asset(
                                    fishImg, //물고기 이미지 동적으로
                                    width: 40,
                                    height: 40,
                                ),
                            ),
                        ],
                    ),
                    Padding(
                        //...글자 코드 생략...//
                    ),
                ],
            ),
        ),
        decoration: BoxDecoration(
            color: AppColor.mainBackColor
            .withOpacity(0.1),
            border: Border.all(
                color: AppColor.mainBackColor,
                width: 1),
            borderRadius: BorderRadius.circular(99)),
    ),
),
```

# 📱과제 결과 화면

## ![image](https://github.com/CosmicLatte009/blog/assets/87015026/eba5bb65-c1e8-4074-a224-ff730f777284)

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
