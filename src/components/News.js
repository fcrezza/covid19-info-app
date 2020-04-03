import React from 'react'
import {Box, Link, Text, useColorMode} from '@chakra-ui/core'

import {useGetNews} from '../hooks/useFetchData'
import Title from './Title'
import Placeholder from './Placeholder'

const NewsItem = ({source, title, url, content}) => {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.700', dark: 'gray.300'}
	const bgColor = {light: 'green.50', dark: 'gray.700'}

	return (
		<Box bg={bgColor[colorMode]} p="6" rounded="md" mb="4">
			<Text fontSize="sm">{source}</Text>
			<Text fontSize="3xl" fontWeight="700" color={textColor[colorMode]}>
				<Link href={url} isExternal>
					{title}
				</Link>
			</Text>
			<Text fontSize="md" mt="1">{`${content.substring(0, 200)} ...`}</Text>
		</Box>
	)
}

const News = () => {
	const {data, error} = useGetNews()
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.700', dark: 'gray.300'}

	return (
		<Box mt="16" mb="24">
			<Title>update Covid-19</Title>
			<Box mt="10">
				{data
					? data.articles.map(({source, title, url, content}) => (
							<NewsItem
								key={title}
								source={source.name}
								title={title}
								url={url}
								content={content}
							/>
					  ))
					: error
					? <Text color={textColor[colorMode]} fontSize="lg" textAlign="center">Tidak ada koneksi internet</Text>
					: <>
					<Placeholder width="100%" height="180px" customStyle={{mb: '4'}} />
					<Placeholder width="100%" height="180px" customStyle={{mb: '4'}} />
					<Placeholder width="100%" height="180px" customStyle={{mb: '4'}} />
				</>}
			</Box>
		</Box>
	)
}

export default News
