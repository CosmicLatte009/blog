# Controller의 역할

화면을 보여주는 return 위젯들이 따로 있고

class(모델)도 따로 관리하고

화면을 동작하게 하는 행동을 컨트롤러로 따로 관리하면 좋다.

## LoginController 예시

---

LoginPager가 있으면 LoginController를 만들어준다.

```dart
class LoginController extends GetxController {

	final idController = TextEditingController();
	final pwController = TextEditingController();

	login() {
		var res = await Api().login(idController.text, pwController.text)
		return res;
	}
}
```

```dart
class LoginPage extends StatelessWidget {

	var controller = Get.put(LoginController());

	return Column(
		children: [
			TextFied(controller: controller.idController),
			TextFied(controller: controller.pwController),
			TextButton(
				onPressed:
				child: Text('로그인하기')
		],
	),
}
```

## SignupController 예시

---

- 회원가입 절차가 여러 페이지로 나눠졌을 때 다음 페이지, 이전페이지로 이동할 수 있게 하기
- 회원가입 유효성 검사 후 회원가입 시키기
  - 비밀번호란과 비밀번호 확인란의 입력값이 같은지 체크
  - 아이디 입력란이 비워져있지 않은지 체크

```dart
class SignupController extends GetxController{
	RxInt curPage = 0.obs; //회원가입 절차가 여러 페이지로 나눠졌을 때 쓰일 oberservable한 변수

	final idController = TextEditingController();
	final pwController = TextEditingController();
	final pw2Controller = TextEditingController(); //패스워드확인창

	nextPage() => curPage(curPage.value+1);
	prevPage() => curPage(curPage.value-1);

	signup() {
		if(pwController.text != pw2Controller.text || idController != '') {
				return null
		}
		return 회원가입 코드...
	}
}
```

## PostController 예시

---

- 게시물 List 형태로 받아오기

```dart
class PostController extends GetXController {
	RxList<Post> posts = [];

  @override
	onInt() {
		super.onInt();
		readPosts();
	}

	readPosts() async {
		posts(await Api.readPosts());
	}
}
```

## PostDetailController 예시

---

- 현재 이 게시물이 로그인된 유저의 게시물인지 판별해주기
  이는 getter 키워드에서 UserController의 user.id와 일치하는지 확인해주는 작업을 해주면 가능하다.
- 좋아요 누르기
- 공유하기 기능
- 신고하기 버튼 눌렀을 때 동작

```dart
class PostDetailController extends GetXController {
	PostDetailController({required this.post});
	Post post;

	get bool isMyPost => post.author.id == Get.find<UserController>().user.id

	like() {
			var res = await APi().upLike(post.id);
	}

	share() {
		..share 코드..
	}

	report() {
		..report 코드..
	}
}
```
