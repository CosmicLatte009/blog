# Permission

Android와 iOS는 권한에 매우 민감하고 엄격하다.

앱 개발자들은 앱 내에서 사용할 권한을 미리 파일에다가 적어줘야한다.

iOS 권한 설정 파일 **info.plist**

Android 권한 설정 파일 **AndroidManifest.xml**

- iOS 권한 설정 링크

  [https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources](https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources)

- Android 권한 설정 링크

  [https://developer.android.com/reference/android/Manifest.permission](https://developer.android.com/reference/android/Manifest.permission)

## Image picker 패키지

---

갤러리 통해 이미지를 불러오거나, 카메라를 구동시켜 촬영된 이미지를 가져올 때 사용하는 패키지.

- Android는 권한설정 불필요, iOS는 권한설정 필요.
- Image picker는 이미지 파일로 ‘**XFIile**’이라는 데이터타입을 사용함

[https://pub.dev/packages/image_picker](https://pub.dev/packages/image_picker)

```dart
XFile? selectedImage; //선택되는 이미지 저장할 변수

var imagePicker = ImagePicker();

//...생략...//

Column(
	childern: [
		if (selectedImage != null) Image.asset(selectedImage!.path), //selectedImage 보여주기

		TextButton(
			child: Text("이미지 불러오기"),
			onPressed: () async {
				var image =
						await imagePicker.pickImage(source: ImageSource.gallery);
				if (image != null) {
					print("이미지가 선택되었습니다.);
					selectedImage = image();
					setState((){});
				} else {
					print("아무것도 선택 안했습니다");
				}
			},
		),
	],
),
```
