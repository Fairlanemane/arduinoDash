import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Signin from "./Components/Signin";
import Discussions from "./Components/Discussions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const styles = {
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

  </Routes>
    </div>
</Router>
  );
}

export default App;

//     <Tabbar />
//     <Navigation />
//     <Dropmenu />
//     <h1   style={styles.h1}>hello world</h1>
//     <h1 class="text-3xl font-bold underline">
//   Hello world!
// </h1>
