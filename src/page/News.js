import React from 'react'
import {Box, Link, Text, useColorMode} from '@chakra-ui/core'

import {useGetNews} from '../hooks/useFetchData'
import Title from '../components/Title'

function NewsItem({source, title, url, content}) {
	const {colorMode} = useColorMode()
	const textColor = {light: 'gray.700', dark: 'gray.300'}
	const bgColor = {light: 'green.50', dark: 'gray.700'}
	const contentPreview = content && content.substring(0, 200)

	return (
		<Box bg={bgColor[colorMode]} textAlign="left" p="6" rounded="md" mb="4">
			<Text fontSize="sm">{source}</Text>
			<Text
				fontSize={['2xl', '3xl']}
				fontWeight="700"
				color={textColor[colorMode]}
			>
				<Link href={url} isExternal>
					{title}
				</Link>
			</Text>
			<Text fontSize="md" mt="1">{`${contentPreview} ...`}</Text>
		</Box>
	)
}

function News() {
	const {data} = useGetNews()

	return (
		<Box textAlign="center" my="24">
			<Title>update Covid-19</Title>
			<Box mt="10">
				{data.articles.map(({source, title, url, content}) => (
					<NewsItem
						key={title}
						source={source.name}
						title={title}
						url={url}
						content={content}
					/>
				))}
			</Box>
		</Box>
	)
}

export default News
