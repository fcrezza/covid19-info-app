import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${({theme}) => theme['blue.100']};
	color: ${({theme}) => theme.white};
	padding: 1rem;
	border: none;
	border-radius: 5px;
	font-weight: 700;
	font-size: 20px;
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
`

function Button({children, onClick, as, ...props}) {
	return (
		<StyledButton as={as} onClick={onClick} {...props}>
			{children}
		</StyledButton>
	)
}

export default Button
