import imagem from "../assets/img/logo.png";
import Footer from "./Footer";
import Questions from "./Questions";
import { useState } from "react";

const deckJavaScript = [
  {
    Question: "O que é JSX?",
    Answer: "Uma extensão de linguagem do JavaScript",
  },
  {
    Question: "O React é __?",
    Answer: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    Question: "Componentes devem iniciar com __",
    Answer: "letra maiúscula",
  },
  {
    Question: "Podemos colocar __ dentro do JSX",
    Answer: "expressões",
  },
  {
    Question: "O ReactDOM nos ajuda __",
    Answer: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    Question: "Usamos o npm para __",
    Answer: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    Question: "Usamos props para __",
    Answer: "passar diferentes informações para componentes",
  },
  {
    Question: "Usamos estado (state) para __",
    Answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

export default function HomeScreen() {
  const ChosenDeckInitial = deckJavaScript;

  const [Concluded, setConcluded] = useState(0);
  const [AllowClick, setAllowClick] = useState(false);
  const [AlreadyClicked, setAlreadyClicked] = useState(false);

  const TotalQuestions = ChosenDeckInitial.length;

  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={imagem} alt="logo zapcall" />
        <h1>ZapRecall</h1>
      </div>

      <Questions setAllowClick={setAllowClick} ChosenDeck={ChosenDeckInitial} />
      <Footer
        setAllowClick={setAllowClick}
        AllowClick={AllowClick}
        TotalQuestions={TotalQuestions}
        Concluded={Concluded}
        setConcluded={setConcluded}
      />
    </div>
  );
}
