// import logo from "./logo.svg";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";

const Hatspage = () => (
  <div>
    <h1>hHATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      {/* <Switch> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/hats" element={<Hatspage />} />

          {/* </Switch> */}
          {/* </BrowserRouter> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
