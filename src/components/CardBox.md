# CardBoxコンポーネント

## 入力（引数）
* suit {string} カードのスート（記号）
* rank {string} カードのランク（数字）
## 出力（戻り値）
JSX.Element

## 設計書
1. Card  
    1.1 `suit` 属性に引数 `suit` を渡す  
    1.2 `rank` 属性に引数 `rank` を渡す

## Test Command
```shell
npm run test components/Card.test.jsx
```