import { Box, Typography } from '@mui/material'
import Text from '../constants/text'

/**
 * Titleコンポーネント
 * JSX内のコメントで示している箇所に、Boxコンポーネントをレンダーする
 * 各 Boxコンポーネントは以下の仕様に沿って作成する
 *
 * Box1仕様
 * 　class="h1-header" を設定する
 *   children に ’Border7' を渡す
 * Box2仕様
 *   class="h2-header" を設定する
 *   children に 'with プロプラ!' を渡す
 *
 * HINT：
 *   class属性はReactの文法に書き換える必要があります
 *   childrenに渡す文字列は src/constants/text.js にまとめて定義しています
 *
 *  Test command
 *  `npm run test components/Title.test.jsx`
 * @returns {JSX.Element} Title
 */
export default function Title() {
  return (
    <>
      <Typography variant="h1">{/* Box1 */}</Typography>
      <Typography variant="h2">{/* Box2 */}</Typography>
    </>
  )
}
