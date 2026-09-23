import { useState } from "react"; // Added useState
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

// Core Components
import Calculator from "./components/calculator/Calculator";
import Emi from "./components/emi/Emi";
import Expense from "./components/expense/Expense";
// Page imports
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Login from "./pages/Login";


function Interview() { return <h2>.NET Interview Q&A</h2>; }

function App() {
  // Lift the collapse state up to the root level
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-container">
      {/* Pass state control as props to the sidebar */}
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Dynamically toggle the margin class based on state changes */}
      <main className={`main-content ${isCollapsed ? "content-collapsed" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emi" element={<Emi />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/my-website" element={<Interview />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
