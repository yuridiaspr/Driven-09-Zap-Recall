import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import icone_quase from "../assets/img/icone_quase.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_certo from "../assets/img/icone_certo.png";
import { useState } from "react";

function EachQuestion(props) {
  const [IfClicked, setIfClicked] = useState(false); // if the question was clicked
  const [IfClickedAnswer, setIfClickedAnswer] = useState(false); // if the answer was clicked
  const [EachAlreadyClicked, setEachAlreadyClicked] = useState(
    props.ChosenDeckIfKnow
  );

  function QuestionShown(props) {
    ChangeIfKnow();
    if (EachAlreadyClicked === 1) {
      return <WrongQuestion indice={props.indice} />;
    } else if (EachAlreadyClicked === 2) {
      return <AlmostQuestion indice={props.indice} />;
    } else if (EachAlreadyClicked === 3) {
      return <ZapQuestion indice={props.indice} />;
    } else if (
      IfClicked === true &&
      props.AnyOpen <= 1 &&
      IfClickedAnswer === false
    ) {
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
      return (
        <OpenedQuestionAnswer
          ChosenDeckAnswer={props.ChosenDeckAnswer}
          indice={props.indice}
          setAllowClick={props.setAllowClick}
          AlreadyClicked={props.AlreadyClicked}
          AllowClick={props.AllowClick}
        />
      );
    } else {
      return <ClosedQuestion indice={props.indice} />;
    }
  }

  function ClosedQuestion(props) {
    return (
      <div data-identifier="flashcard" className="pergunta-fechada">
        <p data-identifier="flashcard-index-item">
          Pergunta {props.indice + 1}
        </p>
        <img
          onClick={SeeTheQuestion}
          data-identifier="flashcard-show-btn"
          src={seta_play}
          alt="seta play"
        />
      </div>
    );
  }

  function OpenedQuestion(props) {
    return (
      <div className="pergunta-aberta">
        <p data-identifier="flashcard-question">{props.ChosenDeckQuestion}</p>
        <img
          data-identifier="flashcard-turn-btn"
          onClick={SeeTheAnswer}
          src={seta_virar}
          alt="seta virar"
        />
      </div>
    );
  }

  function OpenedQuestionAnswer(props) {
    props.setAllowClick(true);
    if (props.AllowClick === false && props.AlreadyClicked !== 0) {
      props.setAllowClick(false);
    }
    return (
      <div className="pergunta-aberta">
        <p data-identifier="flashcard-answer">{props.ChosenDeckAnswer}</p>
      </div>
    );
  }

  function WrongQuestion(props) {
    return (
      <div className="pergunta-fechada line-through wrong">
        <p data-identifier="flashcard-index-item">
          Pergunta {props.indice + 1}
        </p>
        <img
          data-identifier="flashcard-status"
          src={icone_erro}
          alt="wrong question logo"
        />
      </div>
    );
  }

  function AlmostQuestion(props) {
    return (
      <div className="pergunta-fechada line-through almost">
        <p data-identifier="flashcard-index-item">
          Pergunta {props.indice + 1}
        </p>
        <img
          data-identifier="flashcard-status"
          src={icone_quase}
          alt="almost question logo"
        />
      </div>
    );
  }

  function ZapQuestion(props) {
    return (
      <div className="pergunta-fechada line-through zap">
        <p data-identifier="flashcard-index-item">
          Pergunta {props.indice + 1}
        </p>
        <img
          data-identifier="flashcard-status"
          src={icone_certo}
          alt="zap question logo"
        />
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

  function ChangeIfKnow() {
    if (
      props.AlreadyClicked !== 0 &&
      IfClicked === true &&
      props.AnyOpen <= 1 &&
      IfClickedAnswer === true
    ) {
      setEachAlreadyClicked(props.AlreadyClicked);
      props.setAlreadyClicked(0);
      setIfClickedAnswer(false);
      setIfClicked(false);
      props.setAlreadyClicked(0);
      props.setAnyOpen(0);
    }
  }

  return (
    <QuestionShown
      AlreadyClicked={props.AlreadyClicked}
      ChosenDeckIfKnow={props.ChosenDeckIfKnow}
      AllowClick={props.AllowClick}
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
          AlreadyClicked={props.AlreadyClicked}
          AllowClick={props.AllowClick}
          setAllowClick={props.setAllowClick}
          setAlreadyClicked={props.setAlreadyClicked}
          ChosenDeckQuestion={s.Question}
          ChosenDeckAnswer={s.Answer}
          ChosenDeckIfKnow={s.IfKnow}
          AnyOpen={AnyOpen}
          setAnyOpen={setAnyOpen}
          indice={index}
        />
      ))}
    </>
  );
}
