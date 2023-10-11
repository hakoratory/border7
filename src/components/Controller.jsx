import PropTypes from 'prop-types'
import NextButton from './NextButton'
import Border7Buttons from './Border7Buttons'
import Check from '../constants/check'
import StartButton from './StartButton'
import NextGameButton from "./NextGameButton";

export default function Controller({
  answered,
  isGameStarted,
  isGameFinished,
  startGame,
  next,
  check,
  nextGame
}) {
  function getButtons() {
    if (!isGameStarted) {
      return <StartButton onClickStart={startGame} />
    }
    if (isGameFinished) {
      return <NextGameButton onClickNextGame={nextGame} />
    }
    return answered ? (
      <NextButton onClickNext={next} />
    ) : (
      <Border7Buttons
        onClickOver={() => check(Check.OVER)}
        onClickUnder={() => check(Check.UNDER)}
        onClickEven={() => check(Check.EVEN)}
      />
    )
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
