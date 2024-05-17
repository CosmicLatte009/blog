## AspectRatio Widget

---

자식 위젯의 사이즈 비율을 정확히 맞춰야 할 때 사용하는 Widget

- 비디오를 넣어야할 때 4:3
- 정사각형을 보여줄 때 1:1

child에 있는 Container의 width나 height보다 우선시되는 것 같다…아마도?

```dart
AspectRatio(
	aspectRatio: 4/3,
	child: Conatiner(
		width: 100,
		height: 300,
		color: Colors.blue,
	),
),
```

## Wrap Widget

---

가로 길이가 길어지면 자동으로 다음줄로 넘어가서 요소를 나열해주는 위젯.

많은 자식 위젯을 가져도 overflow에러가 나지 않고 scroll도 따로 넣을 필요가 없기 때문에 아주 유용한 위젯.

### spacing

각 요소마다 띄울 간격 설정 가능

```dart
Wrap(
	children: [
		spacing: 8,
		 Container(),
		 Container(),
		 Container(),
		//...더 많은 위젯들...//
	]
),
```

> 🪄 Row Widget도 가로로 요소를 나열하지만 요소가 화면의 가로 밖으로 벗어나면 overflow가 일어난다.

## url_launcher 패키지

---

전화걸기, 메세지 보내기 , 특정 URL 웹으로 이동, 카카오톡 채널로 이동 등을 가능하게 해주는 패키지.

### launchUrlString 함수

특정 String를 담으면 간단히 원하는걸 할 수 있다.

### 메세지 보내기 예시

```dart
ListTile(
	title: TexT("이테디"),
	trailing: IconButton(
		icon: Icon(Icons.call),
		onPressed: () {
			launchUrlString('sms: +8210-0000-0000');
		},
)
```

## cached_network_image 패키지

---

이미지를 캐싱할 수 있도록 하는 패키지.

어플을 킬 때마다 매번 네트워크에 요청하여 이미지를 불러오는 것은 비효율적.

한번 저장된 이미지는 내 어플 내부에 잠깐 캐시데이터로 저장하여 다음에 어플을 킬 때는 내 캐시에서 가져오도록 한다.

ex) 카카오톡 프로필 사진

### Widget으로 이미지 사용할 때

```dart
CachedNetworkImage(
	imageUrl: '이미지 경로',
),
```

### provider 형태로 이미지 사용할 때

```dart
CircleAvatar(
	backgroundImage: CachedNetworkProvider('이미지 경로'),
),
```

## intl 패키지

---

화폐표시, 시간표시를 각 나라 등의 형식에 맞춰 보기 편하게 해주는 패키지.

### 시간 표시

DateFormat() 부분에서 원하는 형식으로 바꿀 수 있다.

아래 예시는 2009/09/03 Thursday

```dart
Text(DateFormat('y/M/d EEE').format(DateTime(2009,9,3)))
```

### 화폐 표시

중간에 콤마를 넣어줄 수 있다.

아래 예시는 KRW 40,000

```dart
Text(NumberFormat.currency(locale: 'ko_KR', symbol: 'KRW').format(40000))
```
