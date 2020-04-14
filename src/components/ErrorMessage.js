import React from 'react'
import {Text, useColorMode} from '@chakra-ui/core'

function ErrorMessage() {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.700', dark: 'gray.300'}
	return (
		<Text color={textColor[colorMode]} mt="2" fontSize="lg" textAlign="center">
			Tidak ada koneksi internet
		</Text>
	)
}

export default ErrorMessage
