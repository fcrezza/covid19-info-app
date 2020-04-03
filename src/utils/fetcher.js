export const fetchData = (url) => {
	const data = fetch(url).then((res) => res.json())
	return data
}

export const fetchNews = (url) => {
	const data = fetch(url, {
		'X-Api-Key': process.env.REACT_APP_NEWS_KEY,
	}).then((res) => res.json())
	return data
}
