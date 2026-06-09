import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Welcome to mpctech.in 🚀</h1>;
}

function Emi() {
  return <h1>EMI Calculator</h1>;
}

function Todo() {
  return <h1>Todo App</h1>;
}

function App() {
  return (
    <>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>{" | "}
        <Link to="/emi">EMI</Link>{" | "}
        <Link to="/todo">Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emi" element={<Emi />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;