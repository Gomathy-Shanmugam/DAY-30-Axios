import React from "react";
import Loginfile from "./Components/Loginfile";
import Registerfile from "./Components/Registerfile";
import Forgotpassword from "./Components/Forgotpassword";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Editfile from "./Components/Editfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginfile></Loginfile>}></Route>
          <Route path="/register" element={<Registerfile />}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/details" element={<Details />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
            <Route path="/edit/:id" element={<Editfile />}></Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
