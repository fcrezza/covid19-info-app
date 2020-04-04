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
		<Box
			position="absolute"
			top="45%"
			left="50%"
			transform="translate(-50%, -50%)"
			textAlign="center"
		>
			<Title>kasus global</Title>
			{error ? (
				<Subtitle>Tidak ada koneksi internet</Subtitle>
			) : data ? (
				<Subtitle>
					Terakhir diperbarui {date} pada {time} WIB
				</Subtitle>
			) : (
				<Placeholder
					width="300px"
					height="12px"
					customStyle={{mx: 'auto', mt: '2'}}
				/>
			)}
			<Flex width={['sm', 'xl']} mx="auto" mt="8" px="4" justify="space-between">
				{error ? null : data ? (
					items.map((itemProps) => <Item key={itemProps.text} {...itemProps} />)
				) : (
					<>
						<Placeholder
							width={['105px', '170px']}
							height={['80px', '120px']}
						/>{' '}
						<Placeholder
							width={['105px', '170px']}
							height={['80px', '120px']}
						/>{' '}
						<Placeholder
							width={['105px', '170px']}
							height={['80px', '120px']}
						/>
					</>
				)}
			</Flex>
		</Box>
	)
}

export default Home
