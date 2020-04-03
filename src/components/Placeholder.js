import React from 'react'
import {Skeleton} from '@chakra-ui/core'

const Placeholder = ({height = "120px", width = "170px", customStyle}) => (
		<Skeleton height={height} width={width} {...customStyle} />
)

export default Placeholder