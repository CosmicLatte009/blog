# 🌞유데미 X 스나이퍼팩토리 Day7

오늘은 Map 데이터와 패키지 설치법을 배웠다. 이미 Flutter 자체가 있는걸 갖다 쓰는 느낌인데, 패키지로 더더욱 이것저것 잘 갖다 쓸 수 있나부다. 하지만 과제하면서 그냥 갖다쓴다는건 없다는걸 알았다…패키지마다 사용 방법이 달라서 매번 들여다보는 시간이 필요한 것 같다. 문서에 예제 코드가 다 나와있지만 내 코드에 맞게 적재적소에 사용하려면 이해가 필요했다.

tmi: 담당멘토님과 mbti랑 생일이 같다는 소식을 들었다. 신기헌구.

# ✍️Day7 과제1~2

# ✅과제 요구사항

### 과제1.

“아래로 당겨서 새로고침”은 UX 관점에서 매우 편리하고 새로운 데이터를 요청하고 보여주기 위한 좋은 수단이된다. 지정된 패키지를 활용하여 아래 결과와 동일한 결과물을 만드시오.
(과제 1, 2번은 페이지 전환이 되도록 작성하시오)

패키지 명 : **pull_to_refresh**

**<조건>**

1. 아래로 당기면 새로운 랜덤 이미지로 바뀐다.
2. pull_to_refresh 패키지를 사용할 때 **header: WaterDropHeader(),** 를 활용한다.

### 과제2.

“Slider, Carousel”를 지정된 패키지를 활용하여 다음의 결과물을 만드시오.

패키지 명 : **carousel_slider**

**<조건>**

1. 결과물의 데이터는 과제 1번의 데이터를 활용할 수 있다.
2. 2.5초마다 다음 페이지로 자동으로 넘어가도록 설정하시오.

# 📚과제하며 새로 배운 내용

## Random()

---

✅과제1 - 조건1: 아래로 당기면 새로운 랜덤 이미지로 바뀐다.

난수를 생성할 때 사용되는 클래스.

**`dart:math`** 라이브러리에서 제공한다.

```dart
import 'dart:math';
Random _random = Random();
```

### Random().nextInt(n)

랜덤 정수 생성하기

```dart
//0 이상 9이하의 랜덤 정수 생성
int _randomInt = _random.nextInt(10);
```

### Random().nextDouble()

랜덤 소수 생성하기

```dart
//0.0 이상 1.0 미만의 랜덤 소수 생성
double randomDouble = random.nextDouble();
```

### 데이터 인덱스 중에서 난수 랜덤으로 선택하기

```dart
Random _random = Random();
int _randomIndex = _random.nextInt(imageUrl.length);
```

## pull_to_refresh 패키지

---

✅과제1 - 조건2: pull_to_refresh 패키지를 사용할 때 **header: WaterDropHeader(),** 를 활용한다.

스크롤 가능한 위젯을 새로 고칠 때 사용되는 패키지.

아래로 스크롤하거나 위로 스크롤할 때 새로 고침 작업을 편리하게 구현할 수 있도록 도와준다.

https://pub.dev/packages/pull_to_refresh

### enablePulldown 속성

true로 지정하면 아래로 스크롤하여 새로 고치기 동작을 활성화할 수 있다.

### header 속성

새로고침 상태를 시각적으로 표시할 때 어떤 헤더를 사용할지 지정할 수 있다.

- WaterDropHeader()
  기본 새로 고침 헤더

### onRefresh

새로고침 동작 시작할 때 호출되는 콜백.

새로고침할 때 어떤 것을 실행할지 작성해준다.

### refreshCompleted();

새로고침 작업이 완료되었을 때 호출하여 스크롤을 초기 상태로 되돌리는 함수.

onRefresh 속성의 콜백 내에서 새로 고침 작업이 완료되면 refreshComplete를 호출하여 새로 고침이 끝났음을 알리면 된다.

```dart
onRefresh: () async {
  // 데이터를 업데이트하고 새로 고침 작업을 수행
  await fetchData();
  // 새로 고침이 완료되었음을 알림
  _controller.refreshCompleted();
},
```

## **carousel_slider** 패키지

---

✅과제2 - 조건2: 아래로 당기면 새로운 랜덤 이미지로 바뀐다.

캐러셀 슬라이드 형태를 만들 수 있는 패키지.

https://pub.dev/packages/carousel_slider

### CarouselOptions

options 속성에 달아서 여러 옵션들을 지정할 수 있다.

- **autoPlay**
  true로 지정하면 자동으로 캐러셀 슬라이드가 넘어가게끔 한다.
- **autoPlayInterval**
  슬라이드가 넘어가는 데에 걸리는 시간 지정

### items 속성 ⭐

슬라이드에 들어갈 **List<Widget>**을 지정해준다.

```dart
CarouselSlider(
    options: CarouselOptions(
        autoPlay: true,
        autoPlayInterval: Duration(milliseconds: 2500),
    ),
    items: imageUrl.map(
        (item) {
            return ClipRRect(
                child: Image.network(
                    item,
                    fit: BoxFit.cover,
                ),
                borderRadius: BorderRadius.circular(20),
            );
        },
    ).toList(),
),
```

# 🌟과제 Point

## SmartRefresher로 PageView.builder 페이지 넘김 제어

---

✅과제2 - 조건2: 아래로 당기면 새로운 랜덤 이미지로 바뀐다.

1. PageView.builder에 controller 달기

   ```dart
   PageController _pageController = PageController();

   //...생략...//

   PageView.builder(
             controller: _pageController,
             scrollDirection: Axis.vertical,
             physics: NeverScrollableScrollPhysics(),
             itemCount: imageUrl.length,
             itemBuilder: (BuildContext, index) => Card(
               child: Center(
                 child: ClipRRect(
                   child: Image.network(imageUrl[index]),
                   borderRadius: BorderRadius.circular(20),
                 ),
               ),
             ),
   ),
   ```

2. 이미지 url 받아올 변수와 \_jumpToRandomPage() 함수 생성

   ```dart
   String currentImgUrl = '';

     _jumpToRandomPage() {
       Random _random = Random();
       int _randomIndex = _random.nextInt(imageUrl.length);

       currentImgUrl = imageUrl[_randomIndex];
       _pageController.jumpToPage(_randomIndex);
     }
   ```

3. SmarRefresher에 controller 달고 새로고침할 때 마다 \_jumpToRandomPage() 실행시켜 랜덤한 이미지 url 받아오게끔 하기

   ```dart
   RefreshController _refreshController = RefreshController(initialRefresh: false);

   //...생략...//

   SmartRefresher(
           controller: _refreshController,
           enablePullDown: true,
           header: WaterDropHeader(),
   				onRefresh: () {
             _jumpToRandomPage();
             _refreshController.refreshCompleted();
           },
   )
   ```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/1bf1cdaf-353d-4015-8a41-e8afa7708f82)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
