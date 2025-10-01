import React from "react";  
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">DigiTech Innovation Lab</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/talent">Talent</Link>
        <Link to="/csr">CSR</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
