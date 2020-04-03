import React from 'react'
import {Box} from '@chakra-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Cari from './components/Cari'
import SpesificCountry from './components/SpesificCountry'
import News from './components/News'
import Footer from './components/Footer'

const App = () => {
	return (
		<Router>
			<Box width="100%" maxWidth="768px" minHeight="100vh" mx="auto" pt="8">
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/cari" exact>
						<Cari />
					</Route>
					<Route path="/cari/:id">
						<SpesificCountry />
					</Route>
					<Route path="/berita">
						<News />
					</Route>
					<Route path="/info">
						<Home />
					</Route>
					<Route>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Box>
		</Router>
	)
}

export default App
