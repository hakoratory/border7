import { useState } from 'react'
import { getDeck } from '../util'

export const useBorder7 = () => {
    const [deck, setDeck] = useState(getDeck)
    const [card, setCard] = useState(null)
    const [isWin, setIsWin] = useState(null)
    const [answered, setAnswered] = useState(false)
    const [isGameStarted, setIsGameStarted] = useState(false)
    const [isGameFinished, setIsGameFinished] = useState(false)
    const [winCount, setWinCount] = useState(0)
    const [loseCount, setLoseCount] = useState(0)

    function getCard() {
    }

    function startGame() {
    }

    function isOver() {
        return false
    }

    function isEven() {
        return false
    }

    function isUnder() {
        return false
    }

    function check() {
    }

    function next() {
    }

    function getScore() {
        return ''
    }

    function getRemainingCard() {
        return ''
    }

    function getMessage() {
        return ''
    }

    function nextGame() {
    }

    return [
        {
            deck,
            card,
            isWin,
            answered,
            isGameStarted,
            isGameFinished,
            winCount,
            loseCount
        },
        {
            startGame,
            check,
            next,
            getMessage,
            getScore,
            getRemainingCard,
            nextGame
        }
    ]
}