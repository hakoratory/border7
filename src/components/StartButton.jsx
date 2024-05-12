import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import CustomButton from './CustomButton'

export default function StartButton() {
  // 1. useKeyPressListener

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* 2. CustomButton */}
      <CustomButton variant="contained"></CustomButton>
    </Box>
  )
}

StartButton.propTypes = {
  onClickStart: PropTypes.func.isRequired
}
