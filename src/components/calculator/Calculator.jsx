import { useState } from "react";
import "./Calculator.css"; // Import the design CSS file

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [resetOnNextInput, setResetOnNextInput] = useState(false);

  // Handles number button entries
  const handleNumber = (num) => {
    if (display === "0" || resetOnNextInput) {
      setDisplay(num);
      setResetOnNextInput(false);
    } else {
      setDisplay(display + num);
    }
  };

  // Handles decimal point insertion
  const handleDecimal = () => {
    if (resetOnNextInput) {
      setDisplay("0.");
      setResetOnNextInput(false);
      return;
    }
    // Prevent adding multiple decimals
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  // Handles math operator configurations (+, -, *, /)
  const handleOperator = (operator) => {
    setResetOnNextInput(false);
    const lastChar = display.trim().slice(-1);
    
    // Check if the last character is already an operator
    if (["+", "-", "*", "/"].includes(lastChar)) {
      setDisplay(display.slice(0, -2) + ` ${operator} `);
    } else {
      setDisplay(display + ` ${operator} `);
    }
  };

  // Clears the engine canvas
  const handleClear = () => {
    setDisplay("0");
    setResetOnNextInput(false);
  };

  // Deletes the last input digit
  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  // Safely evaluates the string math configuration
  const handleCalculate = () => {
    try {
      // Using Function constructor to evaluate safely instead of direct eval()
      const result = new Function(`return ${display}`)();
      
      if (result === undefined || isNaN(result) || !isFinite(result)) {
        setDisplay("Error");
      } else {
        // Limit floating point numbers decimal length
        setDisplay(Number(result.toFixed(4)).toString());
      }
      setResetOnNextInput(true);
    } catch (error) {
      setDisplay("Error");
      setResetOnNextInput(true);
    }
  };

  return (
    <div className="calc-wrapper">
      <h2>Basic Calculator</h2>
      
      <div className="calculator-box">
        {/* Output Screen Canvas */}
        <div className="calc-screen">{display}</div>

        {/* Operational Grid Layout Keys */}
        <div className="calc-buttons">
          <button onClick={handleClear} className="btn operator actions">C</button>
          <button onClick={handleBackspace} className="btn operator actions">⌫</button>
          <button onClick={() => handleOperator("/")} className="btn operator">÷</button>
          <button onClick={() => handleOperator("*")} className="btn operator">×</button>

          <button onClick={() => handleNumber("7")} className="btn">7</button>
          <button onClick={() => handleNumber("8")} className="btn">8</button>
          <button onClick={() => handleNumber("9")} className="btn">9</button>
          <button onClick={() => handleOperator("-")} className="btn operator">-</button>

          <button onClick={() => handleNumber("4")} className="btn">4</button>
          <button onClick={() => handleNumber("5")} className="btn">5</button>
          <button onClick={() => handleNumber("6")} className="btn">6</button>
          <button onClick={() => handleOperator("+")} className="btn operator">+</button>

          <button onClick={() => handleNumber("1")} className="btn">1</button>
          <button onClick={() => handleNumber("2")} className="btn">2</button>
          <button onClick={() => handleNumber("3")} className="btn">3</button>
          
          {/* Large multi-row Equal Action button key alignment */}
          <button onClick={handleCalculate} className="btn equals">=</button>

          <button onClick={() => handleNumber("0")} className="btn zero">0</button>
          <button onClick={handleDecimal} className="btn">.</button>
        </div>
      </div>
    </div>
  );
}