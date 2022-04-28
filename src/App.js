import "./App.css";
import React from "react";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="card">
      <div className="imageBox">
        <img
          src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="card-profile"
        />
      </div>
      <div className="card-content">
        <div className="details">
          <h2>
            Carlos R. Morales
            <br /> <span>Software Developer</span>
          </h2>
          <div className="social">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
          <div className="data">
            <h3>
              90
              <br />
              <span>Repositories</span>
            </h3>
            <h3>
              2000
              <br />
              <span>Commits</span>
            </h3>
            <h3>
              Phd
              <br />
              <span>Degree</span>
            </h3>
          </div>
          <div className="action-buttons">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
