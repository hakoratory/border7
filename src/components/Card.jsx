import { Card as MuiCard, Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * Cardコンポーネント
 * 1. Card関数の引数 suit, rank をオブジェクトリテラルで受け取る
 * 2. JSX内のコメントで示している箇所に、Card関数の引数 suit, rank をセットする
 *    suit, rank は以下の仕様に沿って作成する
 *
 * Card上：
 *   「♠A」と表示されるようにセットする
 * Card中：
 *   「♠」と表示されるようにセットする
 * Card下：
 *   「♠A」と表示されるようにセットする
 *
 *  Test command
 *  `npm run test components/Card.test.jsx`
 *
 * @param suit トランプのマーク
 * @param rank トランプの数字
 * @returns {JSX.Element} Card
 */
export default function Card({ suit, rank }) {
  return (
    <MuiCard sx={{ width: '140px', height: '200px' }}>
      <Box
        sx={{ width: '100%', height: '100%' }}
        display="flex"
        flexDirection="column"
      >
        <Box sx={{ height: '30px', marginLeft: '10px' }} alignSelf="flex-start">
          {suit + rank}
        </Box>
        <Box sx={{ fontSize: '30px', height: '140px', lineHeight: '140px' }}>
          {suit ?? '?'}
        </Box>
        <Box sx={{ height: '30px', marginRight: '10px' }} alignSelf="flex-end">
          {suit + rank}
        </Box>
      </Box>
    </MuiCard>
  )
}

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
}
