const Proceadure = ({ step, stepOrder }) => {
  return (
    <div className="step">
      <h3>Step {stepOrder}</h3>
      <p>{step}</p>
    </div>
  );
};

export default Proceadure;
