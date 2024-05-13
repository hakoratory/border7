import PropTypes from 'prop-types'
import CustomButton from './CustomButton'

export default function NextButton() {
  // 1. useKeyDownListener

  return (
    // 2. CustomButton
    <CustomButton variant="contained"></CustomButton>
  )
}

NextButton.propTypes = {
  onClickNext: PropTypes.func.isRequired
}
