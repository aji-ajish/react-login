import "./App.css";
import Login2 from "./Login2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="form">
    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="signup" element={<Signup />} />
    </Routes>
    </BrowserRouter> */}
    <Login2 />
    </div>
  );
}

export default App;
