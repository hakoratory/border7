import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import Text from '../constants/text'

/**
 * StartButtonコンポーネント
 * 1. StartButton関数の引数 onClickStart をオブジェクトリテラルで受け取る
 * 2. src/hooks/useKeyPressListener.js から useKeyPressListener フックをインポートし、下記の仕様に沿って呼び出す
 * 3. src/components/CustomButton.jsx から CustomButtonコンポーネントをインポートし、下記の仕様に沿ってレンダーする
 *
 * useKeyPressListener仕様
 *   Enterキー、Sキー押下で、StartButton関数の引数 onClickStart が実行されること
 *
 * CustomButton仕様
 *   variant属性に "contained"、onClick属性に StartButton関数の引数 onClickStart を設定する
 *   子要素に "START" を渡す
 *
 *  Test command
 *  `npm run test components/StartButton.test.jsx`
 *
 * @param onClickStart STARTボタン押下時の処理
 * @returns {JSX.Element} StartButtons
 */
export default function StartButton() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* CustomButton */}
    </Box>
  )
}

StartButton.propTypes = {
  onClickStart: PropTypes.func.isRequired
}
