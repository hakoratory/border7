import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'

/**
 * CardBox Component
 * 1. CardBox関数の引数 suit, rank をオブジェクトリテラルで受け取る
 * 2. src/components/Card.jsx をインポートする
 * 3. JSX内のコメントで示している箇所に、Cardをセットする
 * 4. Cardに、CardBox関数の引数 suit, rank を渡す
 *
 *  Test command
 *  `npm run test components/CardBox.test.jsx`
 *
 * @param suit カードのマーク
 * @param rank カードの数字
 * @returns {JSX.Element} CardBox
 */
export default function CardBox() {
  return (
    <Box id="card-box">
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>{/* Card */}</Grid>
      </Grid>
    </Box>
  )
}

CardBox.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
}
