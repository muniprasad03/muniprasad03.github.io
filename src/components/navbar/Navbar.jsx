import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-title">React-Vite App</div>

      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/emi" className="sidebar-link">EMI</Link>
      <Link to="/todo" className="sidebar-link">Todo</Link>
      <Link to="/expense" className="sidebar-link">Expense</Link>
      <Link to="/my-website" className="sidebar-link">.NET Q&A</Link>
      
      
      <Link to="/Login" className="sidebar-link login-link">Login</Link>
    </nav>
  );
}