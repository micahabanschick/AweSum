import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PagesContainer from './containers/PagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PagesContainer/>
      </div>
    );
  }
}

export default App;
