import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PasswordPage from "./pages/PasswordPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
