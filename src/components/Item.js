import React from 'react'
import numeral from 'numeral'
import {Flex, Heading, Text, useColorMode} from '@chakra-ui/core'

const Item = ({jumlah, text, color}) => {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.600', dark: 'gray.300'}
	const bgColor = {light: 'green.50', dark: 'gray.700'}
	
	return (
		<Flex
			overflow="hidden"
			width="170px"
			height="120px"
			flexDirection="column"
			alignItems="center"
			p="6"
			bg={bgColor[colorMode]}
		>
			<Heading size="xl" color={color}>
				{numeral(jumlah).format('0,0')}
			</Heading>
			<Text
				fontSize="md"
				textTransform="uppercase"
				color={textColor[colorMode]}
				mt="1"
			>
				{text}
			</Text>
		</Flex>
	)
}

export default Item
