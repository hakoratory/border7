import { renderHook, act } from '@testing-library/react'
import { useBorder7 } from '../../src/hooks/useBorder7'
import { getRankNum } from '../../src/util'

const expectedDeckData = {
  suits: ['♠', '♣', '♦', '❤'],
  ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
}

describe('useBorder7 をテストします。', () => {
  test('初期ステートの確認', () => {
    const { result } = renderHook(() => useBorder7())

    expect(result.current[0].deck).toHaveLength(52)
    // suits * 4, ranks * 13 = 52 パターンをチェック
    // suit + rank が一致する要素を取り出し、一つしかないことを確認。
    // util.js の getDeck で同じテストを行っている。
    // getDeck を使用して初期化していればパスするはず。
    expectedDeckData.suits.forEach((suit) => {
      expectedDeckData.ranks.forEach((rank) => {
        const filteredItem = result.current[0].deck.filter(
          (a) => a.suit + a.rank === suit + rank
        )
        expect(filteredItem).toHaveLength(1)
      })
    })

    expect(result.current[0].card).toBeNull()
    expect(result.current[0].isWin).toBeNull()
    expect(result.current[0].answered).toBeFalsy()
    expect(result.current[0].isGameStarted).toBeFalsy()
    expect(result.current[0].isGameFinished).toBeFalsy()
    expect(result.current[0].winCount).toBe(0)
    expect(result.current[0].loseCount).toBe(0)
  })

  test('ゲーム開始直後のステートの確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })

    // ゲーム開始フラグ
    expect(result.current[0].isGameStarted).toBeTruthy()
    // カードはマスクカード
    // suit, rank ともに '?'
    expect(result.current[0].card).not.toBeNull()
    expect(result.current[0].card.suit).toBe('?')
    expect(result.current[0].card.rank).toBe('?')

    // カードはまだオープンしていないので、デッキは52枚
    expect(result.current[0].deck).toHaveLength(52)

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('Over or Under?')
  })

  test('OVER 選択後のステートの確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 0: OVER
      result.current[1].check(0)
    })

    // カードがオープンカードになっている
    // マスクカードでなく、想定データのいずれかの値がセットされていること
    expect(result.current[0].card).not.toBeNull()
    expect(
      expectedDeckData.suits.includes(result.current[0].card.suit)
    ).toBeTruthy()
    expect(
      expectedDeckData.ranks.includes(result.current[0].card.rank)
    ).toBeTruthy()

    // 現在のステートで勝敗を判定
    // 判定のため、util.js の getRankNum を使用する（A を 1, K を 13 など変換する処理）。
    // この関数は別途テストする。
    const resultIsWin =
      getRankNum(result.current[0].card.rank) > 7
    // 想定勝敗と一致すること
    expect(result.current[0].isWin).toBe(resultIsWin)

    // 勝敗のカウントが期待通りカウントアップされていること
    const winCount = resultIsWin ? 1 : 0
    const loseCount = !resultIsWin ? 1 : 0
    expect(result.current[0].winCount).toBe(winCount)
    expect(result.current[0].loseCount).toBe(loseCount)

    // 回答したかどうかフラグが立っていること
    expect(result.current[0].answered).toBeTruthy()

    // カードが１枚オープンしたので、デッキが１枚減っている
    expect(result.current[0].deck).toHaveLength(51)

    // メッセージが正しく出力されること
    const expectedMessage = resultIsWin ? 'You Win!' : 'You Lose!'
    expect(result.current[1].getMessage()).toBe(expectedMessage)
  })

  test('UNDER 選択後のステートの確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 1: UNDER
      result.current[1].check(1)
    })

    // カードがオープンカードになっている
    // マスクカードでなく、想定データのいずれかの値がセットされていること
    expect(result.current[0].card).not.toBeNull()
    expect(
      expectedDeckData.suits.includes(result.current[0].card.suit)
    ).toBeTruthy()
    expect(
      expectedDeckData.ranks.includes(result.current[0].card.rank)
    ).toBeTruthy()

    // 現在のステートで勝敗を判定
    // 判定のため、util.js の getRankNum を使用する（A を 1, K を 13 など変換する処理）。
    // この関数は別途テストする。
    const resultIsWin =
      getRankNum(result.current[0].card.rank) < 7
    // 想定勝敗と一致すること
    expect(result.current[0].isWin).toBe(resultIsWin)

    // 勝敗のカウントが期待通りカウントアップされていること
    const winCount = resultIsWin ? 1 : 0
    const loseCount = !resultIsWin ? 1 : 0
    expect(result.current[0].winCount).toBe(winCount)
    expect(result.current[0].loseCount).toBe(loseCount)

    // 回答したかどうかフラグが立っていること
    expect(result.current[0].answered).toBeTruthy()

    // カードが１枚オープンしたので、デッキが１枚減っている
    expect(result.current[0].deck).toHaveLength(51)

    // メッセージが正しく出力されること
    const expectedMessage = resultIsWin ? 'You Win!' : 'You Lose!'
    expect(result.current[1].getMessage()).toBe(expectedMessage)
  })

  test('EVEN 選択後のステートの確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 2: EVEN
      result.current[1].check(2)
    })

    // カードがオープンカードになっている
    // マスクカードでなく、想定データのいずれかの値がセットされていること
    expect(result.current[0].card).not.toBeNull()
    expect(
      expectedDeckData.suits.includes(result.current[0].card.suit)
    ).toBeTruthy()
    expect(
      expectedDeckData.ranks.includes(result.current[0].card.rank)
    ).toBeTruthy()

    // 現在のステートで勝敗を判定
    // 判定のため、util.js の getRankNum を使用する（A を 1, K を 13 など変換する処理）。
    // この関数は別途テストする。
    const resultIsWin =
      getRankNum(result.current[0].card.rank) === 7
    // 想定勝敗と一致すること
    expect(result.current[0].isWin).toBe(resultIsWin)

    // 勝敗のカウントが期待通りカウントアップされていること
    const winCount = resultIsWin ? 1 : 0
    const loseCount = !resultIsWin ? 1 : 0
    expect(result.current[0].winCount).toBe(winCount)
    expect(result.current[0].loseCount).toBe(loseCount)

    // 回答したかどうかフラグが立っていること
    expect(result.current[0].answered).toBeTruthy()

    // カードが１枚オープンしたので、デッキが１枚減っている
    expect(result.current[0].deck).toHaveLength(51)

    // メッセージが正しく出力されること
    const expectedMessage = resultIsWin ? 'You Win!' : 'You Lose!'
    expect(result.current[1].getMessage()).toBe(expectedMessage)
  })

  test('OVER, UNDER or EVEN を選択後、残り枚数が減っていること', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })

    // メッセージが正しく出力されること
    expect(result.current[1].getRemainingCard()).toBe('52 cards left.')

    act(() => {
      // 1: UNDER
      result.current[1].check(1)
    })

    // メッセージが正しく出力されること
    expect(result.current[1].getRemainingCard()).toBe('51 cards left.')
  })

  test('OVER, UNDER or EVEN を選択後、次のターンに進んだ後のステートの確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 1: UNDER
      result.current[1].check(1)
    })

    act(() => {
      result.current[1].next()
    })

    expect(result.current[0].card.rank).toBe('?')
    expect(result.current[0].card.rank).toBe('?')
    expect(result.current[0].answered).toBeFalsy()

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('Over or Under?')
  })

  test('ゲーム終了後のステート確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })

    // デッキが0枚になるまで繰り返す。
    while (!result.current[0].isGameFinished) {
      act(() => {
        // 1: UNDER
        result.current[1].check(1)
      })
      act(() => {
        result.current[1].next()
      })
    }

    expect(result.current[0].isGameFinished).toBeTruthy()

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('Thank you for playing!')

    // スコアが正しく表示されていること
    const scoreTextRegExp =
      /^Win: [0-9]|[1-4][0-9]|5[0-1] Lose: [0-9]|[1-4][0-9]|5[0-1]$/
    expect(scoreTextRegExp.test(result.current[1].getScore())).toBeTruthy()

    expect(result.current[0].deck).toHaveLength(52)
  })

  test('次ゲーム開始直後のステート確認', () => {
    const { result } = renderHook(() => useBorder7())

    act(() => {
      result.current[1].startGame()
    })

    // デッキが0枚になるまで繰り返す。
    while (!result.current[0].isGameFinished) {
      act(() => {
        // 1: HIGH
        result.current[1].check(1)
      })
      act(() => {
        result.current[1].next()
      })
    }

    act(() => {
      result.current[1].nextGame()
    })

    // ゲーム開始フラグ
    expect(result.current[0].isGameStarted).toBeTruthy()
    // カードはマスクカード
    // suit, rank ともに '?'
    expect(result.current[0].card).not.toBeNull()
    expect(result.current[0].card.suit).toBe('?')
    expect(result.current[0].card.rank).toBe('?')

    // カードはまだオープンしていないので、デッキは52枚
    expect(result.current[0].deck).toHaveLength(52)

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('Over or Under?')
  })
})
