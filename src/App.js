import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Providers from "./components/Providers";
import MainContent from "./components/Main";
import Page from "./components/Page";

import "./App.css";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/page/:title" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
