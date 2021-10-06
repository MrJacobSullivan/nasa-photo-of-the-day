import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card/Card'
import { BASE_URL, API_KEY } from './constants'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // const config = { params: { api_key: API_KEY } }
    // axios
    //   .get(BASE_URL, config)
    //   .then((res) => {
    //     console.log(res.data)
    //     setData(() => res.data)
    //   })
    //   .catch((err) => console.log(err))

    const exampleData = {
      copyright: 'Jari Saukkonen',
      date: '2021-10-06',
      explanation:
        'Where do the dark streams of dust in the Orion Nebula originate? This part of the Orion Molecular Cloud Complex, M43, is the often imaged but rarely mentioned neighbor of the more famous M42. M42, seen in part to the upper right, includes many bright stars from the Trapezium star cluster. M43 is itself a star forming region that displays intricately-laced streams of dark dust -- although it is really composed mostly of glowing hydrogen gas. The entire Orion field is located about 1600 light years away.  Opaque to visible light, the picturesque dark dust is created in the outer atmosphere of massive cool stars and expelled by strong outer winds of protons and electrons.',
      hdurl: 'https://apod.nasa.gov/apod/image/2110/OrionStreams_Saukkonen_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'M43: Streams of Orion',
      url: 'https://apod.nasa.gov/apod/image/2110/OrionStreams_Saukkonen_960.jpg',
    }

    setTimeout(() => setData(() => exampleData), 1000)
  }, [])

  useEffect(() => {
    if (data !== null) setLoaded(true)
  }, [data])

  return (
    <main className='container'>
      <Card loaded={loaded} data={data} />
    </main>
  )
}

export default App
