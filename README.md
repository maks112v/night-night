[![Lambda School Student Badge](https://img.shields.io/badge/Lambda-Student%20Made-lightgrey.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAACXBIWXMAABcRAAAXEQHKJvM/AAAB80lEQVRIib1W7VEDIRRcnPyPFUg6MB0kHZgOSAdeB2oFxg6OCowVmHQQOwgdeBXgPH0k5AGXw6+duR/34FiWXeBUi6slgAn+B5sRACKc/RMhLpLKH2Mkhu8A7H6Z8mT1JOHOeDdPPvkBrNK+j/AsrNInEzLebWq+r/LQKr0G8Bo/Vull0rEHgwlZ2U3SAKys0pdJtYAahfdJ5QtjAE1SLWAQIS9bnLYtJzrgzio96PAYqlCqazK10grUEVqlaSAdl4x3tH1WAFxUNzLBOfQSchhifzqhpFplLyElkENxeDfe7cOL8a5lPwNm57ZJkZBDYKJSxxOQqFJZJATQyoGMd++yE580L1FJs+9ZZAnZ/HgbOA5JCXIfNqXDIEsolqXLDChVkq9PUWnM92wCeXhPeIDqG8N418iJ5VRKhbT+m6GnRh+s0gsAe9mFCNeiRt7tam+BAFJllSa/n8WWImta5b0Ps2lFB3D6lrl05mCVnvI416L5DcCCvP4kxHG915kfKsekvRetVZr8e0wagAfj3SGEB8LaD6P+E1Y1aKIJIQYuDY7ByFlhKbE5K7KEOC4xKboVTeEAn4qjL7SRKhnE84QR8Zy9lSoktkyWbIUqQhzVtoV/GpT8/TZhRBxu+qCWgkGeDv55riJk0hAoSl/2BikCwAd29sihpWiFaQAAAABJRU5ErkJggg==)](https://lambdaschool.com)

# night-night - Make your website sleep at night
----
Night Night is a simple program that allows you to put your website to sleep at bedtime, encouraging your users to go to bed, better supporting their health, wellbeing, and happiness.

# [See Demo](https://nightnight.maksv.me/)

[![NPM](https://img.shields.io/npm/v/night-night.svg)](https://www.npmjs.com/package/night-night) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![Code Size](https://img.shields.io/github/languages/code-size/maks112v/night-night.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/71e7fd2159464413b839cd75d6813c4e)](https://www.codacy.com/app/maks112v/night-night?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maks112v/night-night&amp;utm_campaign=Badge_Grade)

## Install

```bash
npm install --save night-night
yarn add night-night
```

## Usage

```jsx
import React, { Component } from 'react'

import NightNight from 'night-night'

class Example extends Component {
  render () {
    return (
      <NightNight day={6} dayMin={0} night={22} nightMin={0} expireTime={4} />
    )
  }
}
```
## Variables
- day = Start of day hour (0-23)
- dayMin = Start of day min (0-60)
- night = Start of day hour (0-23)
- nightMin = Start of day min (0-60)
- expireTime = Amount of time until Night is disabled (In Hours) for when user continues to site.

## Contribute To Our Project
Help us make everyones life a little bit better and add this to your website. Also add a feature to improve the use for everyone.

- Help Us Style
    - Create a new theme and we will let the user select which theme they want to use.To add to the project fork the github and after adding and testing make a merge request and we will review it.
- Update NPM Package
    - Allow users to customise the project more. Create new or improve current functionality. To add to the project fork the github and after adding and testing make a merge request and we will review it.
- Update JS Version
    - If you don't know react js add your changes to the js file in src and we will port it over to our npm package.

# [Read More](https://nightnight.maksv.me/)

## Versions
- 1.0.0 - 1.0.4
  - Development
  - Added Main Feature Set
  - Added Save Feature
- 1.0.5
  - Added tags
  - Centered Text
  - Added Accent Color
  - Updated Read Me 
  - Bug Fixes
- 1.0.6
  - Updated Read Me File
  - Minor Style Updates
  - Changed Font to Poppins
- 1.0.7 (In Development)
  - Adding Particals with Partical JS
  - Added Multiple Themes

## License

MIT © [maks112v](https://github.com/maks112v)