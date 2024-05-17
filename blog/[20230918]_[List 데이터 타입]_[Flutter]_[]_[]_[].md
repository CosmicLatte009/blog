# List

많은 데이터를 한 번에 저장해야하는 경우 사용된다

대괄호 `[]`로 표현하며, 안에 **모든 데이터 타입**을 한번에 넣어도 상관 없다.

### List 타입 변수 선언

```dart
void main() {
	List friends = [];
	List myFirends= ["Justing","Bella","Juno","Helen","Jerry", 1,2,3];
}
```

### 하나의 데이터 타입만을 사용하는 List 생성

#### 제네릭

`List<데이터 타입>` 과 같이 선언하면 된다. 꺽쇠 부분을 제네릭라고 부른다.

하나의 데이터 타입만을 갖는 List라면 이와 같이 제네릭을 사용하는 것이 Good 코드.

```dart
void main() {
	Lis<String> myItems = ["지갑", "시계", "3"];
	List<int> myFirends= [1,2,3,4,5,6,7,8];
}
```

### List 데이터 접근

#### 인덱싱

List 안의 요소는 0부터 센다.

```dart
void main() {
	List<int> myItems = [10000, 10000, 50000, 5000];
	print(myCash[3]); //3
}
```

#### Range Error

만일 List 길이를 벗어나는 수의 요소를 인덱싱 하려고 하면 **Range Error(범위에러)**가 발생한다.
