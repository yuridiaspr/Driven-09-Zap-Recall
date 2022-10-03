import imagem from "../assets/img/logo.png";
import Footer from "./Footer";
import Questions from "./Questions";
import { useState } from "react";

const deckJavaScript = [
  {
    Question: "O que é JSX?",
    Answer: "Uma extensão de linguagem do JavaScript",
    IfKnow: 0,
  },
  {
    Question: "O React é __?",
    Answer: "uma biblioteca JavaScript para construção de interfaces",
    IfKnow: 0,
  },
  {
    Question: "Componentes devem iniciar com __",
    Answer: "letra maiúscula",
    IfKnow: 0,
  },
  {
    Question: "Podemos colocar __ dentro do JSX",
    Answer: "expressões",
    IfKnow: 0,
  },
  {
    Question: "O ReactDOM nos ajuda __",
    Answer: "interagindo com a DOM para colocar componentes React na mesma",
    IfKnow: 0,
  },
  {
    Question: "Usamos o npm para __",
    Answer: "gerenciar os pacotes necessários e suas dependências",
    IfKnow: 0,
  },
  {
    Question: "Usamos props para __",
    Answer: "passar diferentes informações para componentes",
    IfKnow: 0,
  },
  {
    Question: "Usamos estado (state) para __",
    Answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    IfKnow: 0,
  },
];

export default function HomeScreen() {
  const ChosenDeckInitial = deckJavaScript;

  // const [Opened, setOpened] = useState(0);
  const [Concluded, setConcluded] = useState(0);
  const [AllowClick, setAllowClick] = useState(false);
  const [AlreadyClicked, setAlreadyClicked] = useState(0);

  const TotalQuestions = ChosenDeckInitial.length;

  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={imagem} alt="logo zapcall" />
        <h1>ZapRecall</h1>
      </div>

      <Questions
        // Opened={Opened}
        // setOpened={setOpened}
        setAlreadyClicked={setAlreadyClicked}
        AlreadyClicked={AlreadyClicked}
        AllowClick={AllowClick}
        setAllowClick={setAllowClick}
        ChosenDeck={ChosenDeckInitial}
      />
      <Footer
        setAlreadyClicked={setAlreadyClicked}
        setAllowClick={setAllowClick}
        AllowClick={AllowClick}
        TotalQuestions={TotalQuestions}
        Concluded={Concluded}
        setConcluded={setConcluded}
      />
    </div>
  );
}
