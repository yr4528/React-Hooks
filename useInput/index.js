import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";



const App = () => {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
  