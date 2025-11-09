import "./Recommended.css";

const Recommended = ({ recommended }) => {
  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="recommended-btns">{recommended}</div>
    </div>
  );
};

export default Recommended;
