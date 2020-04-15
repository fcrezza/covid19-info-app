import React from 'react'
import {render} from 'react-dom'
import App from './App'
import {ColorModeProvider, CSSReset, ThemeProvider} from '@chakra-ui/core'
import 'typeface-source-sans-pro'

import * as serviceWorker from './serviceWorker'
import customTheme from './customTheme'

render(
	<React.StrictMode>
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider>
				<CSSReset />
				<App />
			</ColorModeProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)

serviceWorker.register()
