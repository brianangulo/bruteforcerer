import React from "react";
import Main from "./components/Main";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
