import cardData from './data/card.json'

/**
 * getDeck関数
 *   cardDataオブジェクトには以下のデータが格納されている
 *     suit: ["♠", "♣", "♦", "❤"]
 *     rank: ["A", "2" ~ "K"]
 *   suit, rank の各配列を使用して、以下のデータ例を参考にトランプのデータを作成する
 *   データ例
 *     [{ suit: "♠", rank: "A" }, { suit: "♠", rank: "2" } ~ { suit: "♠", rank: "K" }, { suit: "♣", rank: "A" } ~ ]
 *
 * @returns {[{rank: string, suit: string}]}
 */
export function getDeck() {}

/**
 * getRankNum関数
 * 引数 rank の値に応じて数値を返す
 *
 * 例："A" -> 1, "2" -> 2, "J" -> 11
 *
 * @param rank トランプの数字
 * @returns {number}
 */
export function getRankNum(rank) {}

/**
 * getMaskCard関数
 * suit = '?', rank = '?' のオブジェクトを返す
 *
 * @returns {{rank: string, suit: string}}
 */
export function getMaskCard() {}
