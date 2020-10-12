import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider, Global} from './utils/theme'
import 'typeface-source-sans-pro'

import App from './app'
import * as serviceWorker from './serviceWorker'

render(
	<React.StrictMode>
		<ThemeProvider>
			<Global />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)

serviceWorker.unregister()
