import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import StartPage from "./components/StartPage";
import Program from "./components/Program";
import Boende from "./components/Boende";
import Info from "./components/Info";
import Filipstad from "./components/Filipstad";
import Footer from "./components/Footer/Footer";
import {Button} from "@material-ui/core";

function App() {
    const [pageId, setPageId] = useState(0);
    const [password, setPassword] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    const handleChange = (event: { target: { value: React.SetStateAction<string> | null; }; }) => {
        // 👇 Get input value from "event"
        if (event.target.value != null)  setPassword(event.target.value);
    };

    const validate = () => {
        if (password === "pw") setIsVerified(true)
    }

    if (isVerified) {
        return (
            <div className="App">
                <Router>
                    <Header pageId={pageId} setPageId={setPageId}/>
                    <div className="text-container">
                        <Routes>
                            <Route path="/" element={<StartPage/>}/>
                            <Route path="/program" element={<Program/>}/>
                            <Route path="/boende" element={<Boende/>}/>
                            <Route path="/ovrig-info" element={<Info/>}/>
                            <Route path="/filipstad" element={<Filipstad/>}/>
                        </Routes>
                    </div>
                    <Footer pageId={pageId}/>
                </Router>
            </div>
        )}
    else {
        return (
            <div className="login">
                <div>
                    <p className="helper">Fyll i kod:</p>
                <input
                    type="text"
                    onChange={handleChange}
                />
                </div>
                <div className="login-button">
                <Button onClick={() => validate()} variant="contained">Klicka här!!!</Button>
                </div>
            </div>
        )
    }
}

export default App;
