# immutable

변하지 않는 상태. ‘불변’.

어떤 변수는 절대 상태가 변경되지 않도록 해야한다면…

const와 final 키워드를 사용할 수 있다.

# const

List에 값을 추가하는 것조차 허용하지 않는다.

어플 개발품이 build되어 있는 시점, 즉 컴파일 타임에 미리 정의된다.

데이터 속도는 더 빠르다.

```dart
const String myName = 'Teddy';

myName = '새 값'; //에러발생
```

> 🪄 왜 맨날 VScode에서 const를 넣으라고 했을까?
> const로 만들어진 Stateless Widget은 이미 컴파일 때 한번 빌드가 됐었으니까 런타임(어플 실행시) 때 새로 빌드할 필요가 없어서 성능개선에 효율적이기 때문.

귀찮다면 analysis_options.yaml에 등록해줄 것. 그리고 배포 전에 끄고 한번씩 const가 필요한 부분에 다 넣어주면 편하다.

# final

List에 값을 추가할 수 있게는 허용해준다.

어플이 실행될 때 결정된다. 즉, 런타임에 정의된다.

```dart
final String myName = 'Teddy';

myName = '새 값'; //에러발생
```
