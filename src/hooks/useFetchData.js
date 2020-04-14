import useSWR from 'swr'
import {fetchData, fetchNews} from '../utils/fetcher'

const endpoint = {
	data: 'https://covid19.mathdro.id/api/',
	news: 'https://newsapi.org/v2/everything?q=covid&language=id',
}

export const useGetData = (param = '', choice) => {
	const {data, error} = useSWR(endpoint.data + param, fetchData, {
		suspense: true,
	})
	return {data, error}
}

export const useGetNews = () => {
	const {data, error} = useSWR(endpoint.news, fetchNews, {suspense: true})
	return {data, error}
}
