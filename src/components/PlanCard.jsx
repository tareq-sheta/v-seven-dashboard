const PlanCard = ({ title, description }) => {
  return (
    <div className="plan-card">
      <div className="plan-header">
        <span className="bullet-icon">●</span> {/* Simple circle icon */}
        <h4 className="plan-title">{title}</h4>
      </div>
      <div className="plan-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlanCard;
