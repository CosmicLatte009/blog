# 웹(World Wide Web)

웹은 우리가 웹 브라우저를 통해 돌아다니는 가상의 연결망 세계다.  
웹은 HTML, Hypermedia, HTTP, URL로 구성되어 있다.

- ### HTML

  #### HyperTextMarkupLanguage

  웹에 적힌 글자들은 다른 텍스트에 대한 참조를 갖고 있는 텍스트(HyperText)로 이루어져 있다.

- ### 분산 하이퍼 미디어 시스템

  #### Distributed Hypermedia System Hypermedia

  서로 연결된 '문서'에 국한되지 않은 웹에 대한 좀더 넓은 개념의 단어다.
  웹은 수많은 컴퓨터에 Hypermedia(이미지, 소리, 영상)들이 분산되어 있는 형태로 이루어져 있다.

- ### HTTP

  #### HyperText Transfer Protocol

  웹은 HTTP, HTTPS 와 같은 프로토콜을 사용하여 통신한다.  
   즉, 서버와 웹 클라이언트는 HTTP, HTTPS를 이용하여 하이퍼미디어 문서를 주고 받는다.

- ### URL

  #### Uniform Resource Locator

  웹에 존재하는 특정 데이터를 나타내는 문자열이다.

---

# 프로토콜 (protocol)

프로토콜은 통신을 하는 두 주체 (웹 브라우저, 서버)가 지켜야 하는 통신 규약이다.  
HTTP, HTTPS, FTP, SSH, TCP, UDP, IP, Ethernet 등

<img
    width="300"
    src="https://user-images.githubusercontent.com/87015026/224366143-953dfb0f-fe71-4a43-b4b6-33b788c8458b.png"
  />

## 고수준 프로토콜, 저수준 프로토콜

프로토콜은 각각 네트워크 통신의 특정 계층에 속한다.  
위로 갈수록 고수준 프로토콜, 아래로 갈수록 저수준 프로토콜이다.

HTTP나 HTTPS 프로토콜을 기반으로 한 통신은 하위에 있는 저수준 프로토콜을 기반으로 이루어지는 것이다.

#### 저수준 프로토콜의 세계...

    백엔드를 다루는 경우, 서비스의 사용자 수가 늘어나서 리퀘스트의 수가 늘어날수록
    HTTP 아래에 있는 저수준 프로토콜에 대해서도 어느 정도 알고 있어야 각종 성능 문제 등을 해결 가능하다.

    게임 서버 개발이나 IoT 기기 개발 등과 같이 성능 최적화 등이 필요한 경우 유용하다.

## HTTP와 HTTPS

둘다 웹 클라이언트가 서버와 통신(request, response)하기 위한 프로토콜이다.

- **HTTP**는 HyperText Transfer Protocol
- **HTTPS**는 HyperText Transfer Protocol Secure

  http에 보안성(Secure)이 더해진 것이 https다.

---

# URL

#### Uniform Resource Locator

규격화된 리소스 검색자란 뜻으로, 웹에 존재하는 특성 데이터를 나타내는 문자열이다.

## URL을 이루는 요소

URL은 HTTP 프로토콜과 호스트, 경로, 쿼리로 이루어져 있다.

![URL](https://user-images.githubusercontent.com/87015026/224369725-1d101811-d678-465e-84bd-ae91320b942d.png)

- ### 호스트 (Host)

  전 세계 서버 중 이 도메인 주소에 해당하는 하나의 서버를 특정.

- ### 경로 (Path)

  서버 안에서 존재하는 데이터 중 원하는 데이터를 특정하는 핵심 부분.

  슬래시 `/`를 사용해서 계층적인 형태로 나타낸다.  
   계층적 관계를 잘 나타내면, 가독성 좋고, 이해하기 쉬운 URL을 설계하여 URL만으로도 무슨 리소스(resource)를 의미하는지 알 수 있게끔 할 수 있다.

- ### 쿼리 (Query)

      `?` 물음표 뒤에 이어지는 데이터에 관한 세부적인 요구사항.

      `query=string&query2=string2`
      하나의 속성 (query=string)에 `=` 등호와 같이 값이 존재한다.
      각각의 속성은 `&` 앰퍼샌드로 이어서 나타낸다.

      html 태그의 `name` 속성 값이 이리로 들어온다.
      항상 필수로 있는 것은 아니다.
