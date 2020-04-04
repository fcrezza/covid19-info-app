import React from 'react'
import {Box} from '@chakra-ui/core'

import Title from './Title'

const NotFound  = () => {
	return <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)"><Title>404 Not found</Title></Box>
}

export default NotFound 