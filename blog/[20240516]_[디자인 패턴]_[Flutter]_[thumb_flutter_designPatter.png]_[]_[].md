# 디자인 패턴

소프트웨어 디자인 패턴을 학습하여 어떻게 시스템을 구축할 수 있을지.

어떻게 하면 확장가능(Scalable)하게 웹/앱/소스코드를 제작해 나갈 것인가.

[https://refactoring.guru/ko/design-patterns/catalog](https://refactoring.guru/ko/design-patterns/catalog)

# MVC 패턴

Model, View, Controller로 나누어 각각 목표에 맞게 관심사를 나누는 것.
![image](https://github.com/CosmicLatte009/blog/assets/87015026/965d6134-f1c8-4695-9194-5d827f880156)

##### Model

데이터의 구조, 비즈니스 로직을 정의

##### View

데이터를 보여주는 화면에 대한 정의

##### Controller

데이터를 동작하게 하고 상호작용하는 기능에 대한 정의

# MVVM 패턴

MVC 업그레이드 버전 패턴.
![image](https://github.com/CosmicLatte009/blog/assets/87015026/d3122214-bfe6-4aa6-8f40-5d16f6a5225b)

##### Model

데이터의 구조, 비즈니스 로직을 정의

##### View

데이터를 보여주는 화면에 대한 정의. 사용자의 액션을 ViewModel에 전달하고, ViewModel의 상태 변화에 따라 화면을 업데이트

#### ViewModel

View에 필요한 데이터를 Model로부터 가져와 가공.
즉, ViewModel은 Model의 데이터를 View가 사용하기 좋은 형태로 변환하는 중개자 역할.
사용자의 입력을 처리하고 Model을 업데이트하는 로직을 포함.

# Singleton 패턴

하나의 클래스를 여러번 생성해도 하나의 인스턴스만을 생성하는 것.

새로운 객체(인스턴스)를 계속 생성해도 똑같은 하나의 인스턴스만을 사용하는 것
