import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navigation  from './components/Navigation';
import Home from './components/Home/Home';
import Sessions from './components/Sessions';
import Workshops from './components/Workshops';
import Contact from './components/Contact';


class App extends React.Component {
  render() {
    return(
      <div id="App">
        <BrowserRouter>
          <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sessions" component={Sessions} />
              <Route path="/workshops" component={Workshops} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
