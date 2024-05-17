# Controller

- 작성되고 있는 데이터를 가져올 때 사용한다
- 위젯의 특정한 액션을 취하거나, 조종하고싶을 때 사용
- Controller를 위젯 내에 변수로 선언하고, 그 변수를 조작하면 된다

## Controller로 TextField 입력값 가져오기

---

1. TextField에 controller 연결. `TextEditingController()` 사용

   기본값을 넣어주는 것도 가능하다. `text: ''`

   ```dart
   class MyApp extends StatelessWidget {
       const MyApp({
           super.key
       });

       @override
       Widget build(BuildContext context) {
           var myContoller = TextEditingController(text: '');

           return MaterialApp(
               home: Scaffold(
                   body: TextField(controller: myContoller),
               ),
           );
       }
   }
   ```

1. 버튼 눌렀을 때 입력값 갖고 오도록 버튼의 onPressed 속성에 `컨트롤러명.text`

   ```dart
   class MyApp extends StatelessWidget {
       const MyApp({
           super.key
       });

       @override
       Widget build(BuildContext context) {
           var idContoller = TextEditingController();
           var pwContoller = TextEditingController();

           return MaterialApp(
               home: Scaffold(
                   body: Column(children: [
                       TextField(controller: idContoller),
                       TextField(
                           controller: pwContoller,
                           obscureText: true, //비밀번호용 TextField로 전환하는 속성
                       ),
                       TextButton(
                           onPressed: () {
                               print(pwContoller.text);
                           },
                           child: Text('로그인'),
                       )
                   ]),
               ),
           );
       }
   }
   ```

   > 🪄 **Controller를 사용하는 것과 onChanged에서 value를 갖고오는 것의 차이?**
   >
   > TextField에서 onChanged의 value를 갖고오는 것은 계속 실행하여 value를 갖고오는 것이지만
   > Controller를 연결하면 원하는 시점(버튼을 눌렀을 때 등)에만 value를 갖고올 수 있다.

   ## Contoller로 PageView 페이지 간 이동시키기

   ***

   1. PageView에 controller 연결. `PageController()` 사용

      ```dart
      class MyApp extends StatelessWidget {
        const MyApp({super.key});

        @override
        Widget build(BuildContext context) {
          var pageContoller = PageController();

          return MaterialApp(
            home: Scaffold(
              body: SafeArea(
                child: PageView(
                  controller: pageContoller,
                  children: [
                    Text('A페이지'),
                    Text('B페이지'),
                    Text('C페이지'),
                  ],
                ),
              ),
            ),
          );
        }
      }
      ```

   1. 버튼 눌렀을 때 다음 페이지로 넘어가도록 onPressed 속성에 `컨트롤러명.nextPage`

      버튼을 눌렀을 때만 이동할 수 있도록 스와이프 기능은 멈춰두길 권장된

      ```dart
      class MyApp extends StatelessWidget {
        const MyApp({super.key});

        @override
        Widget build(BuildContext context) {
          var pageContoller = PageController();

          return MaterialApp(
            home: Scaffold(
              floatingActionButton: FloatingActionButton(
                onPressed: () {
                  pageContoller.nextPage(
                      duration: Duration(milliseconds: 500),
                      curve: Curves.easeIn);
                },
                child: Icon(Icons.navigate_next),
              ),
              body: SafeArea(
                child: PageView(
                  physics: NeverScrollableScrollPhysics(), //스와이프 멈춤
                  controller: pageContoller,
                  children: [
                    Text('A페이지'),
                    Text('B페이지'),
                    Text('C페이지'),
                  ],
                ),
              ),
            ),
          );
        }
      }
      ```
