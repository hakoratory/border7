import PropTypes from 'prop-types'
import NextButton from './NextButton'
import Border7Buttons from './Border7Buttons'
import Check from '../constants/check'
import StartButton from './StartButton'
import NextGameButton from "./NextGameButton";

export default function Controller() {
  function getButtons() {
    // 1. getButtons
    // 2. getButtons
    // 3. getButtons
    // 4. getButtons
  }

  return getButtons()
}

Controller.propTypes = {
  answered: PropTypes.bool.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
  nextGame: PropTypes.func.isRequired
}
