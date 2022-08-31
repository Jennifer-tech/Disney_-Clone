import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './component/Header';
import Login from './component/Login';
import Home from './component/Home';
import Detail from './component/Detail'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "login" element={<Login />} />
        <Route path = "detail" element={<Detail />} />
        <Route path = "/" element={<Home />} />
      </Routes>
      <Routes>
      
      </Routes>
    </BrowserRouter>
     
     
    </div>
  );
}

export default App;
