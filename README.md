[![Lambda School Student Badge](https://img.shields.io/badge/Lambda-Student%20Made-lightgrey.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAACXBIWXMAABcRAAAXEQHKJvM/AAAB80lEQVRIib1W7VEDIRRcnPyPFUg6MB0kHZgOSAdeB2oFxg6OCowVmHQQOwgdeBXgPH0k5AGXw6+duR/34FiWXeBUi6slgAn+B5sRACKc/RMhLpLKH2Mkhu8A7H6Z8mT1JOHOeDdPPvkBrNK+j/AsrNInEzLebWq+r/LQKr0G8Bo/Vull0rEHgwlZ2U3SAKys0pdJtYAahfdJ5QtjAE1SLWAQIS9bnLYtJzrgzio96PAYqlCqazK10grUEVqlaSAdl4x3tH1WAFxUNzLBOfQSchhifzqhpFplLyElkENxeDfe7cOL8a5lPwNm57ZJkZBDYKJSxxOQqFJZJATQyoGMd++yE580L1FJs+9ZZAnZ/HgbOA5JCXIfNqXDIEsolqXLDChVkq9PUWnM92wCeXhPeIDqG8N418iJ5VRKhbT+m6GnRh+s0gsAe9mFCNeiRt7tam+BAFJllSa/n8WWImta5b0Ps2lFB3D6lrl05mCVnvI416L5DcCCvP4kxHG915kfKsekvRetVZr8e0wagAfj3SGEB8LaD6P+E1Y1aKIJIQYuDY7ByFlhKbE5K7KEOC4xKboVTeEAn4qjL7SRKhnE84QR8Zy9lSoktkyWbIUqQhzVtoV/GpT8/TZhRBxu+qCWgkGeDv55riJk0hAoSl/2BikCwAd29sihpWiFaQAAAABJRU5ErkJggg==)](https://lambdaschool.com)

# night-night - Make your website sleep at night

----
# [See Demo Here](https://nightnight.maksv.me/)
----

> Night Night is a simple program that allows you to put your website to sleep at bedtime, encouraging your users to go to bed, better supporting their health, wellbeing, and happiness.

[![NPM](https://img.shields.io/npm/v/night-night.svg)](https://www.npmjs.com/package/night-night) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save night-night
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
- day = Start of day hour (1-23)
- dayMin = Start of day min (1-60)
- night = Start of day hour (1-23)
- nightMin = Start of day min (1-60)
- expireTime = Amount of time(In Hours) until Night is disabled for when user continues to site.

## License

MIT © [maks112v](https://github.com/maks112v)


# Or Install Js
Or just add the js file from src to your project right before the </body> tag.
