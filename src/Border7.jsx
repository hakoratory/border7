import Container from './components/Container'
import PlayArea from './components/PlayArea'
import { useBorder7 } from './hooks/useBorder7'
import CardBox from './components/CardBox'
import MessageBox from './components/MessageBox'
import Controller from './components/Controller'
import ScoreBoard from './components/ScoreBoard'

/**
 * Border7 Component
 * 1. useBorder7 hook を宣言する。戻り値は state, action という名前で受け取る
 * 2. JSX内のコメントを参考に CardBox, MessageBox, Controller, ScoreBoard の各コンポーネントをレンダーする
 * 3. 以下の仕様にしたがって、CardBox, MessageBox, Controller, ScoreBoard の各コンポーネントにpropsを渡す
 *
 * CardBox仕様
 *   state.card が null でないときにレンダーする
 *   props.suit に state.card.suit, props.rank に state.card.rank を渡す
 *
 * MessageBox1仕様
 *   state.isGameStarted が true のときにレンダーする
 *   props.message に action.getMessage() を渡す
 *
 * Controller仕様
 *   Controller Component の props の定義にしたがって、state, action をセットする
 *   ※src/components/Controller.jsx の jsDoc または propType を参照
 *
 * MessageBox2仕様
 *   state.isGameStarted が true かつ state.isGameFinished が false のときにレンダーする
 *   props.message に action.getRemainingCard() を渡す
 *
 * ScoreBoard仕様
 *   props.score に action.getScore() を渡す
 *
 * @returns {JSX.Element} Border7
 */
export default function Border7() {
  return (
    <Container>
      <PlayArea>
        {/* CardBox */}
        {/* MessageBox1 */}
        {/* Controller */}
        {/* MessageBox2 */}
      </PlayArea>
      {/* ScoreBoard */}
    </Container>
  )
}
