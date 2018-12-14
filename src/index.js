import React from "react";
import ReactDOM from "react-dom";
import Project from "./project";
import Contact from "./contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

const Index = () => <h2>Home</h2>;
const Projekter = () => <Project />;
const Kontakt = () => <Contact />;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Project">Project</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/Project" component={Projekter} />
        <Route path="/Contact" component={Kontakt} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
