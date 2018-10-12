import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feel from '../Feel/Feel';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';

import { connect } from 'react-redux';

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
          <pre>
            {JSON.stringify(this.props.state, null, 2)}
          </pre>
          <br />
          <Route exact path="/" component={Feel} />
          <Route exact path="/2" component={Understand} />
          <Route exact path="/3" component={Support} />
          <Route exact path="/4" component={Comment} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(App);
