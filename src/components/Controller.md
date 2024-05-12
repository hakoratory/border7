# Controllerコンポーネント

## 入力（引数）
* answered {boolean} OVER, UNDER or EVEN を答えたかどうか
* isGameStarted {boolean} ゲーム開始フラグ
* isGameFinished {boolean} ゲーム終了フラグ
* startGame {function} ゲーム開始処理※StartButtonと対応
* next {function} 次のターンに進む処理※NextButtonと対応
* check {function} 正解のチェック処理※Border7Buttonsと対応
* nextGame {function} 次のゲームの開始処理※NextGameButtonと対応

## 出力（戻り値）
JSX.Element

## 設計書
1. getButtons1  
    1.1 `isGameStarted === false` のとき `StartButton` コンポーネントを返却する  
    1.2 `StartButton` コンポーネントの `onClickStart` 属性に引数 `startGame` を渡す  
2. getButtons2  
    2.1 `isGameFinished === true` のとき `NextGameButton` コンポーネントを返却する  
    2.2 `NextGameButton` コンポーネントの `onClickNext` 属性に引数 `next` を渡す
3. getButtons3  
    3.1 `answered === true` のとき `NextButton` コンポーネントを返却する  
    3.2 `NextButton` コンポーネントの `onClickNextGame` 属性に引数 `nextGame` を渡す
4. getButtons4  
    4.1 `answered === false` のとき `Border7Buttons` コンポーネントを返却する  
    4.2 `Border7Buttons` コンポーネントの `onClickOver` 属性に引数 `() => check(0)` を渡す  
    4.3 `Border7Buttons` コンポーネントの `onClickUnder` 属性に引数 `() => check(1)` を渡す  
    4.4 `Border7Buttons` コンポーネントの `onClickEven` 属性に引数 `() => check(2)` を渡す  

### HINT
* 「4.2」等で `check` に渡す数値は `src/constants/check.js` にまとめて定義しています。

## Test Command
```shell
npm run test components/Controller.test.jsx
```