import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

export default function Border7Buttons() {
  // 1.1 useKeyDownListener
  // 1.2 useKeyDownListener
  // 1.3 useKeyDownListener

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box mx={1}>
        {/* 2. CustomButton */}
        <CustomButton variant="contained"></CustomButton>
      </Box>
    <Box mx={1}>
      {/* 3. CustomButton */}
      <CustomButton variant="contained"></CustomButton>
    </Box>
      <Box mx={1}>
        {/* 4. CustomButton */}
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
