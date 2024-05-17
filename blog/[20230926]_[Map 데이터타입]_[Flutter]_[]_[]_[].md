# Map 데이터타입

변수 하나에 최대한 많은 데이터를 담고 싶을 때 쓰는 타입.

`Key: Value` 방식으로 데이터를 작성한다.

```yaml
var myInfo = {
	"name" : "Teddy",
	"height" : 199.9,
	"age" : 99,
	"phone" : "010-1000-2000",
};
```

## Map 안의 특정 Value 가져오는 방법

---

`변수명["Key"]` 가져오고 싶은 Value의 Key를 작성한다.

```yaml
print(myInfo["name"]);
```

## List 안에 많은 Map 데이터

---

여러 Map 데이터를 모을 때는 List 안에 담는다. 잘 쓰이는 구조.

```yaml
var myFriend = [
  {
    "phone": "010-1000-2000",
		"name": '이테디',
		"category": '동네친구',
  },
	 {
    "phone": "010-1000-2000",
		"name": '주노',
		"category": '동네친구',
  },
	 {
    "phone": "010-1000-2000",
		"name": '신디',
		"category": '동네친구',
  },
]
```

위와 같은 List 데이터의 특정 Map 안 특정 value를 갖고오려면
`변수명[index][”Key”]` 과 같이 작성한다.

```yaml
print(myFriend[2]['phone']);
```

## 특정 Value를 Text 위젯으로 보여주기

---

```yaml
myFriend.map((e) => Text(e["name"])).toList()
```

# Map의 타입추론

Map에 Generic이 사용 가능하다.

Key와 Value의 데이터 타입을 지정해줄 수 있다.

`Map<String, dynamic> 변수명 = {}` 의 경우는

Key는 무조건 String이어야 하고, Value는 어떠한 것도 될 수 있다는 뜻.

```yaml
Map<String, dynamic> human1 = {
	"name": "Tedddy",
	"age": 99,
	"isProgrammer": true,
};
```

> 🪄 Map의 Value의 데이터 타입과 해당 Value를 받는 위젯의 속성이 요구하는 데이터 타입이 다른 경우도 있다.
> 예를 들어 Value를 받는 위젯의 속성이 문자열을 요구하는 경우,
> Map의 Value가 문자열이 아니라면 Value를 가져온 후 `.toString()` 을 등을 사용하여 꼭 문자열로 변환해주자.
