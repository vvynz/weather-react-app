import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Weather App</h1>
      </header>
      <div className="App-body">
      <SearchEngine defaultCity="Toronto" />
      </div>
      <footer>
        <a href="https://github.com/vvynz/weather-react-app" target="_blank" rel="noreferrer">Open-source code, </a> by <a href="https://vivianzhang.netlify.app/" target="_blank" rel="noreferrer">Vivian Zhang</a>
      </footer>
    </div>
  );
}

export default App;
