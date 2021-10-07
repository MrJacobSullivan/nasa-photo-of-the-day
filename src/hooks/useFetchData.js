import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants'

export default function useFetchData(date) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const key = `?api_key=${API_KEY}`
    const dateQuery = date ? `&date=${date}` : null
    const query = `${BASE_URL}${key}${date ? dateQuery : ''}`

    axios
      .get(query)
      .then((res) => {
        console.log(res.data)
        setData(() => res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return data
}
