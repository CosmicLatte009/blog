# 🌞유데미 X 스나이퍼팩토리 Day3

플러터 캠프 3일째다~

오늘은 MaterialApp 위젯에서 제일 자주 쓰이는 속성들과 커스텀 위젯을 공부했다!

커스텀 위젯을 배우니까 비로소 Flutter에 입문하는 기분이 든다.

지금까지는 이렇게 저렇게 흩어진 위젯들로 조합만 해봤지만 오늘부터는 커스텀 위젯 덕에 익숙한 앱의 UI 모습을 따라할 수 있게 되었다.

강의를 보다보면 김스펙씨가 짠하다. 김스펙씨가 누구냐고 하면…강의를 보면 알게 된다…

# ✍️Day3 과제1

유튜브 뮤직 앱 화면 제작

# ✅과제 요구사항

![image](https://github.com/CosmicLatte009/blog/assets/87015026/57703574-c9af-4318-baa5-ae7239c68e98)

**<조건>**

1. 음악명은 최대 2줄까지만 가능하다.
2. 가수명과 플레이시간은 최대 1줄까지만 가능하며 필요한 경우 가수명을 줄인다.
3. 음악의 정보를 보여주는 위젯을 만들고, 이름은 MusicTile로 한다.

# 📚과제하며 새로 배운 내용

## MaterialApp의 theme 속성

---

앱 전반의 테마 색상 등을 정할 수 있다.
`ColorScheme.dark(),` 는 배경이 까만색으로 바뀌며 글자색상도 전부 하얗게 변한다.

대신 AppBar의 배경 색상은 _`elevation_: 0,` 을 줘야 body 배경색과 같아진다.

```dart
return MaterialApp(
      theme: ThemeData.from(
        colorScheme: ColorScheme.dark(),
      ),
```

## AppBar 하단에 border 넣는 방법 2가지

---

1. **PreferredSize 위젯 응용**

   ```dart
   bottom: PreferredSize(
               preferredSize: const Size.fromHeight(4),
               child: Container(
                 color: Colors.white10,
                 height: 1,
               ),
             ),bottom: BorderSide(color: Colors.white, width: 1),
             ),
   ```

2. **Border 위젯 응용 (권장)**

   ```dart
   shape: Border(
               bottom: BorderSide(color: Colors.white, width: 1),
   ),

   ```

## Text의 넘치는 글 제한하기

---

✅ 조건1: 음악명은 최대 2줄까지만 가능하다.

### maxLines속성

글을 몇줄까지만 보여줄건지 정하는 속성

### overflow 속성

넘치는 글자들을 어떻게 처리할건지 정하는 속성

`TextOverflow.ellipsis` 는 넘치는 글자를 생략한 것처럼 점 세개(…)로 표시한다.

```dart
Text(
        title,
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(fontWeight: FontWeight.bold),
      ),
```

## Flexible Widget

---

Flexbiled 위젯 안의 자식 Widget은 확장이 우선시 된다.
자식 Widget의 크기에 따라 아예 영역이 줄어들던지 영역이 크면 확장하는 유연함을 갖는것이다.

```dart
subtitle: Row(
        children: [
          Icon(
            Icons.check_circle,
            size: 16,
          ),
          SizedBox(width: 4),
          Flexible(
              child: Text(
            artist,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          )),
          SizedBox(width: 4),
          Text(duration),
        ],
      ),
```

## Row위젯, Column 위젯 영역을 최소화하는 방법

---

### mainAxizSize 속성

`mainAxisSize.min` 을 주면 자식 위젯들이 차지하는 영역만큼만 차지한다.

```dart
Row(
  mainAxisSize: MainAxisSize.min, // mainAxisSize를 MainAxisSize.min으로 설정
  children: [
    Text('첫 번째 아이템'),
    Text('두 번째 아이템'),
    Text('세 번째 아이템'),
  ],
)
```

## BottomNavigationBarItem 색상 변경

---

![image](https://github.com/CosmicLatte009/blog/assets/87015026/51ce3108-24ba-4cd8-9a05-a97d8e842fa0)

### 아이템 기본 색상 지정

`unselectedItemColor` 으로 아이템의 기본 색상 지정 가능.

보통 MaterialApp의 theme 속성에 따라 BottomNavigationBarItem의 배경 및 아이템 기본 색상도 바뀌므로 원하는 디자인이 있는게 아니면 따로 설정하지 않아도 된다.

### 아이템 선택되었을 때의 색상 지정

`selectedItemColor` , `fixedColor` 둘 중 하나로 아이템이 선택되었을 때의 색상 지정 가능

```dart
bottomNavigationBar: BottomNavigationBar(
          backgroundColor: Colors.black87,
          items: [
            BottomNavigationBarItem(
                icon: Icon(
                  Icons.home,
                ),
                label: '홈'),
            BottomNavigationBarItem(
                icon: Icon(
                  Icons.search,
                ),
                label: '둘러보기'),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.library_music,
              ),
              label: '보관함',
            ),
          ],
          currentIndex: 2,
          selectedItemColor: Colors.white, //아이템이 선택되었을 때의 색상 지정
          unselectedItemColor: Colors.grey, //아이템의 기본 색상 지정
        ),
```

# 🌟과제 Point

## MusicTile.dart로 반복되는 위젯 분리하기

---

✅ 조건2: 가수명과 플레이시간은 최대 1줄까지만 가능하며 필요한 경우 가수명을 줄인다.

✅ 조건3: 음악의 정보를 보여주는 위젯을 만들고, 이름은 MusicTile로 한다.

데이터만 달라지고 반복되는 UI는 커스텀 위젯으로 분리해줬다.

### MusicTile.dart 사용하기

```dart
import 'MusicTile.dart';

ListView(
          children: [
            MusicTile(
              title: 'Come with me',
              artist: 'Surfaces 및 salem ileses',
              duration: '3:00',
              albumImg: 'assets/music_come_with_me.png',
            ),
            MusicTile(
              title: 'Good Day',
              artist: 'Surfaces',
              duration: '3:00',
              albumImg: 'assets/music_good_day.png',
            ),
	],
)
```

### MusicTile.dart 작성

변수를 선언하고 달라지는 데이터가 있는 곳들을 변수로 대체해준다.

(아래 코드는 변수 사용법을 명확히 보기 위해 스타일들 생략)

```dart
import 'package:flutter/material.dart';

class MusicTile extends StatelessWidget {
    const MusicTile({
        super.key,
        required this.title,
        required this.artist,
        required this.duration,
        required this.albumImg
    });

    final String title;
    final String artist;
    final String duration;
    final String albumImg;

    @override
    Widget build(BuildContext context) {
        return ListTile(
            leading: ClipRRect(child: Image.asset(albumImg),),
            title: Text(title,),
            subtitle: Row(
                children: [
                    Icon(),
                    SizedBox(),
                    Flexible(
                        child: Text(
                            artist,
                            maxLines: 1, //가수명 1줄까지만 보이게 하기
                            overflow: TextOverflow.ellipsis,
                        )),
                    SizedBox(),
                    Text(duration),
                ],
            ),
            trailing: Icon(),
        );
    }
}
```

## bottomSheet 하단 재생바 모양 구현하기

---

BottomNavigation과 bottomSheet 사이에 아주 얇은 재생바가 들어가 있다.

![image](https://github.com/CosmicLatte009/blog/assets/87015026/f1abd291-ddf2-460b-bd0f-5ac2c9355fac)

1. bottomSheet의 최상단 위젯을 Column으로 시작
2. 첫번째 Container에 bottomSheet의 주 내용(앨범이미지, 제목, 가수, 재생아이콘 등) 넣기
3. 두번째 Container에 전체 재생바의 높이가 될 height를 지정한 Container 넣기
4. 두번째 Container에 width를 지정한 Container를 한번더 넣어준다.
   재생 progress(%)를 나타낼 수 있다.

```dart
bottomSheet: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              margin: const EdgeInsets.only(bottom: 4),
              height: 64,
              color: Colors.white12,
              child: ListTile(),
            ),
            Container(
              height: 1,
              alignment: Alignment.centerLeft,
              child: Container(width: 30, color: Colors.white),
            ),
          ],
        ),
```

# 📱과제 결과 화면

![image](https://github.com/CosmicLatte009/blog/assets/87015026/c2469872-66be-4ea5-99d8-44ea80597d43)

---

_본 후기는 유데미-스나이퍼팩토리 9주 완성 프로젝트캠프 학습 일지 후기로 작성 되었습니다._
