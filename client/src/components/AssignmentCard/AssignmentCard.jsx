import { useNavigate } from "react-router-dom";
import "./AssignmentCard.scss";

const AssignmentCard = ({ assignment }) => {
  const navigate = useNavigate();

  return (
    <div
      className="assignment-card"
      onClick={() => navigate(`/assignments/${assignment._id}`)}
    >
      <div className="assignment-card__header">
        <h3>{assignment.title}</h3>

        <span
          className={`assignment-card__difficulty assignment-card__difficulty--${assignment.difficulty?.toLowerCase()}`}
        >
          {assignment.difficulty}
        </span>
      </div>

      <p>{assignment.description}</p>
    </div>
  );
};

export default AssignmentCard;