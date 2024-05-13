# StartButtonコンポーネント

## 入力（引数） 
* onClickStart {function} STARTボタン押下時の処理

## 出力（戻り値）
JSX.Element

## 設計書
1. useKeyDownListener  
    1.1 Enterキー押下で `onClickStart` 関数が実行されるよう `src/hooks/useKeyDownListener.js` を呼ぶ  
    1.2 Sキー押下で `onClickStart` 関数が実行されるよう `src/hooks/useKeyDownListener.js` を呼ぶ
2. CustomButton  
    2.1 `onClick` 属性に引数 `onClickStart` を渡す  
    2.2 `children` に `'START'` を渡す

### HINT
* 「2.2」等で `children` に渡す文字列は `src/constants/text.js` にまとめて定義しています。

## Test Command
```shell
npm run test components/StartButton.test.jsx
```