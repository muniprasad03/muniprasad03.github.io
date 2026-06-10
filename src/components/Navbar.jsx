import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>{" | "}
      <Link to="/emi">EMI</Link>{" | "}
      <Link to="/todo">Todo</Link>{" | "}
      <Link to="/expense">Expense</Link>{" | "}
      <Link to="/interview">.NET Q&A</Link>
    </nav>
  );
}