import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route exact path="/" component={Feeling} />
          <Route path="/2" component={Understanding} />
          <Route path="/3" component={Support} />
          <Route path="/4" component={Comment} />
          <Route path="/5" component={Success} />
        </div>
      </Router>
    );
  }
}

export default App;
