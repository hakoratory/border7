import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

export default function NextGameButton() {
  // 1. useKeyDownListener

  return (
    // 2. CustomButton
    <CustomButton variant="contained"></CustomButton>
  )
}

NextGameButton.propTypes = {
  onClickNextGame: PropTypes.func.isRequired
}
