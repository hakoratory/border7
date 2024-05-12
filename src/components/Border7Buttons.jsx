import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

export default function Border7Buttons() {
  // 1.1 useKeyPressListener
  // 1.2 useKeyPressListener
  // 1.3 useKeyPressListener

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box mx={1}>
        {/* 2. CustomButton1 */}
        <CustomButton variant="contained"></CustomButton>
      </Box>
    <Box mx={1}>
      {/* 2. CustomButton2 */}
      <CustomButton variant="contained"></CustomButton>
    </Box>
      <Box mx={1}>
        {/* 2. CustomButton3 */}
        <CustomButton variant="contained"></CustomButton>
      </Box>
    </Box>
  )
}

Border7Buttons.propTypes = {
  onClickOver: PropTypes.func.isRequired,
  onClickUnder: PropTypes.func.isRequired,
  onClickEven: PropTypes.func.isRequired
}
