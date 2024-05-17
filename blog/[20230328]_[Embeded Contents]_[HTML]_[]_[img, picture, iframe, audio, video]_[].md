# 1. 이미지 태그

## img 태그

### 필수 속성

- `src` 이미지 경로로 표현('./', 'http://..')
- `alt` 이미지 설명 대체 텍스트. 스크린리더(SEO)에 도움.  
  `<figcaption>` 태그 등으로 alt에 값이 필요없는 경우엔 빈 값.

### 기타 속성

-`srcset` 여러 크기의 동일 이미지 2장 이상일 때 사용 가능.
여러 해상도에 대응하여 브라우저가 여러 크기의 이미지 중 최상의 이미지 로딩하도록 도움.  
 x: 화소의 밀도가 값 x인 경우 해당 이미지를 쓴다.  
 w: 해상도에 따라 width가 값 w인 이미지가 필요하면 해당 이미지를 쓴다.  
 x서술자와 w 서술자는 동시에 쓸 수 없다.

- `sizes` 뷰포트의 조건에 따라 이미지가 UI 안에서 차지하게 될 사이즈
  `(min-width: 1000px) 250px`
  뷰포트 너비(가로)가 1000px 이상일 때 250px로 최적화 출력하겠다는 뜻.

### srcset 과 sizes

웹표준 준수하기 위해선 srcset속성만 쓰지 않고 그에 맞는 sizes 속성도 명시한다.
srcset, sizes 속성처럼 반응형 이미지 처리는 css로 대체 가능. 중복해서는 쓰지 않는다.

### img 태그 사용 예시

```HTML
<img src="/img/white_bear.jpg" alt="하얀 곰" />
<img
    alt="허스키 강아지 사진"
    srcset="/img/dog_640.jpg 640w, /img/dog_1280.jpg 1280w"
    sizes="(min-width: 1000px) 1280px"
    src="/img/dog_640.jpg"
/>
```

<img
    width="600"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/2c506799-03b7-4022-86a0-d0c8b3b73e17"
  />

## picture 태그와 source 태그

img의 srcset 속성은 화면에 따른 이미지 크기를 조절한다면 `<picture>` 태그는 이미지 포맷 자체를 변경한다.

### picture의 필수 자식 태그

- `<source>` media 속성값에 맞는 srcset 속성값을 img태그의 src에 넣어 화면에 보여준다.
- `<img>` 필수. soucre의 srcset속성으로부터 값을 받아와 이미지 출력.

### source의 필수 속성

- `srcset` 이미지 경로
- `media` 뷰포트 조건

### source의 기타 속성

- `type` 이미지 포맷 타입을 브라우저에게 알려준다.  
   브라우저가 지원하는 포맷이 아닌 경우 다음 `<source>` 태그로 넘어간다.  
   WebP나 AVIF같은 최신 포맷 이미지 지원하고 싶을 시  
   크로스브라우징 위해 `<picture>` 태그 쓰는 것 권장. (점진적 향상 기법)

### picture와 source 태그 예시

```HTML
<picture>
        <source srcset="/img/golden_1280.jpg" media="(min-width: 1000px)" />
        <source srcset="/img/golden_640.jpg" media="(min-width: 800px)" />
        <img src="/img/golden_640.jpg" alt="골든 강아지 사진" />
</picture>
<picture>
        <source srcset="/img/corgi_640.avif" type="image/avif" />
        <source srcset="/img/corgi_640.webp" type="image/webp" />
        <img src="/img/dog_640.jpg" alt="코기 강아지 사진" type="image/jpg" />
</picture>
```

<img
    width="600"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/e45501be-9617-4b11-9f47-155777e76542"
  />

---

# 2. html 페이지, 유튜브 영상 삽입 태그

### iframe 태그

현재 HTML에서 또 다른 HTML 페이지를 보여주기 위해 사용.  
유튜브 영상 불러올 때 가끔 사용.

### iframe의 필수 속성

- `src` html파일명, 유튜브 경로

### iframe 기타 속성

- `width`, `height` 따로 값 설정 않을 시 width는 300px, height는 150px으로 기본 설정.

### 유튜브 불러올 때 잘 보이는 속성

- `frameborder` 테두리 유무 0 혹은 1.이제 사용하지 않고 CSS의 border 속성이 대체.
- `allow` iframe에서 허용할 기능들 지정.
  - accelerometer: 가속도 기능;
  - autoplay: 자동재생.
  - encryped-media; gyroscope; picture-in-picutre 등
- `allowfullscreen` 전체화면 지원

### iframe 태그로 html 페이지 삽입 예시

```HTML
<iframe src="another.html" width="640px" height="400px"> </iframe>

<!--삽입된 HTML 페이지 예시
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>another</title>
	</head>
	<body>
		<strong>미니 iframe 테스트</strong>
		<img src="/img/white_bear.jpg" alt="하얀 곰" />
	</body>
</html>
-->
```

<img
    width="600"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/a15621c8-cc8e-4ced-8f92-292d3f8cafd1"
  />

### iframe 태그로 유튜브 삽입 예시

```HTML
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/kXF3VYYa5TI"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

<img
    width="600"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/bda20d10-e36f-469d-ba07-63010538cfe1"
  />

---

# 3. 오디오 태그

## audio 태그와 source 태그

### `<audio>`

음악 컨텐츠 재생하기 위해 사용.

### `<source>`

audio 태그 내의 자식 요소로 사용하여 파일 가져오기 가능.  
크로스 브라우징 위해 여러 포맷의 파일을 지원할 수 있다.

### audio의 필수 속성

- `src` 오디오 파일 위치 및 파일명
- `controls` 음악 파일 제어할 수 있는 컨트롤러

### audio의 기타 속성

- `autoplay` 로딩이 완료된 파일을 자동으로 재생. 의도치 않은 트래픽 유발 방지와 접근성 측면 개선을 위해 muted속성과 꼭 함께 쓰기.
- `loop` 음악을 반복
- `muted` 음소거

### source의 필수 속성

- `src` 오디오 파일 위치 및 파일명

### source의 기타 속성

- `type` 오디오 포맷 타입을 브라우저에게 알려준다.  
  브라우저가 지원하는 포맷이 아닌 경우 다음 `<source>` 태그로 넘어간다. (점진적 향상기법)

### audio와 source 태그 예시

```HTML
<audio src="/audio/Clocks Set.mp3" controls autoplay loop muted></audio>
<audio controls loop>
    <source src="/audio/Clocks Set.ogg" type="audio/ogg" />
    <source src="/audio/Clocks Set.mp3" type="audio/mpeg" />
</audio>
```

<img
    width="400"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/29f99708-7cc1-44b4-a07a-93042bfaae65"
  />

---

# 4. 비디오 태그

## video 태그와 source 태그, track 태그

### `<vidoe>`

동영상 파일 제생하기 위한 태그.

### `<source>`

video 태그 내의 자식 요소로 사용하여 파일 가져오기 가능.  
크로스 브라우징 위해 여러 포맷의 파일을 지원할 수 있다.

### `<track>`

자막과 같은 시간 기반 텍스트 데이터(텍스트 트랙)을 보여주고사 할 때 사용.  
WebVTT(.vtt) 파일 포맷일 시 쓰게 될 태그.

### video의 필수 속성

- `src` 영상 파일 위치 및 파일명
- `controls` 영상 파일 재생하는데 필요한 컨트롤러

### video의 기타 속성

- `autoplay`, `loop`, `muted`
- `poster` 영상이 로딩 중일 때 대신해서 화면에 보여줄 이미지 지정
- `preload` 좋은 사용자 경험을 위해 고려해볼 수 있는 속성.
  - none: 비디오 파일 미리 로딩하지 않는다.
  - metadata: 미리 로딩하진 않지만 파일의 메타데이터를 미리 가져오기.
  - auto: 비디오 파일 미리 로딩하여 사용자가 바로 영상 볼 수 있도록 준비.

### source의 기타 속성

- `type` 비디오 포맷 타입을 브라우저에게 알려준다.  
  브라우저가 지원하는 포맷이 아닌 경우 다음 `<source>` 태그로 넘어간다. (점진적 향상기법)

### track의 기타 속성

- `kind` 텍스트 트랙 종류 지정
  - subtitles(자막)
  - captions(설명) 등
- `srclang` 텍스트 트랙의 언어 지정
- `label` 텍스트 트랙(자막)의 제목

### video와 source, track 태그 예시

```HTML
<video
    src="/video/SOLUM Newton Link.mp4"
    poster="/img/NEWTON.png"
    controls
    loop
    muted
    width="450"
    height="300"
></video>

<video controls poster="/img/CrashCourse.png" preload="auto" width="1280px" height="720px">
    <source src="/video/crashCourse.mov" type="video/mov"></source>
    <source src="/video/crashCourse.mp4" type="video/mp4"></source>
    <track kind="subtitles" src="/video/crashCourseKor.vtt" srclang="ko" label="한국어">
</video>
```

<img
    width="800"
    src="https://github.com/CosmicLatte009/christmas_mbti_test/assets/87015026/9e60d2d9-f2bb-44fc-9ec9-35755473f9eb"
  />
