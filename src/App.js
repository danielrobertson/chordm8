import React from "react";
import Sidebar from "./Sidebar";
import Chords from "./Chords";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Sidebar />
      <Chords />

      <a target="_blank" className="by-a" href="https://danielrobertson.me/">
        <img src="assets/headshot.png" />
        <p>by @danielrobertson</p>
      </a>
    </div>
  );
};

export default App;
