import { render } from '@testing-library/react'
import CardBox from '../../src/components/CardBox'

describe('CardBoxコンポーネントのテスト', () => {
  test('カードが１枚表示されていること', () => {
    const { getAllByText } = render(<CardBox suit="♦" rank="K" />)

    const divOfCard = getAllByText('♦K')
    expect(divOfCard).toHaveLength(2)
  })
})
