import { Box } from '@mui/material'
import PropTypes from 'prop-types'

export default function PlayArea() {
  // 1. children
  return <Box id="play-area"></Box>
}

PlayArea.propTypes = {
  children: PropTypes.node.isRequired
}
