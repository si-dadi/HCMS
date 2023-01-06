import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import Homepage from "./components/home/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
