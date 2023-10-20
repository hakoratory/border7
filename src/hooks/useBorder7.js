import { useState } from 'react'
import { getDeck, getRankNum, getMaskCard } from '../util'
import Check from '../constants/check'
import Text from '../constants/text'

/**
 * useBorder7 hook
 *
 *  Test command
 *  `npm run test hooks/useBorder7.test.js`
 */
export const useBorder7 = () => {
  /*
    初期ステートの宣言
    deck: 初期値 src/util.js#getDeck
    card: 初期値 null
    isWin: 初期値 null
    answered: 初期値 false
    isGameStarted: 初期値 false
    isGameFinished: 初期値 false
    winCount: 初期値 0
    loseCount: 初期値 0
   */

  /**
   * getCard関数
   * 以下の仕様に沿って、デッキからカードを１枚引き、引いたカードを返す関数を実装する
   *
   * 1. state.deck からランダムに一つ要素を取得する
   * 2. 取得した要素は state.deck から取り除く
   * 3. 取得した要素を返す
   *
   * @returns {{rank: string, suit: string}}
   */
  function getCard() {}

  /**
   * startGame関数
   * state.isGameStarted を true に更新する
   * state.card を src/util.js#getMaskCard の戻り値で更新する
   */
  function startGame() {}

  /**
   * isOver関数
   * 引数cardRank が 7 より大きいかどうかを真偽値で返す
   *
   * @param cardRank カードの数字
   * @returns {boolean} カードの数字が 7 より大きいかどうか
   */
  function isOver(cardRank) {}

  /**
   * isEven関数
   * 引数cardRank が 7 に等しいかどうかを真偽値で返す
   *
   * @param cardRank カードの数字
   * @returns {boolean}  カードの数字が 7 に等しいかどうか
   */
  function isEven(cardRank) {}

  /**
   * isUnder関数
   * 引数cardRank が 7 より小さいかどうかを真偽値で返す
   *
   * @param cardRank カードの数字
   * @returns {boolean} カードの数字が 7 より小さいかどうか
   */
  function isUnder(cardRank) {}

  /**
   * check関数
   * 以下の仕様に沿って、デッキからカードを1枚引き、答え合わせをする処理を実装する
   *
   * 1. デッキからカードを1枚引き、その値で state.card を更新する
   *    デッキからカードを1枚引く関数は getCard
   * 2. プレイヤーの回答（引数answer）に応じて、引いたカードの数字と 7 とを比較する
   *    7 と比較する関数は isOver, isEven, isUnder
   * 3. プレイヤーが勝った場合は true, 負けた場合は false で state.isWin を更新する
   * 4. プレイヤーの勝敗に応じて state.winCount, state.loseCount をインクリメントする
   * 5. state.answered を true に更新する
   *
   * @param answer ユーザーの回答
   */
  function check(answer) {}

  /**
   * next関数
   * 以下の仕様に沿って、次のターンに進む処理を実装する
   *
   * 1. デッキが0枚のとき
   *   1.1. state.isGameFinished を true に更新する
   *   1.2. state.deck を getDeck の戻り値で更新する
   * 2. それ以外
   *   2.1. state.card を getMaskCard の戻り値で更新する
   *   2.2. state.answered を false に更新する
   *
   */
  function next() {}

  /**
   * getScore関数
   * 以下の出力となるよう、スコア表示の文字列を返す
   *
   * 出力：'Win: 1 Lose: 2'
   *
   * @returns {string} スコア表示の文字列
   */
  function getScore() {}

  /**
   * getRemainingCard関数
   * 以下の出力となるよう、デッキの残り枚数表示の文字列を返す
   *
   * 出力：'49 cards left.'
   *
   * @returns {string} デッキの残り枚数表示の文字列
   */
  function getRemainingCard() {}

  /**
   * getMessage関数
   * 以下の仕様に沿って、メッセージ文字列を返す関数を実装する
   *
   * 1. state.isGameFinished が true のとき、文字列 'Thank you for playing!' を返す
   * 2. state.answered が true のとき
   *   2.1. state.isWin が true のとき、文字列 You Win! を返す
   *   2.2. state.isWin が true のとき、文字列 'You Lose!' を返す
   * 3. それ以外のとき、文字列 'Over or Under?' を返す
   *
   * ※メッセージ文字列は src/constants/text.js に定義している
   *
   * @returns {string} メッセージ文字列
   */
  function getMessage() {}

  /**
   * nextGame関数
   * 以下の仕様に沿って、state をリセットして次のゲームを開始する処理を実装する
   *
   * card: 初期値 getMaskCard の戻り値
   * isWin: 初期値 null
   * answered: 初期値 false
   * isGameStarted: 初期値 true
   * isGameFinished: 初期値 false
   * winCount: 初期値 0
   * loseCount: 初期値 0
   *
   */
  function nextGame() {}

  return [
    {
      deck,
      card,
      isWin,
      answered,
      isGameStarted,
      isGameFinished,
      winCount,
      loseCount
    },
    {
      startGame,
      check,
      next,
      getMessage,
      getScore,
      getRemainingCard,
      nextGame
    }
  ]
}
