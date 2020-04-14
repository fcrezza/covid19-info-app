import React from 'react'
import dayjs from 'dayjs'
import {useParams} from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {Text, Grid} from '@chakra-ui/core'

import {useGetData} from '../hooks/useFetchData'
import Item from '../components/Item'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Container from '../components/Container'

function SpesificCounty() {
	const {id} = useParams()
	const {data: selectedCountry} = useGetData('countries/' + id)
	const {data: countries} = useGetData('countries')

	const filteredCountry = countries.countries.filter(({iso2}) => iso2 === id)
	const countryNotFound = selectedCountry.error ? true : false

	if (countryNotFound) {
		return (
			<Container>
				<Text fontSize="lg">Data yang anda cari tidak ditemukan</Text>
			</Container>
		)
	} else {
		const {name} = filteredCountry[0]
		const {confirmed, recovered, deaths, lastUpdate} = selectedCountry
		const date = dayjs(lastUpdate).format('DD MMM YYYY')
		const time = dayjs(lastUpdate).format('HH:mm:ss')
		const items = [
			{text: 'terinfeksi', jumlah: confirmed.value, color: 'yellow.500'},
			{text: 'sembuh', jumlah: recovered.value, color: 'green.500'},
			{text: 'meninggal', jumlah: deaths.value, color: 'red.500'},
		]

		return (
			<Container>
				<ReactCountryFlag countryCode={id} aria-label={`${name} flag`} />
				<Title>{name}</Title>
				<Subtitle>
					Terakhir diperbarui {date} pada {time} WIB
				</Subtitle>
				<Grid
					templateColumns="repeat(3, 1fr)"
					gap={['3', '5']}
					width={{base: '100%', md: 'xl'}}
					mx="auto"
					mt="8"
				>
					{items.map((itemProps) => (
						<Item key={itemProps.text} {...itemProps} />
					))}
				</Grid>
			</Container>
		)
	}
}

export default SpesificCounty
