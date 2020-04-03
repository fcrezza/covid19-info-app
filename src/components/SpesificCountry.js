import React from 'react'
import dayjs from 'dayjs'
import {useParams} from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {Box, Flex, Text} from '@chakra-ui/core'

import {useGetData} from '../hooks/useFetchData'
import Placeholder from './Placeholder'
import Item from './Item'
import Title from './Title'
import Subtitle from './Subtitle'

const SpesificCounty = () => {
	const {id} = useParams()
	const {data: selectedCountry, error: error1} = useGetData('countries/' + id)
	const {data: countries, error: error2} = useGetData('countries')

	const filteredCountry =
		selectedCountry &&
		countries &&
		countries.countries.filter((ctry) => ctry.iso2 === id)
	const error = error1 || error2

	if (filteredCountry) {
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
			<Box mt="20" textAlign="center">
				<ReactCountryFlag countryCode={id} aria-label={`${name} flag`} />
				<Title>{name}</Title>
				<Subtitle>
					Terakhir diperbarui {date} pada {time} WIB
				</Subtitle>
				<Flex width="xl" mx="auto" mt="8" justify="space-between">
					{items.map((itemProps) => (
						<Item key={itemProps.text} {...itemProps} />
					))}
				</Flex>
			</Box>
		)
	} else if (error) {
		return (
			<Box mt="20" textAlign="center">
				<Text color="gray.700" fontSize="lg">
					Tidak ada koneksi Internet
				</Text>
			</Box>
		)
	} else {
		return (
			<Box mt="20">
				<Placeholder
					width="50px"
					height="50px"
					customStyle={{mx: 'auto', mb: '2'}}
				/>
				<Placeholder width="150px" height="50px" customStyle={{mx: 'auto'}} />
				<Placeholder
					width="300px"
					height="12px"
					customStyle={{mx: 'auto', mt: '2'}}
				/>
				<Flex width="xl" mx="auto" mt="8" justify="space-between">
					<Placeholder />
					<Placeholder />
					<Placeholder />
				</Flex>
			</Box>
		)
	}
}

export default SpesificCounty
