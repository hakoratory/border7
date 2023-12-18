import { Card as MuiCard, Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * Cardコンポーネント
 * 1. Card関数の引数 suit, rank をオブジェクトリテラルで受け取る
 * 2. JSX内のコメントで示している箇所に、Card関数の引数 suit, rank を以下の仕様に沿ってレンダーする
 *
 * Card上：
 *   「♠A」と表示されるようにレンダーする
 * Card中：
 *   「♠」と表示されるようにレンダーする
 * Card下：
 *   「♠A」と表示されるようにレンダーする
 *
 *  Test command
 *  `npm run test components/Card.test.jsx`
 *
 * @param suit トランプのマーク
 * @param rank トランプの数字
 * @returns {JSX.Element} Card
 */
export default function Card() {
  return (
    <MuiCard sx={{ width: '140px', height: '200px' }}>
      <Box
        sx={{ width: '100%', height: '100%' }}
        display="flex"
        flexDirection="column"
      >
        <Box sx={{ height: '30px', marginLeft: '10px' }} alignSelf="flex-start">
          {/* Card上 */}
        </Box>
        <Box sx={{ fontSize: '30px', height: '140px', lineHeight: '140px' }}>
          {/* Card中 */}
        </Box>
        <Box sx={{ height: '30px', marginRight: '10px' }} alignSelf="flex-end">
          {/* Card下 */}
        </Box>
      </Box>
    </MuiCard>
  )
}

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
}
