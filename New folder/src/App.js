import React from 'react';
import TitleBar from "./TitleBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitleBar />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
