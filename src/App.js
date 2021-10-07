import React, { useState, useEffect } from 'react'
import Card from './components/Card/Card'
import Date from './components/Card/Date'
import { exampleData } from './dummyData'
import useFetchData from './hooks/useFetchData'
import './App.css'

function App() {
  const [date, setDate] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const data = useFetchData(date)

  useEffect(() => {
    if (data !== null) setLoaded(true)
  }, [data])

  useEffect(() => {}, [date])

  return (
    <main className='container'>
      <Card loaded={loaded} data={data}>
        <Date onDateChange={(newDate) => setDate(() => newDate)} />
      </Card>
    </main>
  )
}

export default App
