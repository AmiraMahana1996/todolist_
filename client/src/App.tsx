import React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./screens/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* <Route path="/about" component={<About/> } />  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
