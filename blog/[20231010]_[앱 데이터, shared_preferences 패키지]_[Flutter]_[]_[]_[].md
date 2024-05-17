# 데이터를 어디에 둘까?

어플을 다시 켤때 내가 이전에 저장했던 데이터를 보고싶을 때가 있다. 즐겨찾기 등…

### 로컬 VS 서버

기본적으로 로컬에다가 데이터를 저장하는 것은 비용이 많이 든다.

앱 내에서 데이터를 잠깐 저장해야할 때. 모든 사용자의 즐겨찾기가 서버에 저장되는 것은 비효율적이다.

이런 가벼운 데이터들은 로컬에다가 저장해주면 된다.

**앱 데이터**, 즉 앱을 종료해도 불러와서 사용할 수 있는 데이터이다.

### 앱 데이터 종류

- 나의 어플이 로컬기반 어플일 때 (서버리스 어플)
  ex) 알람어플, 일기, 사진
  - 모든 데이터를 앱에 저장
- 자동로그인 구현
  - 로그인 받은 후 JWT 토큰을 내부에 저장
- 쇼핑몰 장바구니
- 동영상 플랫폼에서 시청을 어디까지 했는지

> 🪄 이 데이터들이 항상 로컬에 들어가는 것은 아니고 사실 예외적 상황들도 많다.

예를 들어 사업적인 이유로 장바구니 정보 집계가 기획자나 마케터에게 필요하다면 서버에서 데이터를 처리하는 것이 좋을 것.

또, 유튜브같은 곳에서는 멀티디바이스 체곌르 갖고 있어서 디바이스에서의 일관성 유지를 위해 서버에서 관리한다. 아이폰에서 10초 봤으면 아이패드로 이동해도 10초부터 재시청할 수 있도록.

# 앱 데이터 다루는 방법

1. 앱 데이터 접근 “객체” 초기화
2. 앱 데이터 저장
3. 앱 데이터 불러오기

## shared_preferences 패키지

---

### setInt(’key’, value)

prefs 앱데이터에 key와 value를 저장하여 앱데이터를 저장할 수 있다.

### getInt(’key’, value)

prefs 앱데이터의 특정 key의 value를 불러올 수 있다.

### SharedPreferences.getInstance();

`prefs = await SharedPreferences.getInstance();`

SharedPreferences Inatance를 불러와서 prefs 변수에 저장한다.

객체 초기화 과정은 보통 앱데이터를 불러오는 함수에서 같이 써준다.

## 카운터 앱데이터 저장하고 불러오기 예시

---

1. **prefs 변수 셋팅**

   ```dart
   int counter = 0; //카운터 수 저장될 변수
   SharedPreferences? prefs; //앱데이터 저장할 변수
   ```

1. **카운터 어플 실행될 때 앱데이터 불러오기**

   `prefs = await SharedPreferences.getInstance();`

   prefs를 객체 초기화 해준다.

   `counter = prefs!.getInt('counter') ?? 0;`

   prefs의 ‘counter’ key의 값을 불러와서 counter 변수에 저장해준다.

   어플 첫 사용자의 prefs는 null일 수 있으므로 앱데이터를 갖고올 때 counter를 0으로 처리해준다 ‼️

   ```dart
   @override
   void initState() {
   	super.iniState();
   	initPreferences();
   }

   void initPreferences() async {
   	prefs = await SharedPreferences.getInstance(); //객체 초기화
   	if (prefs != null) {
   		counter = prefs!.getInt('counter') ?? 0; //앱데이터 불러오기
   		setState((){});
   	}
   }
   ```

1. **카운터 앱데이터 저장하기**

   `counter = prefs!.getInt('counter') ?? 0;`

   prefs가 null이 아니면 prefs에 ‘counter’라는 key에 counter 값을 넣겠다.

   ```dart
   Text('$counter'); //화면에 카운터 수 표시

   floatingActionButton: FloatingActionButton(
   	onPressed: () {
   		setState(() => counter += 1; //카운터 수 증가
   		if (prefs != null) {
   			prefs!.setInt('counter', counter); //앱 데이터 저장
   		}
   	},
   	child: Icon(Icons.add),
   ),
   ```
