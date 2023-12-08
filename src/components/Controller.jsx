import PropTypes from 'prop-types'
import NextButton from './NextButton'
import Border7Buttons from './Border7Buttons'
import Check from '../constants/check'
import StartButton from './StartButton'
import NextGameButton from './NextGameButton'

/**
 * Controllerコンポーネント
 * 1. Controller関数の引数(@param)をオブジェクトリテラルで受け取る
 * 2. 以下の仕様に沿って getButtons関数を実装する
 *
 * getButtons関数仕様
 *   以下記載のとおり、各フラグ(isGameStarted, isGameFinished, answered)の値にしたがって、指定したコンポーネントを返却する
 *
 *     isGameStarted === false のとき
 *       StartButtonコンポーネント
 *     isGameFinished === true のとき
 *       NextGameButtonコンポーネント
 *     answered === true のとき
 *       NextButtonコンポーネント
 *     answered === false のとき
 *       Border7Buttonsコンポーネント
 *
 *   返却するコンポーネントはそれぞれクリックイベントで関数を受け取ることを期待している
 *   Controller関数の引数(@param)の記載にしたがって、各コンポーネントに対応する関数を渡す
 *
 *  Test command
 *  `npm run test components/Controller.test.jsx`
 *
 * @param answered OVER, UNDER or EVEN を答えたかどうか
 * @param isGameStarted ゲーム開始フラグ
 * @param isGameFinished ゲーム終了フラグ
 * @param startGame ゲーム開始処理※StartButtonと対応
 * @param next 次のターンに進む処理※NextButtonと対応
 * @param check 正解のチェック処理※Border7Buttonsと対応
 * @param nextGame 次のゲームの開始処理※NextGameButtonと対応
 * @returns {JSX.Element} Controller
 */
export default function Controller() {
  function getButtons() {}

  return getButtons()
}

Controller.propTypes = {
  answered: PropTypes.bool.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
  nextGame: PropTypes.func.isRequired
}
