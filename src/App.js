import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import { BASE_URL, API_KEY } from './constants'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const config = { params: { api_key: API_KEY } }
    axios
      .get(BASE_URL, config)
      .then((res) => {
        const data = res.data
        setData(() => data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='App'>
      <p>Hello world</p>
      <Card data={data} />
    </div>
  )
}

export default App
