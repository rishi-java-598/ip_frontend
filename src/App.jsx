import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./components/generic/Home";
import Login from "./components/Login";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected dashboard route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
