import React from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-500 min-h-screen text-center">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
