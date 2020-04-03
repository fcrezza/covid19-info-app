import React from 'react'
import {Heading} from '@chakra-ui/core'

const Title = ({children}) => (
	<Heading size="2xl" color="pink.500" textTransform="uppercase">
		{children}
	</Heading>
)

export default Title
