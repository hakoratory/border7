import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function ScoreBoard() {
  return (
    <Box id={'score-board'}>
      {/* 1. Typography */}
      <Typography id={'score-text'} variant={'h4'}></Typography>
    </Box>
  )
}

ScoreBoard.propTypes = {
  score: PropTypes.string.isRequired
}
