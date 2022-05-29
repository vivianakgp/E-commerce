import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// pages
import Home from "./pages/home/HomePage";
//components
import LoadingScreen from "./components/loading-screen/Loading.screen";
import Menu from "./components/menu/Menu";

import "./App.css";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  console.log(isLoading);
  return (
    <div className="App">
      {isLoading && <LoadingScreen />}
      <Menu />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
      <Route path="/about/team" element={<Team />} /> */}
        </Routes>
      </HashRouter>
      <footer>foooteeerr</footer>
    </div>
  );
};

export default App;
