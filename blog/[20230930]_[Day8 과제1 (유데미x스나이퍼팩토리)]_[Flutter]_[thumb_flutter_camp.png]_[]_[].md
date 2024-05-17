# 🌞유데미 X 스나이퍼팩토리 Day8

8일째에는 다트에서 HTTP 요청을 보내는 방식을 공부했다. 강의만 들었을 때는 비동기 통신 수월할 줄 알았는데…전혀 쉽지 않았다 🥲 분명 어려운걸 쉽게 해주는게 패키지라고 했는데, 패키지 하나 알아갈 때마다 벽에 부딪히고 있다. Flutter를 본격적으로 사용한다는건 패키지에 익숙해지는 일인가부다…

팀프로젝트로 mbti 테스트를 만들게 되었는데, 이런 류의 기획은 또 처음 해본다. 일단 피그마에서 디자인을 뚝딱뚝딱 해봤다. 맞게 하는건지 확신 없는 채로 디자인도 하고 과제도 하고 있는 연휴다. 시간이 있는 만큼 예습을 할 수 있겠거니 했는데 택도 없더라. 배운 것들 소화부터 잘하자 😵‍💫

# ✍️Day8 과제1

# ✅과제 요구사항

다음 화면을 구현해봅니다.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/a05a771d-586e-4540-ae48-c4e6ae59136d)

**<조건>**

1. 다음의 URL에 데이터를 요청하여 문제를 해결합니다.
   - [https://sniperfactory.com/sfac/http_day16_dogs](https://sfacassignment-default-rtdb.firebaseio.com/.json)
2. 디바이스가 인터넷에 연결돼있는지 확인하는 패키지를 사용합니다.
   - **패키지명 : connectivity_plus**
   - FAB을 누르면 인터넷이 연결되어있는지 확인합니다.
   - 인터넷 연결을 확인중일 때 “인터넷 확인 중 입니다”와 로딩 위젯을 보여줍니다.
     이 때, 로딩 위젯은 어떠한 것이든 상관없습니다.
3. 화면을 아래로 당기면 데이터를 새로 요청할 수 있도록 패키지를 사용합니다.
   - **패키지명 : pull_to_refresh**
4. 데이터를 가져올 때 사용자에게 데이터가 로딩중이라는 것을 알려줄 수 있도록 패키지를 활용합니다.
   - **패키지명 : Shimmer**
5. 위 기능을 우선적으로 구현하며, 최대한 자연스러운 UX를 구현할 수 있도록 합니다.
   그 외 과제를 위한 기능 및 디자인은 자유입니다.

# 📚과제하며 새로 배운 내용

## initState()

---

Flutter 애플리케이션이 켜지자마자 실행되는 코드를 위한 함수.

**initState()** 메서드는 위젯의 초기화와 관련된 특별한 메서드 이름이며,
다른 이름을 사용하는 것은 권장되지 않는다.

### super.initState()

Flutter는 위젯의 초기화 단계에서 **initState()** 메서드를 호출한다.

**`super`** 키워드는 현재 클래스가 상속한 부모 클래스를 나타낸다.

**`super.initState()`**와 같이 사용되면 현재 클래스가 상속한 부모 클래스인 **State** 클래스의 **initState** 메서드를 호출하게 된다.

### @override

**initState** 메서드 위에 **`@override`** 어노테이션을 작성하지 않으면, Dart 컴파일러에서 경고가 발생한다.

오버라이드(Override)는 객체지향 프로그래밍에서 하위 클래스가 상위 클래스에서 이미 정의된 메서드를 다시 정의하거나 재구현하는 것을 의미한다.

해당 메서드가 부모 클래스에서 상속된 메서드를 정확하게 오버라이드하고 있음을 확인하기 위한 것이므로 적절하게 **`@override`**를 사용해줘야 한다.

```dart
@override
void initState() {
    super.initState(); //반드시 먼저 호출되어야한다.
    //...초기화 작업에 실행할 내 코드 작성...//
  }
```

## 애플리케이션 시작할 때 비동기 작업을 수행하는 방법 ⭐

---

Flutter에서는 **initState** 함수 자체가 비동기 메서드가 아니기 때문에 await 사용이 불가능하다.

비동기 함수를 분리해주고 initState() 에서 실행해주거나 Future.delayed 등을 사용할 수 있다.

### **방법1: 비동기 함수 분리 후 실행**

비동기 함수들을 initState() 안에서 실행만 해주었다. 각 함수가 별도로 비동기적으로 실행된다.
함수 호출 순서를 그대로 따른다.

```dart
class _MyAppState extends State<MyApp> {

	@override
  void initState() {
    super.initState();
    checkConnection(); //분리된 비동기 함수1
		getData(); //분리된 비동기 함수2
  }

	Future<void> checkConnection() async {
	 //..await 등의 비동기 코드...//
	}

	Future<void> getData() async {
	//..비동기 코드...//
  }

	@override
	Widget build(BuildContext context) {
		return 위젯();
	}
}
```

### **방법2: Future.delayed 사용**

함수 호출 간의 시간차를 두어 조정한다. 함수 호출 순서와 시간차가 중요한 역할을 하는 경우 사용된다.

첫번째 await 뒤의 코드가 실행된 이후 지정된 시간만큼 대기한 후 두번째 await 뒤의 코드가 실행된다.

```dart
class _MyAppState extends State<MyApp> {

	@override
  void initState() {
    super.initState();
		Future.delayed(Duration(milliseconds: 1500), () async {
      await 네트워크 확인하는 코드;
      await 데이터 가져오는 코드;
    });
  }

	@override
	Widget build(BuildContext context) {
		return 위젯();
	}
}
```

## connectivity_plus 패키기

---

Flutter 앱에서 네트워크 연결 상태를 감지하기 위한 패키지

https://pub.dev/packages/connectivity_plus

```dart
Connectivity connectivity = Connectivity();

Future<void> checkConnection() async {
    var connectivityResult = await connectivity.checkConnectivity();

		 if (connectivityResult == ConnectivityResult.mobile) {
		  print('모바일 데이터 연결');
		} else if (connectivityResult == ConnectivityResult.wifi) {
		  print('Wi-Fi 연결');
		} else if (connectivityResult == ConnectivityResult.none) {
		  print('네트워크 연결 없음');
		}
  }
```

## shimmer 패키기

---

로딩 중 또는 데이터가 로드되는 중임을 사용자에게 시각적으로 알리기 위한 애니메이션 효과를 제공하는 패키지

https://pub.dev/packages/shimmer

```dart
Shimmer.fromColors(
  baseColor: Colors.grey[300],   // Shimmer 애니메이션의 기본 색상
  highlightColor: Colors.grey,   // Shimmer 애니메이션의 하이라이트 색상
  child: ...                     // Shimmer 애니메이션을 감싸는 자식 위젯
)
```

# 🌟과제 Point

## state를 여러 함수 안에서 변경하고 관리하기

---

### 1. 변수 초기 선언

```dart
bool isLoading = false;
bool isConnected = false;
var resultData;
```

- **isConnected 변수 선언**
  네트워크 연결이 완료되었는지 확인.
  초기에는 네트워크가 아직 연결이 안됐다고 가정하여 false로 설정했다.
- **isLoading 변수 선언**
  데이터를 불러오는게 완료되었는지 확인.
  네트워크가 연결이 되어있다면 데이터가 적용된 화면이 바로 보여지도록 false로 설정했다.

### 2. 네트워크 연결 확인하는 checkConnection() 함수 선언 ⭐

connectivity_plus 패키지를 활용하여 네트워크가 연결되었는지 확인한다.

네트워크 연결이 되었으면 isConnected를 true로 상태 변경한다.

원래 네트워크가 연결되지 않은 경우는

`connectivityResult == ConnectivityResult.none` 으로 확인해야 하지만

이번 과제에서는 일부러 인터넷 연결 중이라는 화면을 보여주기 위해 isConnected를 false로 설정하고 1초 딜레이를 걸었다.

그래서 해당 함수가 실행되면 인터넷 연결 중이라는 화면이 무조건 1초동안 뜨고

1초 후에는 인터넷 연결이 되어있다면 isConnected를 true로 설정된다.

```dart
Connectivity connectivity = Connectivity();

Future<void> checkConnection() async {
    var connectivityResult = await connectivity.checkConnectivity();

    isConnected = false;
    setState(() {});

    await Future.delayed(Duration(seconds: 1));

    if (connectivityResult == ConnectivityResult.mobile ||
        connectivityResult == ConnectivityResult.wifi) {
      isConnected = true;
      setState(() {});
    }
  }
```

### 3. 데이터를 갖고 오는 getData() 함수 선언

resultData 변수에 들어오는 데이터를 저장하는 비동기 함수.

```dart
var resultData;

Future<void> getData() async {
    var dio = Dio();
    var res = await dio.get("https://sniperfactory.com/sfac/http_day16_dogs");

    resultData = res.data["body"];
  }
```

### 4. state에 따라 화면에 보여지는 위젯 다르게 하기

1. **isConnected==false**로 네트워크 연결이 되지 않았다면 인터넷 확인 중이라는 화면을 띄운다.
2. 네트워크 체크 후 **isLoading==false**면 데이터가 적용되어서 그려질 화면을,
   **isLoading==true**로 데이터가 아직 불러와지는 중이라면 shimmer 로딩을 띄운다.

삼항 연산자를 두번 사용하여 해당 조건들을 연결한다.

```dart
isConnected == false? 인터넷 확인 중이라는 화면 :
	isLoading == false? 데이터 적용된 화면 : shimmer 로딩 화면
```

### 5. 애플리케이션 시작과 동시에 네트워크 연결 확인 및 데이터 불러오기

애플리케이션 시작과 동시에 네트워크가 연결되었는지 확인 후 isConnected를 true로 변경하고 데이터를 불러온다.

```dart
@override
  void initState() {
    super.initState();
    checkConnection();
    getData();
  }
```

### 6. FBA 버튼 눌러서 네트워크 연결 상태 확인

FBA의 onPressed에 checkConnection 비동기 함수를 연결하여 실행해준다.

```dart
floatingActionButton: FloatingActionButton(
        onPressed: () async {
          await checkConnection();
        },
        child: Icon(Icons.wifi_find),
      ),
```

> 🪄 **비동기 함수를 onPressed 콜백 함수에서 사용할 때 await이 왜 필요한지?**
> checkConnection 함수자체가 비동기 함수이지만 연결 상태 확인과 그에 따른 상태 업데이트를 동기적으로 처리해야 하기 때문에 onPressed에도 **await**을 사용하여 checkConnection 함수가 완료될 때까지 기다려야 한다.

### 7. SmartRefresher로 데이터 불러오기 ⭐

화면을 아래로 당기면 데이터를 불러오고 isLoading의 상태를 변경한다.

이번 과제에서는 일부러 데이터를 불러오고 있다는 로딩 화면을 보여주기 위해 isLoading을 true로 설정하고 1초 딜레이를 걸었다.

그래서 해당 함수가 실행되면 shimmer 로딩 화면이 무조건 1초동안 뜨고

1초 후에는 데이터가 불러와지고 isLoading이 false로 설정된다.

```dart
RefreshController refreshController = RefreshController();

SmartRefresher(
        controller: refreshController,
        enablePullDown: true,
        onRefresh: () async {
          isLoading = true;
          setState(() {});

          await Future.delayed(Duration(seconds: 1));

				  await getData();
          isLoading = false;
          setState(() {});
          refreshController.refreshCompleted();
        },
        child: isConnected == false? 인터넷 확인 중이라는 화면 :
								isLoading == false? 데이터 적용된 화면 : 데이터 불러오는 shimmer 로딩 화면
),
```

# 📱과제 결과 화면

## ![image](https://github.com/CosmicLatte009/blog/assets/87015026/04c3c7d4-4df3-42b9-8f9d-f68213d3242a)

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
