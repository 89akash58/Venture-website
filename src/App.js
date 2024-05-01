import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" Component={NotFound} />
          <Route path="/venture-website" Component={Home} />
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/product" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
