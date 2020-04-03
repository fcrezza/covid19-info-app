import React, {useState} from 'react'
import {Box, Flex, Input, Grid, Text} from '@chakra-ui/core'
import {Link} from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

import {useGetData} from '../hooks/useFetchData'
import Title from './Title'
import Subtitle from './Subtitle'
import Placeholder from './Placeholder'

const CountryLink = ({to, countryCode, countryName}) => (
	<Flex align="center" textAlign="left" bg="gray.50" p="2" as={Link} to={to}>
		<ReactCountryFlag
			countryCode={countryCode}
			aria-label={`${countryName} flag`}
			svg
		/>
		<Text ml="2">{countryName}</Text>
	</Flex>
)

function Cari() {
	const [country, setCountry] = useState('')
	const {data, error} = useGetData('countries')

	const filteredCountries =
		data && country
			? data.countries.filter(
					({name}) =>
						name.toLowerCase().slice(0, country.length) ===
						country.toLowerCase(),
			  )
			: data
			? data.countries
			: null

	const handleChange = ({target}) => {
		setCountry(target.value)
	}

	return (
		<Box mt="20" mb="24" textAlign="center">
			<Title>cari</Title>
			<Subtitle>Lihat kasus di suatu negara</Subtitle>
			<Input
				focusBorderColor="pink.300"
				value={country}
				onChange={handleChange}
				placeholder="Cari negara..."
				my="6"
			/>
			<Grid gap="4" templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}>
				{filteredCountries ? (
					filteredCountries.map(({name, iso2}) => (
						<CountryLink
							key={name}
							countryCode={iso2}
							countryName={name}
							to={(location) => `${location.pathname}/${iso2}`}
						/>
					))
				) : error ? (
					<Text gridColumn="2" color="gray.500" textAlign="center">
						Tidak ada koneksi Internet
					</Text>
				) : (
					<>
						<Placeholder height="30px" width="100%" />
						<Placeholder height="30px" width="100%" />
						<Placeholder height="30px" width="100%" />
					</>
				)}
			</Grid>
		</Box>
	)
}

export default Cari
