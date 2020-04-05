import React from 'react'
import {Flex} from '@chakra-ui/core'

import Title from './Title'

const NotFound = () => {
	return (
		<Flex
			flex="1"
			alignItems="center"
			direction="column"
			justify="center"
			textAlign="center"
			mt="-20vh"
		>
			<Title>404 Not found</Title>
		</Flex>
	)
}

export default NotFound
