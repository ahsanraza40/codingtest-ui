import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HospitalsList from "./components/hospitals-list.component";
class App extends Component {
  render() {
    return (
          <Router>
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                      <Link to={"/hospitals"} className="navbar-brand">

                      </Link>
                      <div className="navbar-nav mr-auto">

                      </div>
                    </nav>
                    <div className="container mt-3">
                      <Routes>
                        <Route path="/" element={<HospitalsList />} />

                      </Routes>
                    </div>
          </Router>
        );
  }
}
export default App;