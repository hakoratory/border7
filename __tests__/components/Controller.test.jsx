import { render } from '@testing-library/react'
import Controller from '../../src/components/Controller'

describe('Controllerコンポーネントのテスト', () => {
  test('ゲーム開始前は START ボタンが表示されていること', () => {
    const { getByText } = render(
      <Controller
        answered={false}
        isGameStarted={false}
        isGameFinished={false}
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const startButton = getByText('START')
    expect(startButton).toBeInTheDocument()
  })

  test('ゲーム開始直後は OVER ボタン、UNDER ボタン、EVEN ボタンが表示されていること', () => {
    const { getByText } = render(
      <Controller
        answered={false}
        isGameStarted
        isGameFinished={false}
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const overButton = getByText('OVER')
    expect(overButton).toBeInTheDocument()

    const underButton = getByText('UNDER')
    expect(underButton).toBeInTheDocument()

    const evenButton = getByText('EVEN')
    expect(evenButton).toBeInTheDocument()
  })

  test('OVER, UNDER or EVEN の選択直後は NEXT ボタンが表示されていること', () => {
    const { getByText } = render(
      <Controller
        answered
        isGameStarted
        isGameFinished={false}
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const nextButton = getByText('NEXT')
    expect(nextButton).toBeInTheDocument()
  })

  test('ゲームが終了したら NEXT GAME ボタンが表示されていること', () => {
    const { queryByText } = render(
      <Controller
        answered={false}
        isGameStarted
        isGameFinished
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const overButton = queryByText('OVER')
    expect(overButton).toBeNull()

    const underButton = queryByText('UNDER')
    expect(underButton).toBeNull()

    const evenButton = queryByText('EVEN')
    expect(evenButton).toBeNull()

    const startButton = queryByText('START')
    expect(startButton).toBeNull()

    const nextButton = queryByText('NEXT')
    expect(nextButton).toBeNull()

    const nextGameButton = queryByText('NEXT GAME')
    expect(nextGameButton).toBeInTheDocument()
  })
})
