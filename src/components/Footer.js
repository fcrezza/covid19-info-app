import React from 'react'
import {Box, Flex, Text, useColorMode, PseudoBox} from '@chakra-ui/core'
import {NavLink, useLocation} from 'react-router-dom'
import {FaHome, FaSearch, FaInfoCircle, FaRegNewspaper} from 'react-icons/fa'

function FooterBtn({icon, text, to, pathname}) {
	const {colorMode} = useColorMode()
	const color = {light: 'gray.100', dark: 'gray.200'}
	const bgColor = pathname === to ? 'pink.700' : 'pink.500'

	return (
		<PseudoBox
			bg={bgColor}
			as={NavLink}
			_hover={{bg: 'pink.700'}}
			_focus={{
				bg: 'pink.700',
			}}
			to={to}
			p="2"
			flex="1"
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

function Footer({toggleFooter, ...rest}) {
	const {pathname} = useLocation()

	const buttonProperties = [
		{icon: FaHome, text: 'Home', to: '/'},
		{icon: FaSearch, text: 'Cari', to: '/cari'},
		{icon: FaRegNewspaper, text: 'Berita', to: '/berita'},
		{icon: FaInfoCircle, text: 'Info', to: '/info'},
	]

	return (
		<Flex
			position="fixed"
			bottom="0"
			height={toggleFooter && '0'}
			maxWidth="768px"
			width="100%"
			overflow="hidden"
		>
			{buttonProperties.map(({icon, text, to}) => (
				<FooterBtn
					key={text}
					pathname={pathname}
					icon={icon}
					text={text}
					to={to}
				/>
			))}
		</Flex>
	)
}

export default Footer
