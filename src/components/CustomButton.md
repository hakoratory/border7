# CustomButtonコンポーネント

## 入力（引数）
なし

## 出力（戻り値）
JSX.Element

## 設計書
1. style  
    1.1 MUI の styledユーティリティを使用してコンポーネントに以下のスタイルを設定する

```scss
{  
    color: black;
    background-color: silver;
    &:hover {
      background-color: gray;
    }
 }
```

### HINT
* https://mui.com/system/styled/
* CSS を JavaScriptコードの中に書くので `-` を含む `background-color` は、キャメルケースに書き換える必要があります
* `&:hover` は `'&:hover'` とすることで、JSONのキーとして使用することができます
