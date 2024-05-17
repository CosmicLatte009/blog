# Flutter란?

Flutter는 사용자 인터페이스를 구축하는 Dart의 프레임워크다.

##### UI FrameWork + Collections of Tools

주요 두 개가 합쳐진 서비스라고 보면 된다.

하나의 코드 베이스를 갖고도 다양한 타깃 플랫폼에 맞는 앱을 만들 수 있다
(Android, ios, windows, macOS, Linux, Web)

##### UI FrameWork

크로스 플랫폼 앱과 사용자 인터페이스를 작성하는 데 코드에서 사용할 수 있는 여러 코드 패키지 모음을 갖고있다

##### Collection of Tools

다양한 플랫폼에 실행할 수 있는 기계 코드로 코드를 변환해준다

# Flutter 시작 및 실행

```bash
flutter create day1/assignment1

flutter run
```

> ❓ **Hot Reload와 일반 저장은 다른가?**

> Flutter가 프로그램이 실행되는 도중(런타임)에도 필요한 부분만 빌드하는 방식이니까 Dart에서 Hot Reaload가 지원된다고 한다…!

# Widget

Widget이란 레고 블럭과 같이 앱을 만드는데 사용되는 작은 모듈.

위젯들을 조합해서 화면을 그리는데, 이 위젯들의 조합이 나무와 같이 생겼다 하여
**위젯트리(Widget Tree)**라고 부른다.

## Flutter는 모든 것이 Widget이다?

---

1. UI를 만들어주는 하나하나의 구성 요소를 Widget이라고 표현
2. 위젯은 만들 수도 있고 배포할 수도 있다.
3. 위젯들은 각 특수한 목적이 있고 사용법이 다 다르다.

   ##### Material Widget

   Android에 기본 화면 구성 요소를 Flutter에서 그대로 재현한 위젯

   ##### Cupertino Widget

   ios에 기본적으로 내장된 화면 구성요소를 Flutter에서 재현한 위젯

   ##### Custom Widget

   특정 플랫폼에 특정되지 않은 고유의 디자인을 입힌 커스텀 위젯(Custom Widget)도
   쉽게 만들 수 있다.

## Widget의 속성값

---

1. 위젯마다 각각 원하 설정을 할 수 있는 특수한 값들
2. 위젯마다 사용할 수 있는 속성이 다르다.
3. “일반적으로” 자식위젯 사용시 child 속성이름값을 사용한다.
4. 속성마다 들어갈 수 있는 데이터 타입이 정해져 있다.

## Widget 추가 방법

---

## stless

자동 완성 기능으로 StatlessWidget을 작성할 수 있게 해준다.

`stless`
라고 입력하고 Tab하기.

```dart
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
```

### Flutter 개행

위젯이 끝날때마다 콤마`,`를 꼭 달아주자.

콤마`,` 가 있으면 저장 할때 자동으로 그 부분에 개행이 들어간다.

### 부모 위젯 추가법

1. `Ctrl + .` 부모 위젯을 추가해줄 child 위에 마우스를 올리고 Ctr + . 입력
2. `Wrap with widget` 선택 후 원하는 위젯명으로 바꿔주기

   혹은 어떤 위젯으로 감쌀 것인지도 선택할 수 있다.
