import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemManager from "./components/ItemManager";
import FunctionalComponent from "./Pages/ComponentsTut/FunctionalComponent";
import ClassComponentsTut from "./Pages/ComponentsTut/ClassComponentsTut";
import Effect from "./Pages/Effect/Effect";
import Ref from "./Pages/Ref/Ref";
import Props from "./Pages/Props/Props";
import State from "./Pages/State/State";
import Jsx from "./Pages/JSX/Jsx";
function App() {



    const navStyle = {
        backgroundColor: "#333",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px"
      };
    
      const ulStyle = {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
      };
    
      const liStyle = {
        margin: "0 15px",
      };
    
      const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500",
        transition: "color 0.3s ease",
      };
    
      const linkHoverStyle = {
        color: "#f0a500",
      };
    return (
        <Router>
            <div className="container">
                <h1>Welcome to the Lecture</h1>

                {/* Navigation Links */}
                <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/components/functional" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Functional Component</Link>
        </li>
        <li style={liStyle}>
          <Link to="/components/class" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Class Component</Link>
        </li>
        <li style={liStyle}>
          <Link to="/jsx" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Jsx</Link>
        </li>
        <li style={liStyle}>
          <Link to="/state" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>State</Link>
        </li>
        <li style={liStyle}>
          <Link to="/ref" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Ref</Link>
        </li>
        <li style={liStyle}>
          <Link to="/effect" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Effect</Link>
        </li>
        <li style={liStyle}>
          <Link to="/props" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Props</Link>
        </li>
        <li style={liStyle}>
          <Link to="/items" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = "#fff"}>Items</Link>
        </li>
      </ul>
    </nav>

                {/* Routes */}
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<h2>Welcome to the Lecture!</h2>} />

                    {/* Components Routes */}
                    <Route path="/components/functional" element={<FunctionalComponent />} />
                    <Route path="/components/class" element={<ClassComponentsTut />} />

                    {/* Other Routes */}

                    <Route path="/jsx" element={<Jsx />} />
                    <Route path="/state" element={<State />} />
                    <Route path="/ref" element={<Ref />} />
                    <Route path="/effect" element={<Effect />} />
                    <Route path="/props" element={<Props />} />
                    <Route path="/items" element={<ItemManager />} />

                    {/* 404 Route */}
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;