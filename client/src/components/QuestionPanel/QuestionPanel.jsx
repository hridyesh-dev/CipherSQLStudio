import "./QuestionPanel.scss";

const QuestionPanel = ({ question }) => {
  return (
    <div className="question-panel">
      <h3>Question</h3>
      <p>{question}</p>
    </div>
  );
};

export default QuestionPanel;