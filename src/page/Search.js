import React, {useState} from 'react'
import {Box, Flex, Input, Grid, Text, useColorMode} from '@chakra-ui/core'
import {Link} from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

import {useGetData} from '../hooks/useFetchData'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

function CountryLink({to, countryCode, countryName}) {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.600', dark: 'gray.300'}
	const bgColor = {light: 'green.50', dark: 'gray.700'}

	return (
		<Flex
			align="center"
			textAlign="left"
			bg={bgColor[colorMode]}
			p="2"
			as={Link}
			to={to}
			rounded="md"
		>
			{countryCode ? (
				<ReactCountryFlag
					countryCode={countryCode}
					aria-label={`${countryName} flag`}
					svg
				/>
			) : null}
			<Text ml="2" color={textColor[colorMode]}>
				{countryName}
			</Text>
		</Flex>
	)
}

function Search({handleToggleFooter}) {
	const [country, setCountry] = useState('')
	const {data} = useGetData('countries')

	const filteredCountries = country
		? data.countries.filter(
				({name}) =>
					name.toLowerCase().slice(0, country.length) === country.toLowerCase(),
		  )
		: data.countries

	return (
		<Box my="24" textAlign="center">
			<Title>cari</Title>
			<Subtitle>Lihat kasus di suatu negara</Subtitle>
			<Input
				focusBorderColor="pink.300"
				value={country}
				onChange={({target}) => setCountry(target.value)}
				onFocus={handleToggleFooter}
				onBlur={handleToggleFooter}
				placeholder="Cari negara..."
				my="6"
			/>
			<Grid gap="4" templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}>
				{filteredCountries.map(({name, iso2}) => (
					<CountryLink
						key={name}
						countryCode={iso2}
						countryName={name}
						to={(location) => `${location.pathname}/${iso2}`}
					/>
				))}
			</Grid>
		</Box>
	)
}

export default Search
