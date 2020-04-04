import React from 'react'
import {Box, Flex, Text, useColorMode} from '@chakra-ui/core'
import {Link} from 'react-router-dom'
import {FaHome, FaSearch, FaInfoCircle, FaRegNewspaper} from 'react-icons/fa'

const FooterBtn = ({icon, text, to}) => {
	const {colorMode} = useColorMode()
	const color = {light: 'gray.100', dark: 'gray.200'}

	return (
		<Box
			as={Link}
			to={to}
			p="2"
			display="flex"
			flex="1"
			justify="center"
			flexDirection="column"
			alignItems="center"
		>
			<Box as={icon} color={color[colorMode]} fontSize={["20px","30px"]} />
			<Text mt="1" color={color[colorMode]}>
				{text}
			</Text>
		</Box>
	)
}

const Footer = () => {
	const buttons = [
		{icon: FaHome, text: 'Home', to: '/'},
		{icon: FaSearch, text: 'Cari', to: '/cari'},
		{icon: FaRegNewspaper, text: 'Berita', to: '/berita'},
		{icon: FaInfoCircle, text: 'Info', to: '/info'},
	]

	return (
		<Flex
			bg="pink.500"
			position="fixed"
			bottom="0"
			maxWidth="768px"
			width="100%"
			overflow="hidden"
		>
			{buttons.map(({icon, text, to}) => (
				<FooterBtn key={text} icon={icon} text={text} to={to} />
			))}
		</Flex>
	)
}

export default Footer
