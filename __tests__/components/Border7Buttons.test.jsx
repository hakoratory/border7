import { render, screen, fireEvent } from '@testing-library/react'
import Border7Buttons from '../../src/components/Border7Buttons'

describe('Border7Buttonsコンポーネントのテスト', () => {
  test('ラベルが OVER, UNDER, EVEN であること', () => {
    render(
      <Border7Buttons
        onClickOver={() => console.log('no operation')}
        onClickUnder={() => console.log('no operation')}
        onClickEven={() => console.log('no operation')}
      />
    )

    expect(screen.getByText('OVER')).toBeInTheDocument()
    expect(screen.getByText('UNDER')).toBeInTheDocument()
    expect(screen.getByText('EVEN')).toBeInTheDocument()
  })

  test('ボタンクリックでイベントが発火すること', () => {
    const onClickOver = jest.fn()
    const onClickUnder = jest.fn()
    const onClickEven = jest.fn()

    const { getByText } = render(
      <Border7Buttons
        onClickOver={onClickOver}
        onClickUnder={onClickUnder}
        onClickEven={onClickEven}
      />
    )

    const buttonOver = getByText('OVER')
    expect(buttonOver).toBeInTheDocument()

    fireEvent.click(buttonOver)
    expect(onClickOver).toHaveBeenCalledTimes(1)

    const buttonUnder = getByText('UNDER')
    expect(buttonUnder).toBeInTheDocument()

    fireEvent.click(buttonUnder)
    expect(onClickUnder).toHaveBeenCalledTimes(1)

    const buttonEven = getByText('EVEN')
    expect(buttonEven).toBeInTheDocument()

    fireEvent.click(buttonEven)
    expect(onClickEven).toHaveBeenCalledTimes(1)
  })

  test('キープレスでイベントが発火すること', () => {
    const onKeyPressOver = jest.fn()
    const onKeyPressUnder = jest.fn()
    const onKeyPressEven = jest.fn()

    const { getByText } = render(
      <Border7Buttons
        onClickOver={onKeyPressOver}
        onClickUnder={onKeyPressUnder}
        onClickEven={onKeyPressEven}
      />
    )

    const buttonOver = getByText('OVER')
    const buttonUnder = getByText('UNDER')
    const buttonEven = getByText('EVEN')
    expect(buttonOver).toBeInTheDocument()
    expect(buttonUnder).toBeInTheDocument()
    expect(buttonEven).toBeInTheDocument()

    fireEvent.keyDown(buttonOver, { key: 'Enter' })
    fireEvent.keyDown(buttonUnder, { key: 'Enter' })
    fireEvent.keyDown(buttonEven, { key: 'Enter' })
    fireEvent.keyDown(buttonOver, { key: 'o' })
    fireEvent.keyDown(buttonUnder, { key: 'u' })
    fireEvent.keyDown(buttonEven, { key: 'e' })
    expect(onKeyPressOver).toHaveBeenCalledTimes(1)
    expect(onKeyPressUnder).toHaveBeenCalledTimes(1)
    expect(onKeyPressEven).toHaveBeenCalledTimes(1)
  })
})
