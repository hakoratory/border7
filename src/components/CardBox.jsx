import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'
import Card from './Card'

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
