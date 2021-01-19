# Hello範例

## 文件來源

- https://docs.viromedia.com/docs/quick-start

## 1. 預先要求/環境建置

參考React Native的環境建置要求：

- https://reactnative.dev/docs/getting-started.html
- https://reactnative.dev/docs/environment-setup

> Node, Watchman, the React Native 命令列工具, a JDK, and Android Studio(for Android), Xcode(for iOS)

AR (iOS)

iOS Device with A9 chip or higher and running iOS 11 or higher.

AR (Android)

[ARCore supported device](https://developers.google.com/ar/discover/#supported_devices)

VR

1. Recent Android or iOS Device (Android requirements: Android 5.0+ w/ gyroscope support and OpenGl ES 3.0, iOS requirements: iOS 9.0+)
2. Cardboard headset (you can find some QR codes [here](http://www.hypergridbusiness.com/faq/vr-headset-qr-codes/))

## 2. 安裝 React Native 命令列工具

```shell
npm install -g react-native-cli
```

## 3. 安裝 ViroReact 命令列工具

```text
npm install -g react-viro-cli
```

## 4. 建立 ViroSample 專案

> 新更新檔案請以下參考：https://github.com/ViroCommunity/viro

```shell
git clone https://github.com/viromedia/viro.git.
```

切換到`code-samples`目錄：

```shell
npm install
```

```shell
npm start
```

使用下面的Testbed App測試與開發。

---

> 以下為舊文件作法：

macOS平台

```shell
react-viro init ViroSample --verbose
```

windows平台

```shell
react-native init ViroSample --version=0.59.3
```

```shell
cd ViroSample
npm install -S -E react-viro
```

複製檔案從 node_modules\react-viro\bin\files\javascript\* 到你的專案根目錄(覆蓋)

## 5. 下載 Viro Media 測試用App (Testbed App)

從手機的App商店下載 Viro Media Testbed App

**iOS**
[Viro Media App](https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8)

**Android**
[Viro Media App](https://play.google.com/store/apps/details?id=com.viromedia.viromedia)

手機與開發用電腦需要在同個 Wifi 網段中

## 6. 啟動專案 - NPM Start

在專案的根目錄執行: `npm start` 來啟動專案

## 7. 在 Testbed App 中開啟專案

1. 在你的 iOS 或 Android 設備打開 Viro Media App 
2. 觸按左上方的選單，然後觸按"Enter Testbed"
3. 輸入在你啟動專案時，在終端機視窗中看到的網址 ([https://xxxxxx.ngrok.io](https://xxxxxx.ngrok.io/)) ，輸到到Testbed App的文字輸入框中，然後按下 "Go" (也可直接輸入電腦的IP位置)

> 記得每次重新回來啟動專案時，如果沒有畫面出現，要按一下最下面的`clear cache`