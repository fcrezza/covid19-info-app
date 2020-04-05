import React from 'react'
import dayjs from 'dayjs'
import {Flex, Grid} from '@chakra-ui/core'

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
		<Flex
			flex="1"
			alignItems="center"
			direction="column"
			justify="center"
			textAlign="center"
			mt="-20vh"
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
			<Grid
				templateColumns="repeat(3, 1fr)"
				gap={['3', '5']}
				width={{base:'100%', md:'xl'}}
				mx="auto"
				mt="8"
			>
				{error ? null : data ? (
					items.map((itemProps) => <Item key={itemProps.text} {...itemProps} />)
				) : (
					<>
						<Placeholder width='100%' height={['80px', '120px']} />{' '}
						<Placeholder width='100%' height={['80px', '120px']} />{' '}
						<Placeholder width='100%' height={['80px', '120px']} />
					</>
				)}
			</Grid>
		</Flex>
	)
}

export default Home
