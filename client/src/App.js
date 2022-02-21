import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navigation  from './components/Navigation';
import Home from './components/Home/Home';
import Sessions from './components/Sessions';
import Workshops from './components/Workshops';
import Pricing from './components/Pricing';
import Contact from './components/Contact';


class App extends React.Component {
  render() {
    return(
      <div id="App">
        <BrowserRouter>
          <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/sesje" component={Sessions} />
              <Route path="/warsztaty" component={Workshops} />
              <Route path="/cennik" component={Pricing} />
              <Route path="/kontakt" component={Contact} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
