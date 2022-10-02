import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import icone_quase from "../assets/img/icone_quase.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_certo from "../assets/img/icone_certo.png";
import { useState } from "react";

function EachQuestion(props) {
  const [IfClicked, setIfClicked] = useState(false); // if the question was clicked
  const [IfClickedAnswer, setIfClickedAnswer] = useState(false); // if the answer was clicked
  const [EachAlreadyClicked, setEachAlreadyClicked] = useState(false);

  function QuestionShown(props) {
    if (IfClicked === true && props.AnyOpen <= 1 && IfClickedAnswer === false) {
      return (
        <OpenedQuestion
          ChosenDeckQuestion={props.ChosenDeckQuestion}
          indice={props.indice}
        />
      );
    } else if (
      IfClicked === true &&
      props.AnyOpen <= 1 &&
      IfClickedAnswer === true
    ) {
      props.setAllowClick(true);
      return (
        <OpenedQuestionAnswer
          ChosenDeckAnswer={props.ChosenDeckAnswer}
          indice={props.indice}
        />
      );
    } else {
      return <ClosedQuestion indice={props.indice} />;
    }
  }

  function ClosedQuestion(props) {
    return (
      <div onClick={SeeTheQuestion} className="pergunta-fechada">
        <p>Pergunta {props.indice + 1}</p>
        <img src={seta_play} alt="seta play" />
      </div>
    );
  }

  function OpenedQuestion(props) {
    console.log("OpenedQuestion");
    return (
      <div onClick={SeeTheAnswer} className="pergunta-aberta">
        <p>{props.ChosenDeckQuestion}</p>
        <img onClick={SeeTheAnswer} src={seta_virar} alt="seta virar" />
      </div>
    );
  }

  function OpenedQuestionAnswer(props) {
    console.log("OpenedQuestionAnswer");
    return (
      <div className="pergunta-aberta">
        <p>{props.ChosenDeckAnswer}</p>
      </div>
    );
  }

  function SeeTheQuestion() {
    if (props.AnyOpen < 1) {
      setIfClicked(true);
      props.setAnyOpen(props.AnyOpen + 1);
    }
  }

  function SeeTheAnswer() {
    setIfClickedAnswer(true);
  }

  return (
    <QuestionShown
      setAllowClick={props.setAllowClick}
      ChosenDeckQuestion={props.ChosenDeckQuestion}
      ChosenDeckAnswer={props.ChosenDeckAnswer}
      AnyOpen={props.AnyOpen}
      setAnyOpen={props.setAnyOpen}
      indice={props.indice}
    />
  );
}

export default function Questions(props) {
  const [AnyOpen, setAnyOpen] = useState(0); // if any question was clicked
  return (
    <>
      {props.ChosenDeck.map((s, index) => (
        <EachQuestion
          setAllowClick={props.setAllowClick}
          ChosenDeckQuestion={s.Question}
          ChosenDeckAnswer={s.Answer}
          AnyOpen={AnyOpen}
          setAnyOpen={setAnyOpen}
          indice={index}
        />
      ))}
    </>
  );
}
