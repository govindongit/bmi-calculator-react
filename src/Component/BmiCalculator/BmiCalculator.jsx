import React, { useState } from "react";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please Enter Both Height and Weight!!");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal Weight";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Over Weight";
    } else {
      bmiStatus = "obesity";
    }
    setStatus(bmiStatus);
  };

  return (
    <div className="container">
      <h1> React BMI Calculator</h1>
      <div className="input-group">
        <label htmlFor="weight">
          <b>Weight (Kg): </b>
          <input
            type="number"
            value={weight}
            placeholder="Enter Your weight"
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="height">
          {" "}
          <b>Height (Cm):</b>
          <input
            type="number"
            value={height}
            placeholder="Enter Your Height"
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi} </h3>
          <h3>Your Status: {status}</h3>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
