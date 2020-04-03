import React from 'react'
import {Flex, Icon, IconButton, Code, useColorMode} from '@chakra-ui/core'
import {FaMoon, FaRegSun} from 'react-icons/fa'

const Header = () => {
	const {colorMode, toggleColorMode} = useColorMode()
	const textColor = {light: 'gray.800', dark: 'gray.200'} 
	const buttonAria = {light: 'dark mode', dark: 'normal mode'}
	const icons = {light: FaMoon, dark: FaRegSun}

	return (
		<Flex px={["4", "0"]} alignItems="center" justifyContent="space-between">
			<Flex alignItems="center">
				<Icon name="virus" color="pink.500" size="40px" />
				<Code
					ml="3"
					color={textColor[colorMode]}
					fontSize="xl"
					fontWeight="medium"
					children="COVID-19 INFO"
				/>
			</Flex>

			<IconButton
				onClick={toggleColorMode}
				size="lg"
				aria-label={buttonAria[colorMode]}
				icon={icons[colorMode]}
				isRound
			/>
		</Flex>
	)
}

export default Header
