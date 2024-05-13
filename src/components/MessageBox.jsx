import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function MessageBox() {
  return (
    <Box id="message-box">
      {/* 1. Typography */}
      <Typography variant="h5" id="message"></Typography>
    </Box>
  )
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired
}
