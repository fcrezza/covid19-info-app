import React from 'react'
import {Box, Flex, Text} from '@chakra-ui/core'
import {Link} from 'react-router-dom'
import {FaHome, FaSearch, FaInfoCircle, FaRegNewspaper} from 'react-icons/fa'

const Footer = () => {
	return (
		<Flex
			bg="pink.500"
			position="fixed"
			bottom="0"
			maxWidth="768px"
			width="100%"
			overflow="hidden"
		>
			<Box
				as={Link}
				to="/"
				p="2"
				display="flex"
				flex="1"
				justify="center"
				flexDirection="column"
				alignItems="center"
			>
				<Box as={FaHome} color="gray.100" size="30px" />
				<Text mt="1" color="gray.100">
					Home
				</Text>
			</Box>
			<Box
				as={Link}
				to="/cari"
				p="2"
				display="flex"
				flex="1"
				justify="center"
				flexDirection="column"
				alignItems="center"
			>
				<Box as={FaSearch} color="gray.100" size="30px" />
				<Text mt="1" color="gray.100">
					Cari
				</Text>
			</Box>
			<Box
				as={Link}
				to="/berita"
				p="2"
				display="flex"
				flex="1"
				justify="center"
				flexDirection="column"
				alignItems="center"
			>
				<Box as={FaRegNewspaper} color="gray.100" size="30px" />
				<Text mt="1" color="gray.100">
					Berita
				</Text>
			</Box>
			<Box
				as={Link}
				to="/info"
				p="2"
				display="flex"
				flex="1"
				justify="center"
				flexDirection="column"
				alignItems="center"
			>
				<Box as={FaInfoCircle} color="gray.100" size="30px" />
				<Text mt="1" color="gray.100">
					Info
				</Text>
			</Box>
		</Flex>
	)
}

export default Footer
