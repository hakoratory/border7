# useBorder7フック

# getCard関数

## 入力（引数）
なし

## 出力（戻り値）
object {suit: string, rank: string} カードオブジェクト

## 設計書
1. state:deck からランダムに一つ要素を取得する
2. state:deck から取得した要素を削除する  
3. 取得した要素を戻り値として返却する 

# startGame関数

## 入力（引数）
なし

## 出力（戻り値）
なし

## 設計書
1. state:isGameStarted を true に更新する
2. state:card を { suit: '?', rank: '?' } に更新する

# isOver関数

## 入力（引数）
* rank {number} カードの数字

## 出力（戻り値）
* {boolean} カードの数字が 7 より大きいかどうか

## 設計書
1. 引数 rank が 7 より大きいかどうかを判定する
2. 判定結果を戻り値として返却する

# isEven関数

## 入力（引数）
* rank {number} カードの数字

## 出力（戻り値）
* {boolean} カードの数字が 7 かどうか

## 設計書
1. 引数 rank が 7 かどうかを判定する
2. 判定結果を戻り値として返却する

# isUnder関数

## 入力（引数）
* rank {number} カードの数字

## 出力（戻り値）
* {boolean} カードの数字が 7 より小さいかどうか

## 設計書
1. 引数 rank が 7 より小さいかどうかを判定する
2. 判定結果を戻り値として返却する

# check関数

## 入力（引数）
* answer { 0 | 1 | 2 } 0:OVER, 1:EVEN, 2:UNDER

## 出力（戻り値）
なし

## 設計書
1. getCard関数を使用してカードを１枚引く
2. 引いたカードで state:card を更新する
3. 引数 answer が 0:OVER のとき  
  3.1 引いたカードの数字が 7 より大きかどうかを判定する
4. 引数 answer が 1:EVEN のとき  
  4.1 引いたカードの数字が 7 かどうかを判定する
5. 引数 answer が 2:UNDER のとき  
  5.1 引いたカードの数字が 7 より小さいかどうかを判定する
6. state:isWin を上記判定結果で更新する
7. 上記判定結果が true のとき  
  7.1 state:winCount を +1 する
8. 上記判定結果が false のとき  
  8.1 state:loseCount を -1 する
9. state:answered を true に更新する

# next関数

## 入力（引数）
なし

## 出力（戻り値）
なし

## 設計書
1. state:deck の要素数が 0 のとき  
  1.1 state:isGameFinished を true に更新する  
  1.2 state:deck を getDeck関数で更新する
2. それ以外のとき  
  2.1 state:card を getMaskCard関数で更新する  
  2.1 state:answered を false に更新する 

# getScore関数

## 入力（引数）
なし

## 出力（戻り値）
* {string} 勝敗カウント文字列

## 設計書
1. state:winCount, state:loseCount を使用して以下の形式の文字列を返却する  

`'Win: ${winCount} Lose: ${loseCount}''`

# getRemainingCard関数

## 入力（引数）
なし

## 出力（戻り値）
* {string} 山札の残り枚数文字列

## 設計書
1. state:deck を使用して以下の形式の文字列を返却する  

`'${winCount} cards left.''`

# getMessage関数

## 入力（引数）
なし

## 出力（戻り値）
* {string} メッセージ

## 設計書
1. state:isGameFinished が true のとき  
  1.1 `'Thank you for playing!'` を返却する
2. state:answered が true かつ state:isWin が true のとき  
  2.1 `'Win'` を戻り値として返却する
3. state:answered が true かつ state:isWin が false のとき  
  3.1 `'Lose'` を戻り値として返却する
4. それ以外  
  4.1 `'Over or Under?'` を戻り値として返却する

# nextGame関数

## 入力（引数）
なし

## 出力（戻り値）
なし

## 設計書
1. state:card を getMaskCard関数で更新する
2. state:isWin を null に更新する
3. state:answered を false に更新する
4. state:isGameStarted を true に更新する
5. state:isGameFinished を false に更新する
6. state:winCount を 0 に更新する
7. state:loseCount を 0 に更新する

## Test Command
```shell
npm run test hooks/useBorder7.test.js
```