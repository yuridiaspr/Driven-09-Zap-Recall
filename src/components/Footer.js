export default function Footer(props) {
  function AddConcluded1() {
    props.setConcluded(props.Concluded + 1);
    console.log("Add Included");
    props.setAllowClick(false);
    props.setAlreadyClicked(1);
  }

  function AddConcluded2() {
    props.setConcluded(props.Concluded + 1);
    props.setAllowClick(false);
    props.setAlreadyClicked(2);
  }

  function AddConcluded3() {
    props.setConcluded(props.Concluded + 1);
    props.setAllowClick(false);
    props.setAlreadyClicked(3);
  }

  return (
    <div className="footer-concluidos">
      <div className="container-botoes">
        <button
          data-identifier="forgot-btn"
          disabled={!props.AllowClick}
          onClick={AddConcluded1}
          className="NLembrei"
        >
          Não Lembrei
        </button>
        <button
          data-identifier="almost-forgot-btn"
          disabled={!props.AllowClick}
          onClick={AddConcluded2}
          className="QLembrei"
        >
          Quase não Lembrei
        </button>
        <button
          data-identifier="zap-btn"
          disabled={!props.AllowClick}
          onClick={AddConcluded3}
          className="SLembrei"
        >
          Zap!
        </button>
      </div>

      <div
        data-identifier="flashcard-counter"
        className="footer-concluidos-total"
      >
        {props.Concluded}/{props.TotalQuestions} CONCLUÍDOS
      </div>
    </div>
  );
}
