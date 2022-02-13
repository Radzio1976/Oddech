import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Contact from './components/Contact';
import Navigation  from './components/Navigation';

class App extends React.Component {
  render() {
    return(
      <div id="App">
        <BrowserRouter>
          <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
