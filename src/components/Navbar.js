import React from "react";
import '../index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </nav>
    );
}

export default Navbar;