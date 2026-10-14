import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div className="step-content">
          <h3>Personal Information</h3>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="first_name">First Name: </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="last_name">Last Name: </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <h3>Car Selection</h3>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="model">Car Model: </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="car_price">Car Price ($): </label>
            <input
              type="number"
              id="car_price"
              name="car_price"
              value={formData.car_price}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <h3>Payment Information</h3>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="card_info">Card Information: </label>
            <input
              type="text"
              id="card_info"
              name="card_info"
              value={formData.card_info}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="expiry_date">Expiry Date: </label>
            <input
              type="text"
              id="expiry_date"
              name="expiry_date"
              placeholder="MM/YY"
              value={formData.expiry_date}
              onChange={handleChange}
              required
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
        </div>
      )}

      <div className="button-group" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            style={{ padding: "10px 16px", background: "#6c757d", color: "#fff", border: "none", cursor: "pointer" }}
          >
            Previous
          </button>
        )}

        {step < 3 && (
          <button
            type="button"
            onClick={nextStep}
            style={{ padding: "10px 16px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer", marginLeft: "auto" }}
          >
            Next
          </button>
        )}

        {step === 3 && (
          <button
            type="submit"
            style={{ padding: "10px 16px", background: "#28a745", color: "#fff", border: "none", cursor: "pointer", marginLeft: "auto" }}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Step;