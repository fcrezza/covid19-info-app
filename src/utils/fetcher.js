export function fetchData(url) {
	const data = fetch(url).then((res) => res.json())
	return data
}

export function fetchNews(url) {
	const data = fetch(url, {
		headers: {
			'X-Api-Key': process.env.REACT_APP_NEWS_KEY,
		},
	}).then((res) => res.json())
	return data
}
