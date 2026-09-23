import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Emi from "./components/emi/Emi";

function Expense() {
  return <h2>Expense Manager</h2>;
}

function Interview() {
  return <h2>.NET Interview Q&A</h2>;
}

function App() {
  return (
    <>
      {/* This component is now fixed to the left edge (220px wide) */}
      <Navbar />

      {/* Main Content Layout Container */}
      <main style={{ marginLeft: "220px", padding: "30px", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emi" element={<Emi />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/my-website" element={<Interview />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;