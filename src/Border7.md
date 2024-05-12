# Border7コンポーネント

## 入力（引数）
なし
## 出力（戻り値）
JSX.Element

## 設計書
1. useBorder7  
    1.1 `src/hooks/useBorder7.js` を呼び出す  
    1.2 戻り値 `state` `action` を分割代入で受け取る
2. CardBox  
    2.1 `state.card` に値があるとき、`CardBox` コンポーネントをレンダーする
    2.2 `suit` 属性に引数 `state.card.suit` を渡す
    2.3 `rank` 属性に引数 `state.card.rank` を渡す
3. MessageBox  
    3.1 `state.isGameStarted` が `true` のとき、`MessageBox` コンポーネントをレンダーする  
    3.2 `message` 属性に引数 `action.getMessage()` を渡す
4. Controller  
    4.1 `answered` 属性に引数 `state.answered` を渡す  
    4.2 `isGameStarted` 属性に引数 `state.isGameStarted` を渡す  
    4.3 `isGameFinished` 属性に引数 `state.isGameFinished` を渡す  
    4.4 `startGame` 属性に引数 `action.startGame` を渡す  
    4.5 `next` 属性に引数 `action.next` を渡す  
    4.6 `check` 属性に引数 `action.check` を渡す  
    4.7 `nextGame` 属性に引数 `action.nextGame` を渡す
5. MessageBox
    5.1 `state.isGameStarted` が `true` かつ `state.isGameFinished` が `false` のとき、`MessageBox` コンポーネントをレンダーする
    5.2 `message` 属性に引数 `action.getRemainingCard()` を渡す
6. ScoreBoard
    6.1 `score` 属性に引数 `action.getScore()` を渡す
