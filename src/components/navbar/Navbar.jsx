import { Link } from "react-router-dom";
import "./Navbar.css";

// Accept the state control props from App.jsx
export default function Navbar({ isCollapsed, setIsCollapsed }) {
  return (
    <nav className={`sidebar-nav ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapsed && <div className="sidebar-title">React-Vite App</div>}
        <button 
          className="toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Menu" : "Collapse Menu"}
        >
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
      </div>

      <Link to="/" className="sidebar-link">
        <span className="nav-icon">🏠</span>
        {!isCollapsed && <span className="link-text">Home</span>}
      </Link>
      <Link to="/emi" className="sidebar-link">
        <span className="nav-icon">📊</span>
        {!isCollapsed && <span className="link-text">EMI</span>}
      </Link>
      <Link to="/todo" className="sidebar-link">
        <span className="nav-icon">✅</span>
        {!isCollapsed && <span className="link-text">Todo</span>}
      </Link>
      <Link to="/expense" className="sidebar-link">
        <span className="nav-icon">💳</span>
        {!isCollapsed && <span className="link-text">Expense</span>}
      </Link>
      <Link to="/my-website" className="sidebar-link">
        <span className="nav-icon">💻</span>
        {!isCollapsed && <span className="link-text">.NET Q&A</span>}
      </Link>
      <Link to="/calc" className="sidebar-link">
        <span className="nav-icon">🔢</span>
        {!isCollapsed && <span className="link-text">Calculator</span>}
      </Link>
      
      <Link to="/Login" className="sidebar-link login-link">
        <span className="nav-icon">🚪</span>
        {!isCollapsed && <span className="link-text">Login</span>}
      </Link>
    </nav>
  );
}