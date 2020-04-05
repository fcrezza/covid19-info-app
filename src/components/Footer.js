import React from 'react'
import {Box, Grid, Text, useColorMode, PseudoBox} from '@chakra-ui/core'
import {NavLink} from 'react-router-dom'
import {FaHome, FaSearch, FaInfoCircle, FaRegNewspaper} from 'react-icons/fa'

const FooterBtn = ({icon, text, to}) => {
	const {colorMode} = useColorMode()
	const color = {light: 'gray.100', dark: 'gray.200'}

	return (
		<PseudoBox
			as={NavLink}
			_hover={{bg: 'pink.700'}}
			_focus={{
				bg: 'pink.700',
			}}
			activeStyle={{bg: 'pink.700'}}
			to={to}
			p="2"
			display="flex"
			justify="center"
			flexDirection="column"
			alignItems="center"
		>
			<Box
				as={icon}
				color={color[colorMode]}
				fontSize={['20px', '23px', '27']}
			/>
			<Text mt="1" color={color[colorMode]}>
				{text}
			</Text>
		</PseudoBox>
	)
}

const Footer = ({toggleFooter}) => {
	const buttons = [
		{icon: FaHome, text: 'Home', to: '/'},
		{icon: FaSearch, text: 'Cari', to: '/cari'},
		{icon: FaRegNewspaper, text: 'Berita', to: '/berita'},
		{icon: FaInfoCircle, text: 'Info', to: '/info'},
	]

	return (
		<Grid
			bg="pink.500"
			position="fixed"
			bottom="0"
			height={toggleFooter && '0'}
			maxWidth="768px"
			width="100%"
			overflow="hidden"
			templateColumns="repeat(4, 1fr)"
		>
			{buttons.map(({icon, text, to}) => (
				<FooterBtn key={text} icon={icon} text={text} to={to} />
			))}
		</Grid>
	)
}

export default Footer
