export default function Footer(props) {
  function AddConcluded() {
    props.setConcluded(props.Concluded + 1);
    props.setAllowClick(false);
  }

  return (
    <div className="footer-concluidos">
      <div className="container-botoes">
        <button
          disabled={!props.AllowClick}
          onClick={AddConcluded}
          className="NLembrei"
        >
          Não Lembrei
        </button>
        <button
          disabled={!props.AllowClick}
          onClick={AddConcluded}
          className="QLembrei"
        >
          Quase não Lembrei
        </button>
        <button
          disabled={!props.AllowClick}
          onClick={AddConcluded}
          className="SLembrei"
        >
          Zap!
        </button>
      </div>

      <div className="footer-concluidos-total">
        {props.Concluded}/{props.TotalQuestions} CONCLUÍDOS
      </div>
    </div>
  );
}
