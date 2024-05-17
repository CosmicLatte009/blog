# 이미지 Widget

Created Time: 2023년 9월 19일 오후 1:23
Tag: Widget

# Flutter의 이미지 위젯

- Image.newtork: 네트워크 상 이미지 경로 가져오기
- Image.asset: 내 저장소에서 이미지 경로 가져오기
- Image.memory
- Image.file

## Image.network 위젯

---

- 네트워크의 데이터 이미지를 불러올 때 쓰는 위젯.
- 브라우저에서 이미지 웹주소를 하나 가져온다. (CDN 방식으로 많이 쓰이기 때문)

```dart
Image.network('http://이미지 주소복사해온 주소'),
```

## Image.asset 위젯

---

- pubspec.yaml에 등록되어 있는 이미지를 사용할 때 쓰는 위젯.
- **사용 방법**

  1. /assets/images 폴더에 이미지 저장
  2. pubspec.yaml 파일에 이미지 경로 작성

     폴더를 통째로 지정하는 것도 가능하다 `assets: - assets/`

     ```yaml
     assets:
     	- assets/images/이미지파일명.png
     ```

  3. `Image.asset('이미지 경로')`

  > 🪄 **Image.network 와 Image.asset을 각 어떤 상황에 쓸까?**
  >
  > 1. 네트워크가 없는 상황 (데이터X, 와이파이X, 섬이라서 폰 안 터짐)
  >
  > - Image.asset 사용
  > - 네트워크에 연결 안해도 장치 내부(어플 내부)에 있기 때문
  >
  > 2.  인터넷 통해서 이미지 보여줘야하는 상황
  >     (친구가 업로드하는 인스타 사진, 페이스북 사진, >카카오톡 전송 사진)
  >
  > - Image.nework 사용
  > - 서버에서 받아오는 이미지로 네트워크를 연결해야한 볼 수 >있기 때문
  >
  > 3.  디자이너가 작업해준 Icon, 어플 필수 이미지(로고) 쓰는 상황
  >
  > - Image.asset 사용
  > - 장치 내부에 있어야 로딩 빠름

# 이미지를 Circle로 자르는 방법

1. CircleAvatar 위젯
2. ClipOval 위젯
3. ClipRRect 위젯
4. Conatinaer 위젯

## CircleAvatar 위젯

---

- 기본적으로 원 형태를 제공하는 위젯
  - ex) 주소록 기본 아바타
- `backgroundImage` 속성에 ImageProvider로 이미지를 갖고온다.

1. 일반 색상에 텍스트만 들어간 원

   ```dart
   CircleAvatar(
   	backgroundColor: Colors.blue,
   	child: Text('Circle 중간에 들어갈 텍스트. 보통 한 자'),
   )
   ```

2. 이미지를 원으로 자르기

   ```dart
   CircleAvatar(
   	radius: 36 //원 크기
   	backgroundColor: Colors.blue,
   	backgroundImage: NetworkImage('네트워크 이미지 경로'),
   )
   ```

> 🪄 **ImageProvider란?**
> 이미지를 ‘사용할 수 있도록’ 준비만 해주는 Provider로,
> NetworkImage(’경로’ ) 형태 사용한다.
>
> 반면, 이미지 위젯들은 이미지를 바로 화면에 보여줄 수 있다.
> CircleAvatar이 화면에 렌더링해주는 능력을 따로 갖고 있기 때문에
> 이미지를 Provider로 요구하는 것이다.

## ClipOval 위젯

---

- 이미지를 자동으로 원으로 잘라준다.
- Image 위젯을 child로 갖는다.

```dart
ClipOval(
	child: Image.network('네트워크 이미지 경로'),
)
```

## ClipRRect 위젯

---

- `borderRadius` 속성을 통해 이미지를 원으로 잘라준다.
- Image 위젯을 child로 갖는다.

```dart
ClipRRect(
	borderRadius: BorderRadius.circular(99),
	child: Image.network('네트워크 이미지 경로'),
)
```

## Container 위젯의 decoration과 clipBehavior

---

- `decoration` 속성과 `clipBeahavior` 속성을 통해 자식이 영역 밖으로 넘치면 잘라버리도록 한다.
- Image 위젯을 child로 갖는다.

1. borderRadius를 사용하는 경우

   ```dart
   Container(
   	decoration: BoxDecoration(
   		borderRadius: BorderRadius.circular(99),
   	),
   	clipBehavior: Clip.antiAlias,
   	child: Image.network('네트워크 이미지 경로'),
   )
   ```

1. shape를 사용하는 경우

   ```dart
   Container(
   	decoration: BoxDecoration(
   		shape: BoxShape.circle,
   	),
   	clipBehavior: Clip.antiAlias,
   	child: Image.network('네트워크 이미지 경로'),
   )
   ```
