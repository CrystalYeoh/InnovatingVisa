import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import One from './One';
import Two from './Two';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-170777806-1');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <a href="/appOne" >One</a>
          <br />
          <a href="/appTwo" >Two</a>
          <br />
          <br />

          <Switch>
            <Route exact path="/appOne"  ><One /> </Route>
            <Route exact path="/appTwo"  ><Two /> </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;