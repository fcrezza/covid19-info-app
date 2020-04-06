import React, {useState} from 'react'
import {Box, Flex} from '@chakra-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Cari from './components/Cari'
import SpesificCountry from './components/SpesificCountry'
import News from './components/News'
import Info from './components/Info'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

const App = () => {
	const [toggleFooter, setToggleFooter] = useState(false)

	const handleToggleFooter = () => {
		setToggleFooter((prevState) => !prevState)
	}

	return (
		<Router>
			<Box width="100%" maxWidth="768px" minHeight="100vh" mx="auto" pt="8">
				<Flex
					direction="column"
					height={'calc(100vh - (32px+40px))'}
					px={{base: '4', md: '6'}}
					minHeight="500px"
				>
					<Header />
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/cari" exact>
							<Cari handleToggleFooter={handleToggleFooter} />
						</Route>
						<Route path="/cari/:id">
							<SpesificCountry />
						</Route>
						<Route path="/berita">
							<News />
						</Route>
						<Route path="/info">
							<Info />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</Flex>
				<Footer toggleFooter={toggleFooter} />
			</Box>
		</Router>
	)
}

export default App
