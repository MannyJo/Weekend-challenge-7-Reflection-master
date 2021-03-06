import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import CustomAlert from '../CustomAlert/CustomAlert';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Feeling} />
          <Route path="/2" component={Understanding} />
          <Route path="/3" component={Support} />
          <Route path="/4" component={Comment} />
          <Route path="/5" component={Success} />
          <Route path="/admin" component={Admin} />
          <CustomAlert />
        </div>
      </Router>
    );
  }
}

export default App;
