import React, { Component } from 'react';
import Home from './components/Home';
import Upgrade from './components/upgrade/Upgrade';
import Package from './components/package/Package';
import Cost from './components/cost/Cost';
import { Router, Route, browserHistory} from 'react-router';

class AppRouter extends Component {
  render() {
    return (
       <Router history={browserHistory}>
        <Route component={Home}>
            <Route path="/" component={Upgrade} />
            <Route path="/choose-package" component={Package} />
            <Route path="/total-cost" component={Cost} />
        </Route>
    </Router>  
    );
  }
}

export default AppRouter;