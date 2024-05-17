# GetX로 라우팅

## Get.to(()⇒NewPage()))

Navigator.push를 대체하는 페이지 라우팅.

## Get.back()

뒤 페이지로 돌아갈 수 있다.

## Get.offAndToNamed(’/경로’)

새 경로로 이동하고 전페이지로는 못 돌아가게 하고 싶을 때 사용한다.

로그인, 로그아웃 전후에서 많이 쓰인다.

Get.toNamed와 마찬가지로 `Get.offAndToNamed(LoginPage.route)`의 방식으로도 사용할 수 있다.

혹은 AppRotues 클래스를 정의해뒀다면 `Get.offAndToNamed(AppRoutes.login)` 도 가능하다.

## Get.toNamed(’/경로’)

---

앱내에서 사용할 페이지를 미리 등록해놓고, URL 방식으로 활용한다.

이 방식을 사용하려면 GetMaterialApp에 미리 각 페이지들의 경로 이름을 등록해둬야한다.

```dart
GetMaterialApp(
//getPage는 theme과 같은 위계에 작성해준다.
	getPages: [
		GetPage(name: '/login', page: () => LoginPage()),
		GetPage(name: '/main', page: () => MainPage()),
		GetPage(name: 'signup', page: () => SignupPage()),
	],
//..위젯들...//
	TextButton(
		onPressed: () {
			Get.toNamed('/login');
		}
		chid: Text('로그인으로 이동');
)
```

### 페이지별 정적 라우트되어 있는 경우

아래와 같이 페이지별 정적 라우트(static 활용) 가 설정되어 있는 경우는 경로 이름에 해당하는 ‘/login’ 부분을 `LoginPage.route`로 대체 가능하다.

```dart
class LoginPage extends StatelessWidget {

const LoginPage({super.key});
static const String route = '/login'; //페이지 정적 라우트 설정되어있네

@override
Widget build(BuildContext context) {
		return Scaffold();
	}
}
```

```dart
GetMaterialApp(
	getPages: [
		GetPage(name: LoginPage.route, page: () => LoginPage()), //경로
	],
//..위젯들...//
	TextButton(
		onPressed: () {
			Get.toNamed(LoginPage.route);
		}
		chid: Text('로그인으로 이동');
)
```

### AppPages 따로 분리해두기 (권장)

getPages에 들어가는 부분을 class로 따로 분리해두면 훨씬 깔끔한 코딩이 가능하다.

```dart
class AppPages {
	static final pages = [
		GetPage(name: LoginPage.route, page: () => const LoginPage()),
		GetPage(name: MainPage.route, page: () => const MainPage()),
	],
}

//main
GetMaterialApp(
	getPages: AppPages.pages, //훨씬 짧고 깔끔허네
)
```

### AppRoutes 따로 분리해두기 (권장)

페이지별 정적 라우트(static 활용) 가 설정되어 있는 것들도 한 class에 모아두면 편하다.

이렇게 정적 라우트를 분리해뒀을 경우

```dart
//로그인 페이지에서 static const String route = '/login'; 과 같은 정적 라우트가 있어야한다//

class AppRoutes {
	static const login = LoginPage.route;
	static const main = MainPage.route;
}
```

```dart
class AppPages {
	static final pages = [
		GetPage(name: AppRoutes.login, page: () => const LoginPage()),
		GetPage(name: AppRoutes.main, page: () => const MainPage()),
	],
}

//main
GetMaterialApp(
	getPages: AppPages.pages,
	//...//
	TextButton(
		onPressed: () {
			Get.toNamed(AppRoutes.login); //AppRoutes에서 설정한대로 불러올 수 있다
		}
		chid: Text('로그인으로 이동');
)
```
