import { useEffect, useState } from "react";
import api from "../../services/api";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import Navbar from "../../components/Navbar/Navbar";
import "./AssignmentList.scss";

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await api.get("/assignments");
        setAssignments(res.data);
      } catch {
        setError("Failed to load assignments");
      }
    };
    fetchAssignments();
  }, []);

  return (
    <>
      <Navbar />
      <div className="assignment-list">
        <h2>SQL Assignments</h2>
        {error && <p>{error}</p>}
        <div className="assignment-list__grid">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AssignmentList;