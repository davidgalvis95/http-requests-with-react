import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
        //Here we encapsulate all the components that need from the routing to be shown
        <BrowserRouter>
          <div className="App">
            <Blog />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
