import React from 'react'
import dayjs from 'dayjs'
import {Grid} from '@chakra-ui/core'

import {useGetData} from '../hooks/useFetchData'
import Item from '../components/Item'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Container from '../components/Container'

function Home() {
	const {data} = useGetData()
	const date = dayjs(data.lastUpdate).format('DD MMM YYYY')
	const time = dayjs(data.lastUpdate).format('HH:mm:ss')

	const items = [
		{text: 'terinfeksi', jumlah: data.confirmed.value, color: 'yellow.500'},
		{text: 'sembuh', jumlah: data.recovered.value, color: 'green.500'},
		{text: 'meninggal', jumlah: data.deaths.value, color: 'red.500'},
	]

	return (
		<Container>
			<Title>kasus global</Title>
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

export default Home
