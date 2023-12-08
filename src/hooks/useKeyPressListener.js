import { useEffect } from 'react'

/**
 * useKeyPressListenerフック
 * 1. useKeyPressListener関数の第１引数で key, 第２引数で callback を受け取る
 * 2, useEffect を以下の仕様に沿って実装する
 *
 * click関数を実装する
 *   第１引数 key で指定されたキーコードと同じキーが押された時に、第２引数 callback を実行する
 *
 * KeyDownイベントをウォッチするイベントリスナーを宣言する
 *   第２引数に click関数を渡す
 *   第３引数に { passive: true } を渡す
 *
 * useEffect の clean up 処理で、上記のイベントリスナーを解除する
 *
 * useEffect の第２引数の依存配列に key, callback を追加する
 *
 * @param key KeyDownイベントをウォッチするキーコード
 * @param callback KeyDownイベントで実行したいコールバック関数
 */
export const useKeyPressListener = () => {
  useEffect(() => {
    function click(event) {}
  }, [])
}
