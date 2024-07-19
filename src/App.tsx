import React from 'react';
import Home from './components/pages/Home';
import {Routes,Route} from "react-router-dom";
import Auth from './components/pages/Auth';
import Register from './components/pages/Register';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
