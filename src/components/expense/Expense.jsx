import { useState } from "react";
import "./Expense.css"; // Import the styling sheet

export default function Expense() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Office Rent", amount: -15000, category: "Rent" },
    { id: 2, text: "Freelance Project", amount: 45000, category: "Salary" },
    { id: 3, text: "Groceries", amount: -4200, category: "Food" },
  ]);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense"); // "income" or "expense"

  // Dynamic Category Icons Map
  const categoryIcons = {
    Food: "🍔",
    Salary: "💰",
    Rent: "🏠",
    Utilities: "💡",
    Entertainment: "🎬",
    Others: "📦",
  };

  // Math Calculations Engines
  const totalBalance = transactions.reduce((acc, item) => acc + item.amount, 0);
  const totalIncome = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const totalExpense = Math.abs(
    transactions.filter((item) => item.amount < 0).reduce((acc, item) => acc + item.amount, 0)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;

    // Force negative number strings for expenses, positive for income structures
    const parsedAmount = type === "expense" ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount));

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parsedAmount,
      category,
    };

    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  return (
    <div className="expense-container">
      <h2>Expense Manager</h2>

      {/* Top Ledger Balance Panels Layout */}
      <div className="balance-card">
        <span className="balance-label">YOUR BALANCE</span>
        <h1 className={`balance-val ${totalBalance >= 0 ? "positive" : "negative"}`}>
          ₹{totalBalance.toLocaleString()}
        </h1>
      </div>

      <div className="ledger-grid">
        <div className="ledger-panel income">
          <h4>INCOME</h4>
          <p>+₹{totalIncome.toLocaleString()}</p>
        </div>
        <div className="ledger-panel expense">
          <h4>EXPENSE</h4>
          <p>-₹{totalExpense.toLocaleString()}</p>
        </div>
      </div>

      {/* Main Structural Layout Split */}
      <div className="expense-content-grid">
        {/* Transaction History Column */}
        <div className="history-section">
          <h3>History</h3>
          <ul className="transaction-list">
            {transactions.map((item) => (
              <li key={item.id} className={`transaction-item ${item.amount > 0 ? "plus" : "minus"}`}>
                <div className="item-details">
                  <span className="cat-icon">{categoryIcons[item.category] || "📦"}</span>
                  <div>
                    <p className="item-text">{item.text}</p>
                    <span className="item-cat-label">{item.category}</span>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="item-amt">
                    {item.amount > 0 ? "+" : "-"}₹{Math.abs(item.amount).toLocaleString()}
                  </span>
                  <button onClick={() => handleDelete(item.id)} className="delete-btn" title="Delete">
                    ❌
                  </button>
                </div>
              </li>
            ))}
            {transactions.length === 0 && <p className="empty-msg">No transactions recorded yet.</p>}
          </ul>
        </div>

        {/* Add Transaction Entry Form Column */}
        <div className="form-section">
          <h3>Add New Transaction</h3>
          <form onSubmit={handleSubmit} className="expense-form">
            <div className="form-group-row">
              <button
                type="button"
                className={`type-toggle income ${type === "income" ? "active" : ""}`}
                onClick={() => setType("income")}
              >
                💰 Income
              </button>
              <button
                type="button"
                className={`type-toggle expense ${type === "expense" ? "active" : ""}`}
                onClick={() => setType("expense")}
              >
                📉 Expense
              </button>
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                placeholder="e.g., Grocery Shopping"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Amount (₹)</label>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1"
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food & Dining</option>
                <option value="Salary">Salary / Income</option>
                <option value="Rent">Rent & Housing</option>
                <option value="Utilities">Utilities & Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}