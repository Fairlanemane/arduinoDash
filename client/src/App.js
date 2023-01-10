import React from "react";
import Navigation from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropmenu from "./Components/Dropmenu";
import Tabbar from "./Components/Tabbar";
import Dashboard from "./Components/Dashboard";

const styles = {
  h1: {
    color: "red",
  },
};

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
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
