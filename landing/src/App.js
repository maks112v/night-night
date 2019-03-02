import React, { Component } from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import { MDBContainer } from 'mdbreact';
import HowTo from './Components/HowTo';
import Footer from './Components/Footer';

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
      <Header enableDemo={this.toggle} />
      <MDBContainer>
        <Features />
        <HowTo />
      </MDBContainer>
      <Footer />
      <NightNight day='06' dayMin='0' night='22' nightMin='0' showToast={true} demoState={this.state.demo} disableDemo={this.toggle} />
      </div>
    );
  }
}

export default App;
