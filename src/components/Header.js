import React from 'react'
import {Flex, Icon, IconButton, Code, useColorMode} from '@chakra-ui/core'
import {FaMoon, FaRegSun} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
	const {colorMode, toggleColorMode} = useColorMode()
	const textColor = {light: 'gray.800', dark: 'gray.200'}
	const buttonAria = {light: 'dark mode', dark: 'normal mode'}
	const icons = {light: FaMoon, dark: FaRegSun}

	return (
		<Flex alignItems="center" justifyContent="space-between">
			<Flex as={Link} to="/" alignItems="center">
				<Icon name="virus" color="pink.500" size={['35px', '40px']} />
				<Code
					ml="3"
					color={textColor[colorMode]}
					fontSize={['lg', 'xl']}
					fontWeight="medium"
					children="COVID-19 INFO"
				/>
			</Flex>

			<IconButton
				onClick={toggleColorMode}
				size="md"
				aria-label={buttonAria[colorMode]}
				icon={icons[colorMode]}
				isRound
			/>
		</Flex>
	)
}

export default Header
