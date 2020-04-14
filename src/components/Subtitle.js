import React from 'react'
import {Text, useColorMode} from '@chakra-ui/core'

const textColor = {light: 'gray.700', dark: 'gray.300'}

function Subtitle({children}) {
	const {colorMode} = useColorMode()

	return (
		<Text fontSize={['md', 'lg']} mt="2" color={textColor[colorMode]}>
			{children}
		</Text>
	)
}

export default Subtitle
