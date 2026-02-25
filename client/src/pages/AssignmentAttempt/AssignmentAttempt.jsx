import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

import QuestionPanel from "../../components/QuestionPanel/QuestionPanel";
import SampleDataViewer from "../../components/SampleDataViewer/SampleDataViewer";
import SQLEditor from "../../components/SQLEditor/SQLEditor";
import ResultsPanel from "../../components/ResultsPanel/ResultsPanel.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

import "./AssignmentAttempt.scss";

const AssignmentAttempt = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    const fetchAssignment = async () => {
      const res = await api.get(`/assignments/${id}`);
      setAssignment(res.data);
    };
    fetchAssignment();
  }, [id]);

  const handleExecute = async () => {
    try {
      const res = await api.post("/execute", { query });
      setResults(res.data.rows);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error);
      setResults(null);
    }
  };

  const handleHint = async () => {
    const res = await api.post("/hint", {
      question: assignment.question,
      query,
    });
    setHint(res.data.hint);
  };

  if (!assignment) return <p>Loading...</p>;

return (
  <>
    <Navbar />

    <div className="attempt">

      <button
        className="attempt__back"
        onClick={() => navigate("/")}
      >
        Back to Home Page
      </button>

      <div className="attempt__container">

        {/* LEFT SIDE */}
        <div className="attempt__left">
          <QuestionPanel question={assignment.question} />
          <SampleDataViewer schema={assignment.schema} />
        </div>

        {/* RIGHT SIDE */}
        <div className="attempt__right">
          <SQLEditor query={query} setQuery={setQuery} />

          <div className="attempt__actions">
            <button onClick={handleExecute}>Execute</button>
            <button onClick={handleHint}>Get Hint</button>
          </div>

          <ResultsPanel results={results} error={error} />

          {hint && (
            <div className="attempt__hint">
              <h4>Hint</h4>
              <p>{hint}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  </>
);
};

export default AssignmentAttempt;