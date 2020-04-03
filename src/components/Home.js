import React from 'react'
import dayjs from 'dayjs'
import {Box, Flex} from '@chakra-ui/core'

import {useGetData} from '../hooks/useFetchData'
import Item from './Item'
import Title from './Title'
import Subtitle from './Subtitle'
import Placeholder from './Placeholder'

const Home = () => {
	const {data, error} = useGetData()
	const date = data && dayjs(data.lastUpdate).format('DD MMM YYYY')
	const time = data && dayjs(data.lastUpdate).format('HH:mm:ss')

	const items = data && [
		{text: 'terinfeksi', jumlah: data.confirmed.value, color: 'yellow.500'},
		{text: 'sembuh', jumlah: data.recovered.value, color: 'green.500'},
		{text: 'meninggal', jumlah: data.deaths.value, color: 'red.500'},
	]

	return (
		<Box mt="20" textAlign="center">
				<Title>kasus global</Title>
				{error ? (
					<Subtitle>Tidak ada koneksi internet</Subtitle>
				) : data ? (
						<Subtitle>
							Terakhir diperbarui {date} pada {time} WIB
						</Subtitle>
				) : <Placeholder width="300px" height="12px" customStyle={{mx: 'auto', mt: '2'}} />}
			<Flex width="xl" mx="auto" mt="8" justify="space-between">
				{error ? null : data ? (
					items.map((itemProps) => <Item key={itemProps.text} {...itemProps} />)
				) : (
					<>
						<Placeholder />
						<Placeholder />
						<Placeholder />
					</>
				)}
			</Flex>
		</Box>
	)
}

export default Home
