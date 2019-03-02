import React, {Component} from 'react';
import styled from 'styled-components';
import {MDBBtn} from 'mdbreact';

import './Night.css'

const Sleep = styled.div`
  background: #000;
  font-family: Arial, sans-serif;
  color: #fff;
  font-size: 17px;
  padding: 10%;
  position: fixed;
  text-align: center;
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
  color: #2196F3;
  border:none; 
  padding:0!important;
  font: inherit;
  cursor: pointer;
`;

export default class NightNight extends Component {
  constructor(props){
    super(props);
    let d = new Date();
    let enabled = true;
    if(JSON.parse(localStorage.getItem('enabledNightNight')) === false){
      let now = new Date().getTime();
      let expTime = JSON.parse(localStorage.getItem('expNightNight'));
      if(now > expTime){
        localStorage.clear();
      }
      else{
        enabled = JSON.parse(localStorage.getItem('enabledNightNight'));
      }
    }
    this.state = {
      enabled,
      current: d.getHours() * 60 + d.getMinutes(),
      night: Number(props.night) * 60 + Number(props.nightMin),
      day: Number(props.day) * 60 + Number(props.dayMin),
      showToast: props.showToast,
      expireTime: props.expireTime,
      d
    }
    if(this.state.day > this.state.night){
      console.error("WARNING: NightNight: invalid time interval: sleep time is earlier in the day than wakeup time");
    }
  }

  toggle = () => {
    this.setState({
      enabled: !this.state.enabled,
    })
    localStorage.setItem('enabledNightNight', JSON.stringify(false));
    if(this.state.expireTime !== undefined){
      let now = new Date().getTime();
      now = now + Number(this.state.expireTime)*60*60*1000;
      localStorage.setItem('expNightNight', now);
    }
  }

  render(){
    const isNight = (this.state.current >= this.state.night || this.state.current <= this.state.day);
    let suffix = this.props.day < 12 ? "AM" : "PM";
    let time = (this.props.day % 13) + ":" + ("0"+ this.props.dayMin).slice(-2) + " " + suffix;
    if(this.props.demoState){
      return (
        <Sleep className="animated fadeIn">
          <div>It&rsquo;s late&hellip;</div>
          <div>Nothing we can offer you is more important than your sleep.</div>
          <div>Sleep well, sweet dreams, and we will catch you in the morning.</div>
          <WakeUp>This site will wake up at {time}</WakeUp>
          <NightSkip onClick={this.props.disableDemo}>I&rsquo;ll sleep later, I really need to use this site right now.</NightSkip>
          <br/>
          <MDBBtn outline color="primary" onClick={this.props.disableDemo} className="mt-5">Close Demo</MDBBtn>
        </Sleep>
      );
    }
    if(this.state.enabled && isNight){
      return (
        <Sleep className="animated fadeIn">
          <div>It&rsquo;s late&hellip;</div>
          <div>Nothing we can offer you is more important than your sleep.</div>
          <div>Sleep well, sweet dreams, and we will catch you in the morning.</div>
          <WakeUp>This site will wake up at {time}</WakeUp>
          <NightSkip onClick={this.toggle}>I&rsquo;ll sleep later, I really need to use this site right now.</NightSkip>
        </Sleep>
      );
    }
    return(null);
  }
}
