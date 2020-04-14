import React from 'react'
import {Box, List, ListItem, Link, Text} from '@chakra-ui/core'

import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

function Info() {
	return (
		<Box my="24">
			<Box textAlign="center">
				<Title>Info</Title>
			</Box>
			<Subtitle mt="4" textAlign="left">
				Covid-19 Info adalah aplikasi berbasis web untuk mengakses data terkait
				kasus Covid-19 diseluruh dunia, data dari aplikasi ini semua bersumber
				dari API berikut:
			</Subtitle>
			<List as="ol" styleType="decimal" my="2">
				<ListItem>
					<Link
						color="pink.500"
						href="https://github.com/mathdroid/covid-19-api"
						isExternal
					>
						covid-19-api
					</Link>
					<Text as="span" ml="2">
						COVID-19 global data (from JHU CSSE for now) as-a-service
					</Text>
				</ListItem>
				<ListItem>
					<Link color="pink.500" href="https://newsapi.org/" isExternal>
						NewsApi
					</Link>
					<Text ml="2" as="span">
						Search worldwide news with code
					</Text>
				</ListItem>
			</List>
			repositori dari aplikasi ini dapat ditemukan di github melalui link
			berikut:{' '}
			<Link href="https://github.com/fcrezza/covid19-info-app" color="pink.500">
				repositori covid-19 info
			</Link>
		</Box>
	)
}

export default Info
