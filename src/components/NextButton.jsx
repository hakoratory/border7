import PropTypes from 'prop-types'
import Text from '../constants/text'

/**
 * NextButton Component
 * 1. NextButton関数の引数 onClickNext をオブジェクトリテラルで受け取る
 * 2. src/hooks/useKeyPressListener.js をインポートし、下記の仕様に沿って宣言する
 * 3. src/components/CustomButton.jsx をインポートし、下記の仕様に沿ってレンダーする
 *
 * useKeyPressListener仕様
 *   Enterキー、Nキー押下で、NextButton関数の引数 onClickNext が実行されること
 *
 * CustomButton仕様
 *   variant属性に "contained"、onClick属性に NextButton関数の引数 onClickNext を設定する
 *   子要素に "NEXT" を渡す
 *
 *  Test command
 *  `npm run test components/NextButton.test.jsx`
 *
 * @param onClickNext NEXTボタン押下時の処理
 * @returns {JSX.Element} NextButton
 */
export default function NextButton() {
  return <>{/* CustomButton */}</>
}

NextButton.propTypes = {
  onClickNext: PropTypes.func.isRequired
}
