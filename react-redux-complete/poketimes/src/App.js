import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Route} from "react-router-dom";
import Post from "./components/Post";


class App extends Component {
  state = {
    U : 10
  }

  addNumber() {
    return Math.random()

  }

  render() {

    return (
      <BrowserRouter className="App">
        <div className="app">
          <Navbar idGeneratorFn={this.addNumber} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path="/:postid/:poid" component={Post} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
