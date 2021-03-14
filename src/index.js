import React from 'react'
import {render} from 'react-dom'
import 'typeface-inter'
import 'normalize.css'

import App from './app'
import * as serviceWorker from './serviceWorker'
import './styles/global.scss'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
