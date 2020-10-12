import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import coronaSVG from '../assets/corona.svg'

const Container = styled.section`
	max-width: 1366px;
	margin: 0 auto;
	padding: 100px;
	background-image: url(${coronaSVG});
	background-repeat: no-repeat;
	background-position: 40px 30px;
	background-size: 500px;
`

const ContentContainer = styled.div`
	margin-left: auto;
	max-width: 500px;
	& > *:not(:last-child) {
		margin-bottom: 1.5rem;
	}
`

const ContentTitle = styled.h2`
	margin: 0;
	color: ${({theme}) => theme['black.100']};
	font-size: 2rem;
`

const ContentDescription = styled.p`
	margin: 0;
	color: ${({theme}) => theme['black.50']};
	font-size: 1.5rem;
`

function Corona() {
	return (
		<Container>
			<ContentContainer>
				<ContentTitle>Apa itu COVID-19?</ContentTitle>
				<ContentDescription>
					COVID-19 adalah penyakit yang disebabkan oleh coronavirus yang baru
					ditemukan. COVID-19 menyebar melalui percikan air liur atau air yang
					keluar dari hidung sang penderita.
				</ContentDescription>
				<Button as="a" href="/">
					Pelajari lebih lanjut
				</Button>
			</ContentContainer>
		</Container>
	)
}

export default Corona
