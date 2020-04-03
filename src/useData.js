import {useEffect, useState} from 'react'
import axios from 'axios'

const endpoint = 'https://covid19.mathdro.id/api'

function useData() {
	const [data, setData] = useState(null)

	useEffect(() => {
		const getData = async () => {
			try {
				const get = await axios.get(endpoint)
				setData(get)
				console.log(get)

			} catch(e) {
				console.log(e);
			}
		}
		getData()
	}, [data])

console.log(data)
	return data
}

export default useData