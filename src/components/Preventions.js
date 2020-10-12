import React from 'react'
import styled from 'styled-components'

import washhand from '../assets/wash-hand.svg'
import wearmask from '../assets/wear-mask.svg'
import socialdistance from '../assets/social-distance.svg'
import stayathome from '../assets/stay-at-home.svg'

const Container = styled.section`
	padding: 100px;
	max-width: 1366px;
	margin: 0 auto;
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 4rem;

	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}
`

const HorizontalLine = styled.div`
	width: 150px;
	height: 1px;
	border-bottom: ${({theme}) => `5px solid ${theme['blue.100']}`};
`

const ContentTitle = styled.h2`
	font-size: 2rem;
	margin: 0;
	color: ${({theme}) => theme['black.100']};
	font-size: 2rem;
`

const ContentDescription = styled.p`
	margin: 0;
	color: ${({theme}) => theme['black.50']};
	font-size: 1.5rem;
`

const PreventionContainer = styled.div`
	padding: 4rem 0;
	height: 450px;
	background-image: ${({image}) => `url(${image})`};
	background-repeat: no-repeat;
	background-position: ${({order}) =>
		order === 1 ? 'right bottom' : 'left bottom'};
`

const PreventionContent = styled.div`
	max-width: 480px;
	display: flex;
	align-items: flex-start;
	margin-left: ${({order}) => (order === 1 ? '0' : 'auto')};
`

const PreventionNumber = styled.div`
	background-color: ${({theme}) => theme['blue.100']};
	height: 30px;
	width: 30px;
	padding: 10px;
	text-align: center;
	line-height: 30px;
	border-radius: 50%;
	font-weight: 700;
	font-size: 2rem;
	color: ${({theme}) => theme.white};
	margin-right: 1.8rem;
`

const PreventionTitle = styled.h3`
	margin: 0 0 1rem;
	color: ${({theme}) => theme['black.100']};
	font-size: 1.8rem;
`

const PreventionDescription = styled.p`
	margin: 0;
	color: ${({theme}) => theme['black.50']};
	font-size: 1.4rem;
`

function Preventions() {
	return (
		<Container>
			<ContentContainer>
				<HorizontalLine />
				<ContentTitle>Tindakan pencegahan</ContentTitle>
				<ContentDescription>
					Bantu cegah penyabaran virus corona dengan cara:
				</ContentDescription>
			</ContentContainer>
			<Prevention
				number="1"
				title="Rajin mencuci tangan"
				description="Setelah berpergian atau memegang benda asing hendaklah segera mencuci tangan"
				illustration={washhand}
			/>
			<Prevention
				number="2"
				title="Memakai masker"
				description="Selalu gunakan masket jika keluar ruangan atau ketika berbicara dengan orang lain"
				illustration={wearmask}
				order={2}
			/>
			<Prevention
				number="3"
				title="Menjaga jarak"
				description="Jaga jarak jika berada di keramaian, dan hindari kontak fisik seminimal mungkin"
				illustration={socialdistance}
			/>
			<Prevention
				number="4"
				title="Tetap berada dirumah"
				description="Lindungi dan gunakan waktu bersama keluarga tercinta dengan tetap berada dirumah"
				illustration={stayathome}
				order={2}
			/>
		</Container>
	)
}

function Prevention({number, title, description, illustration, order = 1}) {
	return (
		<PreventionContainer image={illustration} order={order}>
			<PreventionContent order={order}>
				<div>
					<PreventionNumber>{number}</PreventionNumber>
				</div>
				<div>
					<PreventionTitle>{title}</PreventionTitle>
					<PreventionDescription>{description}</PreventionDescription>
				</div>
			</PreventionContent>
		</PreventionContainer>
	)
}

export default Preventions
