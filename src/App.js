import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import Card from './components/Card/Card'
import { MainContainer } from './components/Styled'

import useDate from './hooks/useDate'
import useFetchData from './hooks/useFetchData'
import useExampleData from './hooks/useExampleData'

import 'react-datepicker/dist/react-datepicker.css'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  const [date, startDate, setDate] = useDate()
  const data = useFetchData(date)
  // const data = useExampleData('image')

  useEffect(() => {
    if (data !== null) setLoaded(true)
  }, [data, date])

  return (
    <MainContainer>
      <Card loaded={loaded} data={data}>
        <DatePicker
          selected={startDate}
          onChange={(newDate) => setDate(() => newDate)}
          maxDate={new Date()}
          inline
        />
      </Card>
    </MainContainer>
  )
}

export default App
