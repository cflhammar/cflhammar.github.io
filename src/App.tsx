import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import StartPage from "./components/StartPage";
import Program from "./components/Program";
import Boende from "./components/Boende";
import Info from "./components/Info";
import Filipstad from "./components/Filipstad";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Router >
            <Header />
            <div className="text-container">
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/boende" element={<Boende />} />
                    <Route path="/ovrig-info" element={<Info />} />
                    <Route path="/filipstad" element={<Filipstad />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
