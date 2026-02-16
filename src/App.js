import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./containers/Dashboard/Dashboard";
import About from "./components/About/About";
import axios from "axios";
import './App.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL//`http://localhost:8000/`
});

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard api={api} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
