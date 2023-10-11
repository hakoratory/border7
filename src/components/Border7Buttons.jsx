import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { useKeyPressListener } from '../hooks/useKeyPressListener'
import CustomButton from './CustomButton'
import Text from '../constants/text'

export default function Border7Buttons({ onClickOver, onClickUnder, onClickEven }) {
  useKeyPressListener('o', onClickOver)
  useKeyPressListener('u', onClickUnder)
  useKeyPressListener('e', onClickEven)

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box mx={1}>
        <CustomButton variant="contained" onClick={onClickOver}>
          {Text.OVER}
        </CustomButton>
      </Box>
    <Box mx={1}>
      <CustomButton variant="contained" onClick={onClickEven}>
          {Text.EVEN}
      </CustomButton>
    </Box>
      <Box mx={1}>
        <CustomButton variant="contained" onClick={onClickUnder}>
          {Text.UNDER}
        </CustomButton>
      </Box>
    </Box>
  )
}

Border7Buttons.propTypes = {
  onClickOver: PropTypes.func.isRequired,
  onClickUnder: PropTypes.func.isRequired,
  onClickEven: PropTypes.func.isRequired
}
