import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import DatePicker from './components/Card/DatePicker'
import { BASE_URL, API_KEY } from './constants'
import { exampleData } from './dummyData'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [date, setDate] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // const key = `?api_key=${API_KEY}`
    // const dateQuery = date ? `&date=${date}` : null

    // const query = `${BASE_URL}${key}${date ? dateQuery : ''}`

    // axios
    //   .get(query)
    //   .then((res) => {
    //     console.log(res.data)
    //     setData(() => res.data)
    //   })
    //   .catch((err) => console.log(err))

    setTimeout(() => setData(() => exampleData), 1000)
  }, [])

  useEffect(() => {
    if (data !== null) setLoaded(true)
  }, [data])

  return (
    <main className='container'>
      <Card loaded={loaded} data={data}>
        <DatePicker date={date} placeholder={!date} />
      </Card>
    </main>
  )
}

export default App
