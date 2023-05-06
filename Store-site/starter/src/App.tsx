import React from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import {Provider} from "react-redux"
function App() {
  return (
    <div className="bg-gray-400 min-h-screen text-center">
     <Provider store={store}>
        <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
         </Routes>
        </BrowserRouter>
     </Provider>
    </div>
  );  
}

export default App;
