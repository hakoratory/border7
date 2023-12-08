import PropTypes from 'prop-types'
import Text from '../constants/text'

/**
 * NextGameButtonコンポーネント
 * 1. NextGameButton関数の引数 onClickNextGame をオブジェクトリテラルで受け取る
 * 2. src/hooks/useKeyPressListener.js から useKeyPressListener フックをインポートし、下記の仕様に沿って呼び出す
 * 3. src/components/CustomButton.jsx から CustomButtonコンポーネントをインポートし、下記の仕様に沿ってレンダーする
 *
 * useKeyPressListener仕様
 *   Enterキー、Nキー押下で、NextGameButton関数の引数 onClickNextGame が実行されること
 *
 * CustomButton仕様
 *   variant属性に "contained"、onClick属性に NextGameButton関数の引数 onClickNextGame を設定する
 *   子要素に "NEXT GAME" を渡す
 *
 *  Test command
 *  `npm run test components/NextGameButton.test.jsx`
 *
 * @param onClickNextGame NEXT GAMEボタン押下時の処理
 * @returns {JSX.Element} NextGame
 */
export default function NextGameButton() {
  return <>{/* CustomButton */}</>
}

NextGameButton.propTypes = {
  onClickNextGame: PropTypes.func.isRequired
}
