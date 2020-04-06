import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import "typeface-source-sans-pro";

import * as serviceWorker from "./serviceWorker";
import customTheme from "./customTheme";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider>
				<CSSReset />
				<App />
			</ColorModeProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
