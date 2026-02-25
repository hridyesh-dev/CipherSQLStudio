import "./SampleDataViewer.scss";

const SampleDataViewer = ({ schema }) => {
  return (
    <div className="sample-viewer">
      <h3>Table Schema</h3>
      <pre>{schema}</pre>
    </div>
  );
};

export default SampleDataViewer;