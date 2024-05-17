# 변수

데이터에 이름을 붙여 저장해야하는 필요가 생겨짐.

형태와 값을 단번에 알 수 있게 해주는 키워드.

### 변수 선언

변수 선언과 동시에 초기화를 한다.

내가 사용하려는 **데이터 타입**을 명시해줘야한다.

앞으로도 변수에는 선언 시 명시한 데이터 타입만 들어갈 수 있다.

변수명에는 예약어(void 등), 한글 불가, 첫글자 숫자 불가, 공백포함 불가

```dart
void main() {
	int example = 1000000;
}
```

### 변수 재선언

```dart
void main() {
	int example = 1000000;
	wallet = (wallet - 150000); //재선언
	print(wallet);
}
```

### 선언 시점

변수 사용 이전에 항상 먼저 상단에 선언 및 초기화가 되어야한다.

```dart
void main() {
	int example = 1000000; //먼저 선언
	print(wallet);
}
```

[var](https://www.notion.so/var-6e8c94ff17e0434cabc8583e7901704c?pvs=21)

# 데이터 타입별 변수 선언 예시

## String 타입 변수 선언 예시

---

각종 웹사이트 URL 변수

```dart
void main() {
	String naverUrl = "https://www.naver.com/"
	String facebookUrl = "https://www.facebook.com/"
}
```

## double 타입 변수 선언 예시

---

1. pi 변수

   ```dart
   void main() {
   	double pi = 3.14;
   	print(pi);
   }
   ```

2. 휴대폰 크기 변수

   ```dart
   void main() {
   	double deviceHeight = 146.7;
   	double deviceWidth = 71.55;
   	print(deviceHeight);
   }
   ```

3. 나의 신체 정보 변수

   ```dart
   void main() {
   	double myHeight = 0.0;
   	double myWeigth = 0.0;
   	print(myHeight, myWeight);
   }
   ```

## bool 타입 변수 선언 예시

---

1. 로그인 여부의 변수

   ```dart
   void main() {
   	bool isLogined = true;
   }
   ```

2. 연산 결과에 대한 변수 선언(초기화)

   ```dart
   void main() {
   	int money = 6000000;
   	bool isRich = money > 5000000;
   	print(isRich); //true
   }
   ```

[List 타입 변수 선언](https://www.notion.so/List-f5286f9e21c849a2a734ab0863fa5bbf?pvs=21)
