import {useState} from 'react'

function useInfiniteScroll(incrementNum, maxItems) {
	const [hasMore, setHasMore] = useState(true)
	const [count, setCount] = useState(() => incrementNum)

	const loadMore = () => {
		if (incrementNum + count <= maxItems) {
			setTimeout(() => {
				setCount((prevCount) => prevCount + incrementNum)
			}, 500)
		} else {
			setHasMore(false)
		}
	}

	return {hasMore, count, loadMore}
}

export default useInfiniteScroll
