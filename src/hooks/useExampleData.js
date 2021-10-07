import { useState } from 'react'
import { exampleData } from '../exampleData'

export default function useFetchData(type) {
  const [data, setData] = useState(null)

  setTimeout(() => {
    setData(() => exampleData[type])
  }, 1000)

  return data
}
