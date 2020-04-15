import React from 'react'
import {Flex} from '@chakra-ui/core'

function Container({children}) {
	return (
		<Flex
			flex="1"
			alignItems="center"
			direction="column"
			justify="center"
			textAlign="center"
			mt="-10vh"
		>
			{children}
		</Flex>
	)
}

export default Container
