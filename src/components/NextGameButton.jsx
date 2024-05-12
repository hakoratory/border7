import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

export default function NextGameButton() {
  // 1. useKeyPressListener

  return (
    // 2. CustomButton
    <CustomButton variant="contained"></CustomButton>
  )
}

NextGameButton.propTypes = {
  onClickNextGame: PropTypes.func.isRequired
}
