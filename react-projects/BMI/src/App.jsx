import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [gender, setGender] = useState("male");
  const [active, setActive] = useState(true);
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(100);
  const [isWeightInKg, setWeightInKg] = useState(true);
  const [isHeightInCm, setHeightInCm] = useState(true);
  const [bmiResult, setBmiResult] = useState(0.0);
  function calculateBmi() {
    console.log("hi" + bmiResult);

    if (isWeightInKg && isHeightInCm) {
      setBmiResult((weight / (height * height)) * 10000);
    } else {
      setBmiResult((weight / (height * height)) * 703);
    }
  }
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
  const genderButtonActiveStyle = {
    backgroundColor: "orange",
    padding: "10px",
    margin: "10px",
    width: "100px",
  };
  const genderButtonDisabledStyle = {
    ...genderButtonActiveStyle,
    backgroundColor: "lightgrey",
  };
  const measureButtonActiveStyle = {
    backgroundColor: "indigo",
    color: "white",
    width: "55px",
    padding: "5px",
    margin: "5px",
  };
  const measureButtonDisabledStyle = {
    ...measureButtonActiveStyle,
    backgroundColor: "lightgray",
    color: "black",
  };
  return (
    <div className="my-app" style={appStyle}>
      <div
        className="bmi"
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightyellow",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <div className="gender">
          <p>
            Gender:{" "}
            <span>{gender[0].toLocaleUpperCase() + gender.substring(1)}</span>
          </p>
          <button
            style={
              active && gender === "male"
                ? genderButtonActiveStyle
                : genderButtonDisabledStyle
            }
            onClick={() => setGender((prevGender) => (prevGender = "male"))}
          >
            Male
          </button>
          <button
            style={
              active && gender === "female"
                ? genderButtonActiveStyle
                : genderButtonDisabledStyle
            }
            onClick={() => setGender((prevGender) => (prevGender = "female"))}
          >
            Female
          </button>
        </div>
        <div
          className="measures"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "",
          }}
        >
          <div className="height">
            <span>Height :</span>
            <button
              style={
                isHeightInCm
                  ? measureButtonActiveStyle
                  : measureButtonDisabledStyle
              }
              onClick={() => {
                setHeightInCm((prev) => (prev = true));
                setWeightInKg((prev) => (prev = true));
              }}
            >
              cm
            </button>
            <button
              style={
                !isHeightInCm
                  ? measureButtonActiveStyle
                  : measureButtonDisabledStyle
              }
              onClick={() => {
                setHeightInCm((prev) => (prev = false));
                setWeightInKg((prev) => (prev = false));
              }}
            >
              inch
            </button>
            <br />
            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight((prev) => (prev = parseInt(e.target.value)))
              }
            />
            <span style={{ "padding-left": "10px" }}>
              {isHeightInCm ? "cm" : "inch"}
            </span>
          </div>
          <div className="weight">
            <span>Weight :</span>
            <button
              style={
                isWeightInKg
                  ? measureButtonActiveStyle
                  : measureButtonDisabledStyle
              }
              onClick={() => {
                setWeightInKg((prev) => (prev = true));
                setHeightInCm((prev) => (prev = true));
              }}
            >
              kg
            </button>
            <button
              style={
                !isWeightInKg
                  ? measureButtonActiveStyle
                  : measureButtonDisabledStyle
              }
              onClick={() => {
                setWeightInKg((prev) => (prev = false));
                setHeightInCm((prev) => (prev = false));
              }}
            >
              lb
            </button>
            <br />
            <input
              type="number"
              value={weight}
              onChange={(e) =>
                setWeight((prev) => (prev = parseInt(e.target.value)))
              }
            />{" "}
            <span style={{ "padding-left": "10px" }}>
              {isWeightInKg ? "kg" : "lb"}
            </span>
          </div>
        </div>
        <br></br>
        <span className="info">
          Hello, {gender === "male" ? "Mr.," : "Miss.,"} you weigh {weight}{" "}
          {isWeightInKg ? "kilogrammes" : "pounds"} and stand {height}{" "}
          {isHeightInCm ? "cm" : "inches"} tall.
        </span>
        <button style={genderButtonActiveStyle} onClick={calculateBmi}>
          Calculate
        </button>
      </div>
      <div
        className="result"
        style={{
          width: "300px",

          display: "flex",
          marginTop: "10px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <span>BMI = {bmiResult.toFixed(2)}</span>
        <span>
          {bmiResult < 18.5
            ? "Underweight"
            : bmiResult < 25
            ? "Normal"
            : bmiResult < 40
            ? "Overweight"
            : "Obese"}
        </span>
        <span>Adult BMI</span>
        <table style={{ border: "1px solid black" }}>
          <tr>
            <td
              style={{
                border: "1px solid black",
                width: "80px",
                textAlign: "center",
              }}
            >
              BMI
            </td>
            <td
              style={{
                border: "1px solid black",
                width: "80px",
                textAlign: "center",
              }}
            >
              Status
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                width: "80px",
                textAlign: "center",
              }}
            >
              {"≤ 18.4"}
            </td>
            <td
              style={{
                border: "1px solid black",
                width: "80px",
                textAlign: "center",
              }}
            >
              {"Underweight"}
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                width: "80px",
                textAlign: "center",
              }}
            >
              {"18.5 - 24.9"}
            </td>
            <td
              style={{
                border: "1px solid black",
                width: "120px",
                textAlign: "center",
              }}
            >
              {"Normal"}
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                width: "80px",
                textAlign: "center",
              }}
            >
              {"25.0 - 39.9"}
            </td>
            <td
              style={{
                border: "1px solid black",
                width: "120px",
                textAlign: "center",
              }}
            >
              {"Overweight"}
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid black",
                width: "120px",
                textAlign: "center",
                backgroundColor: "pink",
              }}
            >
              {"≥ 40.0"}
            </td>
            <td
              style={{
                border: "1px solid black",
                width: "120px",
                textAlign: "center",
                backgroundColor: "yellow",
              }}
            >
              {"Obese"}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
