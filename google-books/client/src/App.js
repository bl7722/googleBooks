import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Search from "../src/components/pages/search"
import Saved from "../src/components/pages/saved"

function App () {
    return (
      <Router>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component ={Saved}/>
      </Router>
    );
}

export default App;