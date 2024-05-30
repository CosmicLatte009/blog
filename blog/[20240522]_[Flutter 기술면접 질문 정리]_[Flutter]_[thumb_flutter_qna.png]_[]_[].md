### 1. StatelessWidget과 StatefulWidget의 차이점은 무엇인가요?

> StatelessWidget은 상태가 변하지 않는 위젯으로, 한 번 생성되면 변경되지 않지만 상태가 변할 수 있는 위젯인 StatefulWidget은 상태가 변경될 때마다 UI가 다시 빌드됩니다.

[Stateless Widget과 Stateful Widget](https://zrr.kr/U9JF)

### 2. Flutter에서 상태 관리는 어떻게 하나요?

> Flutter에서 기본적으로 제공하는 상태관리에는 setState, InheritedWidget이 있습니다. setState는 특정 위젯의 상태를 업데이트하고 UI를 다시 빌드하게 해주는 가장 간단한 상태관리 메소드입니다. InheritedWidget은 데이터를 하위 위젯들과 공유할 때 사용하는 전역 상태 관리 위젯입니다. 대표적인 상태관리 패키지로는 Provider, Riverpod와 GetX 등이 있습니다.

### 3. Riverpod에 대해 아는 대로 설명해주세요.

> Riverpod은 InheritedWidget의 기능을 추상화하고 사용하기 쉽게 만들어진 상태관리 패키지입니다 Riverpod은 상태 및 의존성 관리를 간소화하고, 코드의 재사용성을 높여줍니다.
>
> StateProvider로 상태관리 Provider를 선언하고, ProviderScope를 최상위 위젯에 배치하여 모든 하위 위젯들이 Provider에 접근할 수 있도록 합니다. Provider의 상태를 읽거나 변경하려면 ConsumerWidget과 watch를 사용합니다.이 ConsumerWidget은 상태가 변경될 때마다 UI를 다시 빌드합니다.

### 4. GetX에 대해 아는 대로 설명해주세요.

> GetX는 InheritedWidget의 복잡성을 피하고 독자적인 상태관리 방식을 제공하는 패키지입니다.
>
> GetxController로 상태 관리 클래스를 생성하고, Get.put()으로 controller 의존성을 주입합니다. 상태를 구독하고 UI를 다시 빌드하려면 Obx 위젯을 사용합니다. GetX는 상태 관리 외에도 라우팅, 스낵바 등 다양한 기능을 제공합니다.

[GetX 상태관리](https://zrr.kr/YCOO)

### 5. Flutter의 위젯 트리 구조에 대해 설명해보세요.

> Flutter의 위젯 트리는 계층적 구조로, 각 위젯은 서로 부모-자식 관계를 형성합니다. 위젯 트리는 렌더 트리와 요소 트리로 구성되어서 효율적인 렌더링과 업데이트가 가능합니다.

### 6. Flutter에서 비동기 프로그래밍은 어떻게 처리하나요?

> Dart의 async와 await 키워드를 사용하여 비동기 프로그래밍을 처리합니다. 이를 통해 비동기 작업을 쉽게 작성할 수 있으며, Future와 Stream을 통해 비동기 데이터와 이벤트를 관리합니다. 비동기 작업 결과를 UI에 반영하기 위해서는 FutureBuilder나 StreamBuilder 위젯을 사용합니다.

[Future, async, await](https://zrr.kr/iSVq)
[Future, FutureBudiler](https://zrr.kr/zcGf)

### 7. Flutter에서 API 호출을 어떻게 하나요?

> Flutter에서 API 호출은 http 패키지, dio 패키지 등을 사용하여 비동기적으로 수행합니다. 이를 통해 RESTful API와 통신하며, JSON 데이터를 주고받을 수 있습니다. dio 패키지는 모든 요청에 공통 헤더를 추가할 수 있는 인터셉터 기능, 유연한 응답 및 에러 처리 등을 제공합니다. 응답을 처리한 후 UI를 업데이트하기 위해 FutureBuilder와 같은 비동기 위젯을 사용합니다.

[Flutter에서 HTTP 요청하기](https://zrr.kr/nT4o)

### 8. Flutter의 Hot Reload와 Hot Restart의 차이점은 무엇인가요?

> Hot Reload는 코드 변경 사항을 즉시 반영하되 상태를 유지하면서 UI를 업데이트합니다. 반면, Hot Restart는 애플리케이션을 다시 시작하여 모든 상태를 초기화하고, 모든 코드를 다시 빌드합니다. Hot Reload는 빠른 개발 사이클을 가능하게 하고, Hot Restart는 전체 애플리케이션을 재시작하여 초기 상태에서 테스트할 때 유용합니다.
>
> Hot Reload는 React의 npm run dev가 페이지를 새로고침하지 않고, 상태를 유지하면서 변경 사항을 즉시 반영하는 것과 비슷하고 Hot Restart는 React의 npm run dev가 페이지를 완전히 새로고침하여 모든 상태를 초기화하는 것과 비슷합니다.

### 9. 플랫폼별 네이티브 코드와의 통합 방법은 무엇인가요?

> Flutter는 MethodChannel을 사용하여 Dart와 네이티브 코드(Java, Kotlin, Swift, Objective-C) 간의 통신을 처리합니다. 이를 통해 Flutter 애플리케이션에서 플랫폼별 기능을 호출할 수 있으며, 네이티브 코드에서 Flutter로 데이터를 전달할 수도 있습니다. 이 방법은 플러그인 개발이나 플랫폼별 기능 통합에 유용합니다.

### 10. Flutter에서의 라우팅과 네비게이션은 어떻게 처리하나요?

> Flutter에서의 라우팅과 네비게이션은 Navigator와 Route를 사용하여 화면 간의 이동을 처리합니다. Navigator.push와 Navigator.pop 메서드를 통해 새로운 화면을 스택에 추가하거나 제거할 수 있으며, Named Routes를 사용하여 경로 이름으로 라우트를 관리할 수 있습니다.

### 11. Flutter에서의 폼과 폼 검증은 어떻게 하나요?

> Flutter에서 폼은 Form 위젯과 TextFormField 위젯을 사용하여 구성하며, validator 함수를 통해 입력 값을 검증합니다. GlobalKey<FormState>를 사용하여 폼의 상태를 관리하고, 유효성을 검사할 수 있습니다. 이를 통해 사용자의 입력 데이터를 쉽게 검증하고 처리할 수 있습니다.

### 12. Flutter의 주요 디자인 패턴은 무엇인가요?

> Flutter의 주요 디자인 패턴으로는 MVC, MVVM, 그리고 Provider 패턴 등이 있습니다. MVC는 Model, View, Controller로 구성되어, 데이터와 UI, 비즈니스 로직을 분리하여 유지보수를 용이하게 합니다.
>
> MVVM은 ViewModel을 통해 UI와 비즈니스 로직을 분리하고, 데이터 바인딩을 통해 UI 업데이트를 쉽게 처리합니다.
>
> Provider 패턴은 상태 관리와 의존성 주입을 간단하게 만들어, 전역적으로 상태를 공유하고 관리할 수 있게 합니다. 각 패턴은 코드의 재사용성과 유지보수성을 높이는 데 도움을 줍니다.

[디자인 패턴](https://zrr.kr/Hf3C)

### 13. Flutter의 BLoC 상태관리에 대하여 아는대로 간략히 설명해주세요.

> BLoC (Business Logic Component) 패턴은 애플리케이션의 비즈니스 로직을 UI로부터 분리하여 코드의 가독성과 유지 보수성을 높여줍니다.
>
> BLoC 패턴의 핵심 개념은 Streams, Events, States입니다.
> Streams는 비동기 데이터 흐름을 관리하며,
> Events는 사용자 상호작용이나 기타 원인에 의해 발생하는 사건을 나타냅니다. 이 이벤트는 BLoC에 전달되어 상태 변화를 유도합니다.
> States는 애플리케이션의 현재 상태를 나타내며, BLoC는 이벤트를 처리하여 새로운 상태를 생성하고 이를 UI에 전달합니다.이 과정에서 StreamController를 사용해 이벤트와 상태를 관리합니다. UI는 StreamBuilder를 사용해 BLoC의 상태 변화를 구독하고 이를 반영합니다.

### 14. Flutter에서 Build Context의 context는 무슨 역할을 하나요?

> Flutter에서 BuildContext의 context는 위젯이 어디에 위치하는지를 알려주는 정보입니다. Flutter 앱은 다양한 위젯으로 구성된 큰 트리 구조를 가지고 있는데, 각 위젯이 자신의 위치를 알고 싶을 때 context를 사용합니다. 이를 통해 위젯은 부모나 자식 위젯과 정보를 주고받거나, 특정 데이터에 접근할 수 있습니다.

### 15. Flutter에서 Overflowed 에러가 나는 것을 위젯트리와 연관지어 설명하고, 해결법을 같이 제시해주세요.

> Overflowed 에러는 화면에 표시되는 위젯이 지정된 영역을 초과할 때 발생합니다. 이는 위젯 트리에서 적절한 레이아웃 제약을 설정하지 않았을 때 자주 발생합니다.
>
> Column, Row, ListView와 같은 레이아웃 위젯 안에 고정된 크기를 가진 자식 위젯들이 많을 경우, 부모 위젯의 크기를 초과하여 Overflowed 에러가 납니다. 혹은 자식 위젯을 부모 위젯의 크기에 맞춰 조정하지 않고 스크롤 없이 모든 공간을 사용하려고 하면 Overflowed 에러가 납니다.
>
> 이를 해결하려면 자식 위젯이 부모 위젯의 남은 공간을 적절히 나누어 가지도록 Expanded 위젯이나 Flexible 위젯을 사용하여 공간을 동적으로 조정할 수 있습니다. 혹은 모든 자식 위젯이 화면에 한 번에 들어가지 않을 때는 스크롤이 가능하도록 SingleChildScrollView 위젯을 사용해주는 방식으로도 해결 가능합니다.
