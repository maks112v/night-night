import React, { Component } from 'react';

import Home from './Home';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './DarkTheme.css';

import NightNight from './Components/NightNight';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: false,
    }
  }

  toggle = () => {
    this.setState({
      demo: !this.state.demo,
    })
  }

  render() {
    return (
      <div>
      <Home toggle={this.toggle} />
      <NightNight day={6} dayMin={0} night={22} nightMin={0} expireTime={1} demoState={this.state.demo} disableDemo={this.toggle} /> 
      </div>
    );
  }
}

export default App;
