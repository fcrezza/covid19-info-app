import React, {memo, useState} from 'react'
import {Box, Flex, Input, Grid, Text, useColorMode} from '@chakra-ui/core'
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'

import useInfiniteScroll from '../hooks/useInfiniteScroll'
import {useGetData} from '../hooks/useFetchData'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import countryCodeToEmoji from '../utils/countryCodeToEmoji'

function CountryLink({to, countryCode = '', countryName}) {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.600', dark: 'gray.300'}
	const bgColor = {light: 'green.50', dark: 'gray.700'}
	const emoji = countryCodeToEmoji(countryCode)

	return (
		<Flex
			align="center"
			textAlign="left"
			bg={bgColor[colorMode]}
			p="2"
			as={Link}
			to={to}
			rounded="md"
			height="auto"
		>
			{emoji}
			<Text
				ml="2"
				whiteSpace="nowrap"
				overflow="auto"
				color={textColor[colorMode]}
			>
				{countryName}
			</Text>
		</Flex>
	)
}

function Search({handleToggleFooter}) {
	const [country, setCountry] = useState('')
	const {data} = useGetData('countries')
	const {hasMore, count, loadMore} = useInfiniteScroll(
		37,
		data.countries.length,
	)

	const filteredCountries = country
		? data.countries.filter(
				({name}) =>
					name.toLowerCase().slice(0, country.length) === country.toLowerCase(),
		  )
		: data.countries
	return (
		<Box mt="24" textAlign="center">
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
			<InfiniteScroll threshold={100} loadMore={loadMore} hasMore={hasMore}>
				<Grid
					gap="4"
					overflowX="hidden"
					mb="24"
					templateColumns={['repeat(2, 48%)', 'repeat(3, 32%)']}
				>
					{filteredCountries.slice(0, count).map(({name, iso2}) => (
						<CountryLink
							key={name}
							countryCode={iso2}
							countryName={name}
							to={(location) => `${location.pathname}/${iso2}`}
						/>
					))}
				</Grid>
			</InfiniteScroll>
		</Box>
	)
}

export default memo(Search)
