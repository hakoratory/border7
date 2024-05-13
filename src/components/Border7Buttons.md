# Border7Buttonsコンポーネント

## 入力（引数） 
* onClickOver {function} OVERボタン押下時の処理
* onClickUnder {function} UNDERボタン押下時の処理
* onClickEven {function} EVENボタン押下時の処理

## 出力（戻り値）
JSX.Element

## 設計書
1. useKeyDownListener  
    1.1 Oキー押下で `onClickOver` 関数が実行されるよう `src/hooks/useKeyDownListener.js` を呼ぶ  
    1.2 Uキー押下で `onClickUnder` 関数が実行されるよう `src/hooks/useKeyDownListener.js` を呼ぶ  
    1.3 Eキー押下で `onClickEven` 関数が実行されるよう `src/hooks/useKeyDownListener.js` を呼ぶ
2. CustomButton  
    2.1 `onClick` 属性に引数 `onClickOver` を渡す  
    2.2 `children` に `'OVER'` を渡す
3. CustomButton  
   3.1 `onClick` 属性に引数 `onClickEven` を渡す  
   3.2 `children` に `'EVEN'` を渡す
4. CustomButton  
   4.1 `onClick` 属性に引数 `onClickUnder` を渡す  
   4.2 `children` に `'UNDER'` を渡す

### HINT
* 「2.2」等で `children` に渡す文字列は `src/constants/text.js` にまとめて定義しています。

## Test Command
```shell
npm run test components/Border7Buttons.test.jsx
```