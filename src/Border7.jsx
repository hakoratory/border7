import Container from "./components/Container";
import PlayArea from "./components/PlayArea";
import CardBox from "./components/CardBox";
import MessageBox from "./components/MessageBox";
import Controller from "./components/Controller";
import ScoreBoard from "./components/ScoreBoard";

export default function Border7() {
  // 1. useBorder7

  return (
      <Container>
        <PlayArea>
          {/* 2. CardBox */}
          <CardBox/>
          {/* 3. MessageBox */}
          <MessageBox/>
          {/* 4. Controller */}
          <Controller/>
          {/* 5. MessageBox */}
          <MessageBox/>
        </PlayArea>
        {/* 6. ScoreBoard */}
        <ScoreBoard/>
      </Container>
  )
}