import React, { useCallback, useState } from "react";
import "./App.css";

const totalSteps = 6;

function App(): JSX.Element {
  const [step, setStep] = useState(0);

  const onBackClick = useCallback(() => {
    if (step <= 0) {
      return;
    }

    setStep(step - 1);
  }, [step]);

  const onNextClick = useCallback(() => {
    if (step >= totalSteps) {
      return;
    }

    setStep(step + 1);
  }, [step]);

  return (
    <div className="App ui-container">
      <p>
        Step {step} / {totalSteps}
        <br />
        <button onClick={onBackClick}>Back</button>
        <button onClick={onNextClick}>Next</button>
      </p>
      <div
        className="App-box"
        data-step-1={step >= 1}
        data-step-2={step >= 2}
        data-step-3={step >= 3}
        data-step-4={step >= 4}
        data-step-5={step >= 5}
        data-step-6={step >= 6}
      >
        <span className="ui-borderedText">竈</span>
      </div>
    </div>
  );
}

export default App;
