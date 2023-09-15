import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import StartPage from "./components/Start/StartPage";
import Program from "./components/Program/Program";
import Boende from "./components/Bo/Boende";
import Info from "./components/Info";
import Filipstad from "./components/Filipstad";
import {Button} from "@material-ui/core";

//TODO: fix icon, login cache,
function App() {
    const [pageId, setPageId] = useState(0);
    const [password, setPassword] = useState("");
    const [isVerified, setIsVerified] = useState(true);

    const handleChange = (event: { target: { value: React.SetStateAction<string> | null; }; }) => {
        if (event.target.value != null)  setPassword(event.target.value);
    };

    const validate = () => {
        if (password === "SF2024") setIsVerified(true)
    }

    if (isVerified) {
        return (
            <div className="App" >
                <Router>
                    <Header pageId={pageId} setPageId={setPageId}/>
                    <div className="text-container">
                        <Routes>
                            <Route path="/" element={<StartPage setPageId={setPageId}/>}/>
                            <Route path="/program" element={<Program/>}/>
                            <Route path="/boende" element={<Boende/>}/>
                            <Route path="/ovrig-info" element={<Info/>}/>
                            <Route path="/varmland" element={<Filipstad/>}/>
                        </Routes>
                        <div style={{textAlign:"right", opacity:"30%", paddingTop:"100px"}}>
                            © by Hammar
                        </div>
                    </div>
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
