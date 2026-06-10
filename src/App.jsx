import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function Emi() {
  return <h2>EMI Calculator</h2>;
}
function Todo() {
  return <h2>Todo App</h2>;
}
function Expense() {
  return <h2>Expense Manager</h2>;
}
function Interview() {
  return <h2>.NET Interview Q&A</h2>;
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emi" element={<Emi />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </>
  );
}

export default App;