import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return(
      <div id="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
