import React, {Component} from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import {MDBBtn} from 'mdbreact';

import 'react-toastify/dist/ReactToastify.css';

import './Night.css';

const Sleep = styled.div`
  background: #000;
  font-family: Arial, sans-serif;
  color: #fff;
  font-size: 12px;
  padding: 10%;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2147483647;
`;

const WakeUp = styled.div`
  font-size: 15px;
  font-weight: 900;
  margin-top: 20px;
`;

const NightSkip = styled.button`
  font-style: italic;
  font-size: 14px;
  margin-top: 40px;
  background:none!important;
  color:inherit;
  border:none; 
  padding:0!important;
  font: inherit;
  cursor: pointer;
`;

class NightNight extends Component {
  constructor(props){
    super(props);
    let d = new Date();
    this.state = {
      disabled: (localStorage.getItem('disableNightNight') === null) ? false : true,
      current: d.getHours() * 60 + d.getMinutes(),
      night: Number(props.night) * 60 + Number(props.nightMin),
      day: Number(props.day) * 60 + Number(props.dayMin),
      showToast: props.showToast,
    }
    if(this.state.day > this.state.night){
      console.error("WARNING: NightNight: invalid time interval: sleep time is earlier in the day than wakeup time");
    }
  }

  disableNight = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
    this.updateLocal();
  }

  updateLocal = () => {
    localStorage.setItem('disableNightNight', this.state.disabled);
  }

  render(){
    const isNight = (this.state.current >= this.state.night || this.state.current <= this.state.day);
    let suffix = this.props.day < 12 ? "AM" : "PM";
    let time = (this.props.day % 13) + ":" + ("0"+ this.props.dayMin).slice(-2) + " " + suffix;
    if(this.props.demoState){
      return(
        <Sleep className="animated fadeIn">
          <div>It&rsquo;s late&hellip;</div>
          <div>Nothing we can offer you is more important than your sleep.</div>
          <div>Sleep well, sweet dreams, and we will catch you in the morning.</div>
          <WakeUp>This site will wake up at {time}</WakeUp>
          <NightSkip onClick={this.props.disableDemo}>I&rsquo;ll sleep later, I really need to use this site right now.</NightSkip>
          <br/>
          <MDBBtn outline color="primary" onClick={this.props.disableDemo} className="mt-5">Disable Demo</MDBBtn>
        </Sleep>
      );
    }
    if(this.state.disabled === false && isNight){
      return (
        <Sleep className="animated fadeIn">
          <div>It&rsquo;s late&hellip;</div>
          <div>Nothing we can offer you is more important than your sleep.</div>
          <div>Sleep well, sweet dreams, and we will catch you in the morning.</div>
          <WakeUp>This site will wake up at {time}</WakeUp>
          <NightSkip onClick={this.disableNight}>I&rsquo;ll sleep later, I really need to use this site right now.</NightSkip>
        </Sleep>
      );
    }
    else{
      if( isNight && this.state.showToast){
        toast.warn('Night Night is Disabled. Enable?', { position: "bottom-center", autoClose: 5000, closeButton: false, closeOnClick: false, pauseOnHover: true });
        return (
          <div onClick={this.disableNight}><ToastContainer /></div>
        )
      }
    }
    return(null);
  }
}

export default NightNight;