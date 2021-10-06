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
        setData(() => res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setLoaded(true)
  }, [data])

  if (!loaded) return <h3>loading...</h3>

  return (
    <main className='App'>
      <p>hello world</p>
      <Card data={data} />
    </main>
  )
}

export default App
