# 직렬화 (Serialization)

직렬화란 컴퓨터 과학의 데이터 스토리지 문맥에서 데이터 구조나 오브젝트 상태를 동일시하거나 다른 컴퓨터 환경에 저장하고 나중에 재구성할 수 있는 포맷으로 변환하는 과정이다.
오브젝트를 마샬링한다고도 한다.

즉, 네트워크의 데이터를 사용 가능한 형태로 클래스 틀에 맞춰주는 것을 **직렬화**라고 한다.

JSON Serialization은 JSON 데이터를 Class에 맞게 세팅해주는 것.

## toMap()

```dart
class User {
  final String id;
  final String name;
  final int age;

  User({required this.id, required this.name, required this.age});

  // 객체를 Map으로 변환
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'age': age,
    };
  }
}

```

---

## fromMap()

```dart
class User {
  final String id;
  final String name;
  final int age;

  User({required this.id, required this.name, required this.age});

  // Map에서 객체 생성
  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['id'],
      name: map['name'],
      age: map['age'],
    );
  }
}

```

---

## dio 패키지로 받아온 데이터 직렬화

---

```dart
import 'dart:convert';
import 'package:dio/dio.dart';

class UserService {
  final Dio dio;

  UserService(this.dio);

  Future<User> fetchUser(String userId) async {
    try {
      final response = await dio.get('https://api.example.com/users/$userId');
      return User.fromMap(response.data);
    } catch (e) {
      throw Exception('Failed to load user');
    }
  }
}

```

## http 패키지로 받아온 데이터 직렬화

---

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class UserService {
  // 서버에서 사용자 정보를 받아오는 함수
  Future<User> fetchUser(String userId) async {
    try {
      final response = await http.get(Uri.parse('https://api.example.com/users/$userId'));

      if (response.statusCode == 200) {
        // 응답 데이터를 JSON으로 파싱
        final data = jsonDecode(response.body);
        // 파싱된 데이터를 User 객체로 변환
        return User.fromMap(data);
      } else {
        throw Exception('Failed to fetch user: ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('Failed to load user: $e');
    }
  }
}
```
