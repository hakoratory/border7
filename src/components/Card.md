# Cardコンポーネント

## 入力（引数）
* suit {string} カードのスート（記号）
* rank {string} カードのランク（数字）
## 出力（戻り値）
JSX.Element

## 設計書
1. Box1  
    1.1 「♠6」などの形で表示されるように、`children` に `suit` `rank` を渡す 
2. Box2  
   2.1 「♠」などの形で表示されるように、`children` に `suit` を渡す
3. Box3  
   3.1 「♠6」などの形で表示されるように、`children` に `suit` `rank` を渡す

## Test Command
```shell
npm run test components/Card.test.jsx
```