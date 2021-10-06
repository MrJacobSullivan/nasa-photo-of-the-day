import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import { BASE_URL, API_KEY } from './constants'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const config = { params: { api_key: API_KEY } }
    axios
      .get(BASE_URL, config)
      .then((res) => {
        console.log(res.data)
        setData(() => res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (data !== null) setLoaded(true)
  }, [data])

  return (
    <main className='App'>
      <Card loaded={loaded} data={data} />
    </main>
  )
}

export default App
