import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import "./App.css";
import "./components/routes/store.css";
const history = createBrowserHistory();

class App extends Component {
  render() {
    ReactGA.initialize("UA-171419667-1");

    // Initialize google analytics page view tracking
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
