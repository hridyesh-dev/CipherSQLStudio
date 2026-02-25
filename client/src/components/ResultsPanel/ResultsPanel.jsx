import "./ResultsPanel.scss";

const ResultsPanel = ({ results, error }) => {
  if (error) return <p className="error">{error}</p>;
  if (!results || results.length === 0) return null;

  return (
    <div className="results">
      <h3>Results</h3>
      <table>
        <thead>
          <tr>
            {Object.keys(results[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsPanel;