import React from 'react'
import numeral from 'numeral'
import {Flex, Heading, Text, useColorMode} from '@chakra-ui/core'

const Item = ({jumlah, text, color}) => {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.600', dark: 'gray.300'}
	const bgColor = {light: 'green.50', dark: 'gray.700'}

	return (
		<Flex
			rounded="md"
			overflow="auto"
			height={['80px', '120px']}
			flexDirection="column"
			justify="center"
			alignItems="center"
			p={['2', '5']}
			bg={bgColor[colorMode]}
		>
			<Heading fontSize={['22px', '30px']} color={color}>
				{numeral(jumlah).format('0,0')}
			</Heading>
			<Text
				fontSize={['13px', 'md']}
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
