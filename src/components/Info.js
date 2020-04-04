import React from 'react'
import {Box, List, ListItem, Link, Text} from '@chakra-ui/core'

import Title from './Title'
import Subtitle from './Subtitle'

const Info = () => {
	return <Box mt="20">
	<Title>Info</Title>
	<Subtitle>Covid-19 Info adalah aplikasi berbasis web untuk mengakses data terkait kasus Covid-19 diseluruh dunia, data bersumber dari aplikasi ini semua bersumber dari API berikut:
		<List as="ol" styleType="decimal" my="2">
		  <ListItem><Link color="pink.500" href="https://github.com/mathdroid/covid-19-api" isExternal>covid-19-api</Link><Text as="span" ml="2">COVID-19 global data (from JHU CSSE for now) as-a-service</Text></ListItem>
		  <ListItem><Link color="pink.500" href="https://newsapi.org/" isExternal>NewsApi</Link><Text ml="2" as="span">Search worldwide news with code</Text></ListItem>
		</List>

		repositori dari aplikasi ini dapat ditemukan di github melalui link berikut: <Link href="" color="pink.500">repositori covid-19 info</Link>
	</Subtitle>
	</Box>
}

export default Info