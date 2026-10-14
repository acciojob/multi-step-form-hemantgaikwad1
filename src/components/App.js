import React, { useState } from "react";

import "./../styles/App.css";
import Step from "./Step";

const App = () => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    alert("Form submitted successfully! Check console for details.");
  };

  return (
    <main id="main">
      <div className="form-container" style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
        <h2>Multi-Step Form - Step {step} of 3</h2>
        <Step
          step={step}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default App;