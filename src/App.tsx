import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";

const BASE_URL = "http://www.colr.org/json/color/random";

function App() {
  const { data, loading, error } = useFetch(BASE_URL);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button>{data?.colors[0]?.hex || "Click me!"}</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
