import React from 'react'
import {Text, useColorMode} from '@chakra-ui/core'

const textColor = {light: 'gray.700', dark: 'gray.300'}
const Subtitle = ({children}) => {
	const {colorMode} = useColorMode()

	return (
		<Text fontSize="lg" mt="2" color={textColor[colorMode]}>
			{children}
		</Text>
	)
}

export default Subtitle
