import Container from "./components/Container";
import PlayArea from "./components/PlayArea";
import {useBorder7} from "./hooks/useBorder7";
import CardBox from "./components/CardBox";
import MessageBox from "./components/MessageBox";
import Controller from "./components/Controller";
import ScoreBoard from "./components/ScoreBoard";

export default function Border7() {
    const [state, action] = useBorder7()

    return (
        <Container>
          <PlayArea>
            {state.card && (
                <CardBox
                    suit={state.card.suit}
                    rank={state.card.rank}
                />
            )}
            {state.isGameStarted && <MessageBox message={action.getMessage()} />}
            <Controller
                answered={state.answered}
                isGameStarted={state.isGameStarted}
                isGameFinished={state.isGameFinished}
                startGame={action.startGame}
                next={action.next}
                check={action.check}
                nextGame={action.nextGame}
            />
            {state.isGameStarted && !state.isGameFinished && <MessageBox message={action.getRemainingCard()} />}
          </PlayArea>
          <ScoreBoard score={action.getScore()} />
        </Container>
    )
}