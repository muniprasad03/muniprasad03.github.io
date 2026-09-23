import { useState } from "react";
import "./Emi.css"; // Import the styling file

export default function Emi() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(60); // in months

  // Standard EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const calculateEmi = () => {
    const P = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(tenure);

    if (!P || !monthlyRate || !N) return 0;

    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
    return Math.round(emi);
  };

  const emiVal = calculateEmi();
  const totalPayment = emiVal * tenure;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="emi-container">
      <h2>EMI Calculator</h2>
      
      <div className="emi-grid">
        {/* Input Controls */}
        <div className="emi-card inputs">
          <div className="input-group">
            <label>Loan Amount (₹)</label>
            <input 
              type="number" 
              value={loanAmount} 
              onChange={(e) => setLoanAmount(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <label>Interest Rate (% P.A.)</label>
            <input 
              type="number" 
              step="0.1"
              value={interestRate} 
              onChange={(e) => setInterestRate(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <label>Tenure (Months)</label>
            <input 
              type="number" 
              value={tenure} 
              onChange={(e) => setTenure(e.target.value)} 
            />
          </div>
        </div>

        {/* Breakdown Output */}
        <div className="emi-card results">
          <div className="result-item highlight">
            <span className="label">Monthly EMI</span>
            <span className="value">₹{emiVal.toLocaleString()}</span>
          </div>
          <hr />
          <div className="result-item">
            <span className="label">Principal Amount</span>
            <span className="value">₹{Number(loanAmount).toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span className="label">Total Interest Payable</span>
            <span className="value">₹{totalInterest > 0 ? totalInterest.toLocaleString() : 0}</span>
          </div>
          <div className="result-item">
            <span className="label">Total Amount Payable</span>
            <span className="value">₹{totalPayment > 0 ? totalPayment.toLocaleString() : 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}