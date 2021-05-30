import React, { useState } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

const App = () => {
  const [navToggle, setNavToogle] = useState(false);

  const navClick = () => {
    setNavToogle(!navToggle);
  };
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
