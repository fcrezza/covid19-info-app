import React from 'react'
import {normalize} from 'styled-normalize'
import {
	createGlobalStyle,
	ThemeProvider as StyledThemeProvider,
} from 'styled-components'

const colorSchemes = {
	white: '#fff',
	gray: '#d6d8da',
	'gray.50': '#f8f9fa',
	'black.50': '#444444',
	'black.100': '#222',
	'blue.50': '#CBECF0',
	'blue.100': '#3D6CB9',
}

const GlobalStyles = createGlobalStyle`
	${normalize}

	html {
		font-family: Source Sans Pro, sans-serif
	}

	body {
		line-height: 1.5;
	}
`

export function ThemeProvider({children}) {
	return (
		<StyledThemeProvider theme={colorSchemes}>{children}</StyledThemeProvider>
	)
}

export function Global() {
	return <GlobalStyles />
}
