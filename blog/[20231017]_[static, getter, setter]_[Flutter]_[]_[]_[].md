# static

내가 정의하는 Class 그 자체에 데이터를 넣어줄 때 사용한다.

따라서, 해당 생성자로 여러 객체가 만들어져도 전부 똑같은 값을 가진다.

static 다음에 const, final, var 중 하나를 입력해준다.

## 1. 페이지별 라우트를 넣어주고 관리할 때

---

```dart
class LoginPage extends StatelessWidget {

const LoginPage({super.key});
static const STring route = '/login';

@override
Widget build(BuildContext context) {
		return Scaffold();
	}
}
```

## 2. 정적 데이터를 보관하고 싶을 때

---

class 자체에 정적 데이터 값을 입력해줄 때.

### **페이지 라우트 정적 데이터**

```dart
class AppRoutes {
	static const String login = LoginPage.route;
	static const String main = MainPage.route;
	static const String signup = SignupPage.route;
}
```

### **백엔드 API 정적 데이터**

```dart
class BackendApiRoutes {
	static const String readPosts = '/api/v1/posts';
	static const String readMemos = 'api/vi/memos';
}
```

### 색상, 텍스트 정적 데이터

![image](https://github.com/CosmicLatte009/blog/assets/87015026/e922a9b5-8761-45e0-8cda-6c47f24ddc57)

[https://github.com/sfac-saessak/saessak-flutter/blob/main/lib/util/app_text_style.dart](https://github.com/sfac-saessak/saessak-flutter/blob/main/lib/util/app_text_style.dart)

[https://pub.dev/packages/flutter_screenutil](https://pub.dev/packages/flutter_screenutil)

# getter 키워드

멤버변수를 따로 설정하지 않고도 원하는 데이터를 정의하고 싶을 때 사용한다.

VScode의 자동완성에 도구모양으로 뜨는것이 get으로 정의된 것.

```dart
class Student {
	static const schoolName = 'Teddy`s school';
	String studentId;
	String name;

	Student(this.name, this.studentId);

	String get studentInfo => studentId + name + "GoodStudent";

}

void main() {
	var stu1 = Student('Teddy', '010-010');
	print(stu1.studentInfo);
}
```

### GetxController에서 get으로 Rx변수의 value를 미리 꺼내두기

```dart
class AppGlobalDataController extends GetxController {
	RxString myName = 'Tddy'.obs;

	String get name => myName.value;
	int get nameLength => name.length;
}
```

# setter 키워드

멤버변수에 새로운 값 넣고 싶을 때 간편히 사용할 수 있다.

멤버변수에 직접 접근하지 않고 특별한 멤버변수명으로 값을 할당할 수 있게 하고 싶을 때.

```dart
class Student {
	static const schoolName = 'Teddy`s school';
	String studentId;
	String name;

Student(this.name, this.studentId);

set studentName(String v) {
		if(v.length > 3) {
			return ;
		}
		name = v;
	}
}

void main() {
	var stu1 = Student('Teddy', '010-010');
	stu1.studentName = 'ty';
}

```
