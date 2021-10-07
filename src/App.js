import React, { useState, useEffect } from 'react'
import Card from './components/Card/Card'
import Date from './components/Card/Date'
import useFetchData from './hooks/useFetchData'
import useExampleData from './hooks/useExampleData'
import './App.css'

function App() {
  const [date, setDate] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // const data = useFetchData(date)
  const data = useExampleData('image')

  useEffect(() => {
    if (data !== null) setLoaded(true)
  }, [data])

  return (
    <main className='container'>
      <Card loaded={loaded} data={data}>
        <Date onDateChange={(newDate) => setDate(() => newDate)} />
      </Card>
    </main>
  )
}

export default App
