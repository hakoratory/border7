import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import Text from '../constants/text'

/**
 * Border7Buttonsコンポーネント
 * 1. Border7Buttons関数の引数 onClickOver, onClickUnder, onClickEven をオブジェクトリテラルで受け取る
 * 2. src/hooks/useKeyPressListener.js から useKeyPressListenerフックをインポートし、下記の仕様に沿って呼び出す
 * 3. src/components/CustomButton.jsx から CustomButtonコンポーネントをインポートし、下記の仕様に沿ってレンダーする
 *
 * useKeyPressListener仕様
 *   - Enterキー、Oキー押下で、Border7Buttons関数の引数 onClickOver が実行されること
 *   - Enterキー、Uキー押下で、Border7Buttons関数の引数 onClickUnder が実行されること
 *   - Enterキー、Eキー押下で、Border7Buttons関数の引数 onClickEven が実行されること
 *
 * CustomButton仕様
 *   - OVERボタン：
 *     variant属性に "contained"、onClick属性に Border7Buttons関数の引数 onClickOver を設定する
 *     子要素に "OVER" を渡す
 *  - UNDERボタン：
 *     variant属性に "contained"、onClick属性に Border7Buttons関数の引数 onClickUnder を設定する
 *     子要素に "UNDER" を渡す
 *  - EVENボタン：
 *     variant属性に "contained"、onClick属性に Border7Buttons関数の引数 onClickEven を設定する
 *     子要素に "EVEN" を渡す
 *
 *  Test command
 *  `npm run test components/Border7Buttons.test.jsx`
 *
 * @param onClickOver OVERボタン押下時の処理
 * @param onClickUnder UNDERボタン押下時の処理
 * @param onClickEven EVENボタン押下時の処理
 * @returns {JSX.Element} Border7Buttons
 */
export default function Border7Buttons() {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box mx={1}>{/* CustomButton(OVER) */}</Box>
      <Box mx={1}>{/* CustomButton(EVEN) */}</Box>
      <Box mx={1}>{/* CustomButton(UNDER) */}</Box>
    </Box>
  )
}

Border7Buttons.propTypes = {
  onClickOver: PropTypes.func.isRequired,
  onClickUnder: PropTypes.func.isRequired,
  onClickEven: PropTypes.func.isRequired
}
