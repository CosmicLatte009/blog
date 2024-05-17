# 상태를 관리하는 예시

- 앱 실행시간 체크
- 사용자 입력값 저장
- 회원가입 스텝 위치 저장
- 데이터 재사용하기
- 다른페이지 데이터 불러오기
- 검색기록
- 선택값 저장
- 로그인한 유저 정보

# GetX 패키지

[https://pub.dev/packages/get](https://pub.dev/packages/get)

쉬운 상태관리 패키지.

장점은 코드를 매우 짧게 작성할 수 있는 것.

단점은 업데이트 속도가 느리고 깊게 사용할 수록 잔버그가 있는 것.

### GetMaterialApp()

MaterialApp 대신 GetX 패키지를 사용할 때는 GetMaterialApp() 를 최상단 위젯으로 써준다.

### Get.width, Get.height

디바이스의 가로 사이즈 및 세로 사이즈를 알 수 있다.

반응형도 적용 가능.

Mediaquery.of(context).size.width를 대체할 수 있다.

### Get.snackbar(’내용표시’, ‘상세내용’)

상단 스낵바를 손쉽게 띄워줄 수 있다.

### Get.bottomsheet()

## GetX로 상태관리

---

데이터저장하는곳을 따로 만들어 올려놓고 필요할 때마다 불러와서 쓰자!

순서가 중요하다. put을 먼저 해두지 않으면 find도 못한다.

GetxController → Get.put → Get.find

(저장소) (올려놓기) (불러오기)

### GetxController

상태를 전역으로 관리할 수 있다.

controller/무슨*controller*.dart 로 파일 생성해서 만들어준다.

```dart
class AppGlobalDataController extends GetxController {
	String name,
	int age,
	List<Memo> memos,

	AppGlobalDataController({
		required this.name, required this.age, required this.memos
	})
}
```

### Get.put(컨트롤러명())

정의된 컨트롤러를 생성해서 전역으로 사용될 수 있도록 한다.

컨트롤러명()은 클래스 생성자이므로 초기 값을 넣어주면서 시작할 수 있다.

- **tag**
  tag를 만들어주는건 선택이지만 put에서 tag를 만들어주는 순간 find할 때도 tag를 같이 입력해줘야한다.

```dart
var controller = Get.put(AppGlobalDataController(
	age: 99,
	name: 'Teddy',
	memos: [],
),
tag: 'My Secret Controller';
);
```

### Get.find<컨트롤러명>()

한번 put된 컨트롤러를 찾아서 사용할 수 있게 한다.

어떤 컨트롤러를 가져오는 것인지 명시해줘야한다.

```dart
var controller = Get.find<AppGlobalDataController>(tag: 'My Secret Controller');

Text(controller.name),
```

## Rx와 Obx

---

GetX 쓰면 Stateful Widget 안 써도 된대!

GetX가 데이터 변경 감지하여 자동으로 화면 그려주걸랑.

이것을 가능하게 해주는 것이 **Rx**와 **Obx**다.

### Observable, 즉 관측 가능한 멤버변수 선언 방법 3가지

1.  값에 `.obs` 붙이기

    ```dart
    var 변수 = 1.obs;
    ```

2.  `Rx데이터타입(값)` 자체를 변수에 할당하기

    ```dart

    var 변수 = RxInt(1);

    ```

3.  `Rx` 와 `.obs` 둘다 활용 (권장)

    **Rx**를 데이터 타입 앞에 붙여주면 해당 멤버변수가 상태 감지가 가능한 변수로 바뀐다.

    만일 값이 null일 수도 있다면, **Rxn**을 붙인다.

    ```dart
    RxInt 변수 = 1.obs;
    RxnInt 변수 = 1.obs;

    //List의 경우
    RxList<String>memos = RxList<String>();

    RxList<String> memos = <String>[].obs;

    //Rx를 붙인 여러 데이터타입 예시
    RxInt
    RxString
    RxMap
    RxBool
    Rx<클래스명>
    ```

### Obervable한 값 가져오기

Rx로 감싼 데이터는 .value를 통해서 데이터 값을 획득할 수 있으므로 데이터 값을 가져올 때
controller.멤버변수까지만 작성하는 것이 아니라 **controller.멤버변수.value** 라고 해야한다.

```dart
controller.멤버변수.value
```

<aside>
🪄 그런데! List 데이터 타입은 value를 사용하지 않아서 List 데이터타입의 멤버변수 값을 가져올 때는 value를 사용하지 않아도 된다.

</aside>

### Obeservable한 값의 상태변경 감지할 수 있게 Obx 위젯 사용하기

Obx 위젯은 Observable 데이터들이 변하면 자동으로 setState가 되어 화면에 반영하여 보여준다.

주의할 점은, child를 쓰는 대신 상태 변경 감지해야하는 부분 return해주면 된다.

```dart
Obx(() => Text('${controller.변수.value}')),
```

### Observable한 값 변경하기

value를 통해서 데이터 값을 획득할 수 있으니까 그냥 새로운 값을 할당해주면 원하는대로 동작하지 않는다.

1. `멤버변수.value` 에 새로운 값 할당하거나

   ```dart
   RxInt 멤버변수 = 초기값.obs;

   controller.멤버변수.value = 새로운 값;
   ```

2. `.obs` 를 새로운 값 뒤에 붙여주거나

   ```dart
   RxInt 멤버변수 = 초기값.obs;

   //방법1
   controller.멤버변수 = 새로운 값.obs;
   ```

3. `멤버변수(새로운 값)` 의 형태를 쓴다.

   ```dart
   RxInt 멤버변수 = 초기값.obs;

   //방법2
   controller.멤버변수(새로운 값);
   controller.멤버변수(controller.멤버변수.value + 1);
   ```

<aside>
🪄 Rxn이 붙은 경우는 1번 방법, `controller.멤버변수.value = 새로운 값`을 사용해야한다.

</aside>

## Workers

---

관측 가능한 멤버변수 선언을 한 경우, 데이터 변경을 감지하는 설치형 워커를 사용할 수 있다.

### onInit() 함수

Controller가 생성되자마자 실행할 수 있는 함수.

Workers 들을 해당 함수에 넣어줄 수 있다.

### ever

데이터가 바뀔 때마다 실행

- 유저가 로그인하여 데이터가 바뀌면 자동으로 페이지 이동을 한다.

```dart
Rxn<User> userInfo = Rxn<User>();

@override
  void onInit() {
    super.onInit();
    ever(userInfo, (value) {
			if (value != null) {
				Get.to(() => 메인페이지());
				return;
			}
			Get.to(()=>로그인페이지()); //로그인 안됐으면 로그인페이지로 이동
		};
}
```

### once

데이터가 한번 바뀌면 최초로 딱 한번만 실행

```dart

```

### debounce

### interval
