import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Signin from "./Components/Signin";
import Discussions from "./Components/Discussions";
import Gallery from "./Components/Gallery";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import Yourcart from "./Components/Yourcart";
import Checkoutform from "./Components/Checkoutform";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const styles={
  h1: {
    color: "red",
  },
};

function App() {
  return (
      <Router>
    <div className="App">
      <Dashboard />
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/discussions" element={<Discussions/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/yourcart" element={<Yourcart/>} />
      {/* <Route path="/checkoutform" element={<checkout/>} /> */}



  </Routes>
    </div>
</Router>
  );
}

export default App;
