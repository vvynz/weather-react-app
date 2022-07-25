import React from "react";
import SearchEngine from "./Components/SearchEngine";
import "./Styles/App.scss";

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
        This project was coded by <a href="https://github.com/vvynz" target="_blank" rel="noreferrer">Vivian Zhang</a> and is <a href="https://github.com/vvynz/weather-react-app" target="_blank" rel="noreferrer">open-sourced on Github</a>. Weather icons are from <a href="https://github.com/basmilius/weather-icons" target="_blank" rel="noreferrer">basmilius</a>.
      </footer>
    </div>
  );
}

export default App;
