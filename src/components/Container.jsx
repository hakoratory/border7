import { Box } from '@mui/material'
import PropTypes from 'prop-types'

export default function Container() {
  // 1. children
  return <Box id="container"></Box>
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}
