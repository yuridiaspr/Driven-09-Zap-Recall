import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import icone_quase from "../assets/img/icone_quase.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_certo from "../assets/img/icone_certo.png";

function MakeQuestions(Indice) {
  return (
    <div className="pergunta-fechada">
      <p>Pergunta {Indice + 1}</p>
      <img src={seta_play} alt="logo seta" />
    </div>
  );
}

export default function Questions({ DeckEscolhido }) {
  console.log(DeckEscolhido);
  return <>{DeckEscolhido.map((s, index) => MakeQuestions(index))}</>;
}
