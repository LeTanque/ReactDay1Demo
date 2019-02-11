import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Content from "./components/Content";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
