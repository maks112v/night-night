import React, { Component } from 'react'

import NightNight from 'night-night'

export default class App extends Component {
  render () {
    return (
      <div>
        <NightNight day={6} dayMin={0} night={12} nightMin={0} expireTime={1} />
      </div>
    )
  }
}
