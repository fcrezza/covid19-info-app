import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import Container from './Container'

function Loader() {
	return (
		<Container>
			<BeatLoader color="#d53f8c" />
		</Container>
	)
}

export default Loader
