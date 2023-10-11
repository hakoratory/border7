import { useState } from 'react'
import { getDeck, getRankNum, getMaskCard } from '../util'
import Check from '../constants/check'
import Text from '../constants/text'

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
        const index = Math.floor(Math.random() * deck.length)
        const cardObj = deck[index]
        const newDeck = deck.slice()
        newDeck.splice(index, 1)
        setDeck(newDeck)
        return cardObj
    }

    function startGame() {
        setIsGameStarted(true)
        setCard(getMaskCard)
    }

    function isOver(cardRank) {
        return getRankNum(cardRank) > 7
    }

    function isEven(cardRank) {
        return getRankNum(cardRank) === 7
    }

    function isUnder(cardRank) {
        return getRankNum(cardRank) < 7
    }

    function check(answer) {
        const newCard = getCard()
        setCard(newCard)

        let newIsWin = false
        if (Check.OVER === answer) {
            newIsWin = isOver(newCard.rank)
        } else if (Check.UNDER === answer) {
            newIsWin = isUnder(newCard.rank)
        } else {
            newIsWin = isEven(newCard.rank)
        }
        setIsWin(newIsWin)

        if (newIsWin) {
            setWinCount(winCount + 1)
        } else {
            setLoseCount(loseCount + 1)
        }
        setAnswered(true)
    }

    function next() {
        if (deck.length === 0) {
            setIsGameFinished(true)
            // カードを引いた状態で次のゲームを始めるための準備
            setDeck(getDeck)
        } else {
            setCard(getMaskCard)
            setAnswered(false)
        }
    }

    function getScore() {
        return `${Text.WIN}: ${winCount} ${Text.LOSE}: ${loseCount}`
    }

    function getRemainingCard() {
        return `${deck.length} ${Text.CARDS_LEFT}`
    }

    function getMessage() {
        let message
        if (isGameFinished) {
            message = Text.THANK_YOU_FOR_PLAYING
        } else if (answered) {
            message = isWin ? Text.YOU_WIN : Text.YOU_LOSE
        } else {
            message = Text.OVER_OR_UNDER
        }
        return message
    }

    function nextGame() {
        setCard(getMaskCard)
        setIsWin(null)
        setAnswered(false)
        setIsGameStarted(true)
        setIsGameFinished(false)
        setWinCount(0)
        setLoseCount(0)
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