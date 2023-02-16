import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import { Store } from "./Features/Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
