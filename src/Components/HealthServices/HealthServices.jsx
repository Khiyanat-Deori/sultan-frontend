const HealthServices = () => {
  const healthServices = [
    "24/7 EMERGENCY MEDICAL SURVICE",
    "AFFORDABLE TREATMENT AND TEST",
    "SPECIAL OFFER ON FULL BODY CHECKUP",
    "QUALITY PROFESSIONAL HIGHER ONLY",
    "QUALIFIED EXPERTS IN THERIR FIELD",
  ];

  return (
    <div className="why-choose-us">
      <div className="why-choose-us-left">
        <h3>Why Sultan Hospital </h3>

        <div className="why-choose-box-container">
          {healthServices.map((department, index) => (
            <div className="why-choose-box" key={index}>
              <div className="why-choose-box-text">
                <strong>{department}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthServices;
