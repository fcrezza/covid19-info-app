import React, {Suspense, useCallback, useState} from 'react'
import {Box, Flex} from '@chakra-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './page/Home'
import Search from './page/Search'
import SpesificCountry from './page/SpesificCountry'
import News from './page/News'
import Info from './page/Info'
import NotFound from './page/NotFound'
import Footer from './components/Footer'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'
import Loader from './components/Loader'

function App() {
	const [toggleFooter, setToggleFooter] = useState(false)

	const handleToggleFooter = useCallback(() => {
		setToggleFooter((prevState) => !prevState)
	}, [])

	return (
		<Router>
			<Box width="100%" maxWidth="768px" minHeight="100vh" mx="auto" pt="8">
				<Flex
					direction="column"
					height={'calc(100vh - (32px + 40px))'}
					px={{base: '4', md: '6'}}
					minHeight="500px"
				>
					<Header />
					<Switch>
						<Route path="/" exact>
							<ErrorBoundary>
								<Suspense fallback={<Loader />}>
									<Home />
								</Suspense>
							</ErrorBoundary>
						</Route>
						<Route path="/cari" exact>
							<ErrorBoundary>
								<Suspense fallback={<Loader />}>
									<Search handleToggleFooter={handleToggleFooter} />
								</Suspense>
							</ErrorBoundary>
						</Route>
						<Route path="/cari/:id">
							<ErrorBoundary>
								<Suspense fallback={<Loader />}>
									<SpesificCountry />
								</Suspense>
							</ErrorBoundary>
						</Route>
						<Route path="/berita">
							<ErrorBoundary>
								<Suspense fallback={<Loader />}>
									<News />
								</Suspense>
							</ErrorBoundary>
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
