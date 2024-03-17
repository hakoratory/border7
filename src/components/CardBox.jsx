import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'
import Card from "./Card";

/**
 * CardBoxコンポーネント
 * 1. CardBox関数の引数 suit, rank をオブジェクトリテラルで受け取る
 * 2. src/components/Card.jsx から Cardコンポーネントをインポートする
 * 3. JSX内のコメントで示している箇所に、Cardコンポーネントをレンダーする
 * 4. Cardコンポーネントに、CardBox関数の引数 suit, rank を渡す
 *
 *  Test command
 *  `npm run test components/CardBox.test.jsx`
 *
 * @param suit カードのマーク
 * @param rank カードの数字
 * @returns {JSX.Element} CardBox
 */
export default function CardBox({
  suit,
  rank
}) {
  return (
    <Box id="card-box">
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Card suit={suit} rank={rank} />
        </Grid>
      </Grid>
    </Box>
  )
}

CardBox.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
}
