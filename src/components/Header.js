import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import logo from '../assets/logo.svg'
import hero from '../assets/hero.svg'

const Container = styled.header``

const NavigationContainer = styled.div`
	border-bottom: ${({theme}) => `1px solid ${theme.gray}`};
	padding: 0 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const LogoContainer = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
`
const LogoImage = styled.img`
	width: 50px;
	display: block;
	margin-right: 1rem;
`
const LogoText = styled.h1`
	font-size: 1.8rem;
	margin: 0;
	color: ${({theme}) => theme['black.100']};
`

const NavigationList = styled.nav`
	display: flex;
`

const NavigationItem = styled.a`
	text-decoration: none;
	color: ${({theme}) => theme['black.100']};
	font-size: 17px;
	padding: 2rem 1rem;
	display: block;
	font-weight: 700;

	&:hover,
	&:focus {
		background-color: ${({theme}) => theme['gray.50']};
	}
`

const ContentWrapper = styled.div`
	background-color: ${({theme}) => theme['gray.50']};
`

const ContentContainer = styled.div`
	max-width: 1366px;
	margin: 0 auto;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding: 6rem 100px;
`

const ContentMain = styled.div`
	max-width: 620px;

	& > *:first-child {
		margin-bottom: 0.5rem;
	}

	& > *:last-child {
		margin-top: 1.8rem;
	}
`

const ContentText = styled.p`
	color: ${({theme}) => theme['blue.100']};
	font-weight: 700;
	font-size: 1.5rem;
	margin: 0;
`

const ContentTitle = styled.h2`
	color: ${({theme}) => theme['black.100']};
	font-size: 43px;
	margin: 0;
`

const ContentIllustration = styled.img`
	display: block;
	max-width: 400px;
`

function Header() {
	return (
		<Container>
			<Navigation />
			<Content />
		</Container>
	)
}

function Logo() {
	return (
		<LogoContainer href="/">
			<LogoImage src={logo} alt="logo" />
			<LogoText>INFORONA</LogoText>
		</LogoContainer>
	)
}

function Navigation() {
	return (
		<NavigationContainer>
			<Logo />
			<NavigationList>
				<NavigationItem href="/">Apa itu COVID-19?</NavigationItem>
				<NavigationItem href="/">Tindakan pencegahan</NavigationItem>
				<NavigationItem href="/">Data COVID-19</NavigationItem>
			</NavigationList>
		</NavigationContainer>
	)
}

function Content(argument) {
	return (
		<ContentWrapper>
			<ContentContainer>
				<ContentMain>
					<ContentText>Dirumah aja!</ContentText>
					<ContentTitle>
						Tetap jaga kesehatan dan tetap up to date dengan data terkini
						COVID-19 di seluruh dunia
					</ContentTitle>
					<Button>Cek data</Button>
				</ContentMain>
				<ContentIllustration src={hero} alt="hero" />
			</ContentContainer>
		</ContentWrapper>
	)
}

export default Header
