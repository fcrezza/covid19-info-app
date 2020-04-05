import React from 'react'
import dayjs from 'dayjs'
import {useParams} from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {Flex, Text, Grid} from '@chakra-ui/core'

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
		(selectedCountry &&
			countries &&
			countries.countries.filter((ctry) => ctry.iso2 === id)) ||
		[]
	const countryNotFound = selectedCountry
		? selectedCountry.error
			? true
			: false
		: false
	const error = error1 || error2

	if (filteredCountry.length) {
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
			<Flex
				flex="1"
				alignItems="center"
				direction="column"
				justify="center"
				textAlign="center"
				mt="-20vh"
			>
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
			</Flex>
		)
	} else if (error) {
		return (
			<Flex
				flex="1"
				alignItems="center"
				direction="column"
				justify="center"
				textAlign="center"
				mt="-20vh"
			>
				<Text fontSize="lg">Tidak ada koneksi Internet</Text>
			</Flex>
		)
	} else if (countryNotFound) {
		return <Flex
				flex="1"
				alignItems="center"
				direction="column"
				justify="center"
				textAlign="center"
				mt="-20vh"
			>
				<Text fontSize="lg">Data yang anda cari tidak ditemukan</Text>
			</Flex>
	} else {
		return (
			<Flex
				flex="1"
				alignItems="center"
				direction="column"
				justify="center"
				textAlign="center"
				mt="-20vh"
			>
				<Placeholder
					width="25px"
					height="25px"
					customStyle={{mx: 'auto', mb: '2'}}
				/>
				<Placeholder width="150px" height="50px" customStyle={{mx: 'auto'}} />
				<Placeholder
					width="300px"
					height="12px"
					customStyle={{mx: 'auto', mt: '2'}}
				/>
				<Grid
					templateColumns="repeat(3, 1fr)"
					gap={['3', '5']}
					width={{base: '100%', md: 'xl'}}
					mx="auto"
					mt="8"
				>
					<Placeholder width="100%" height={['80px', '120px']} />{' '}
					<Placeholder width="100%" height={['80px', '120px']} />{' '}
					<Placeholder width="100%" height={['80px', '120px']} />
				</Grid>
			</Flex>
		)
	}
}

export default SpesificCounty
