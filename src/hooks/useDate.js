import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export default function useDate() {
  const [date, setDate] = useState(null)
  const [startDate, setStartDate] = useState(null)

  useEffect(() => {
    const handleDate = () => {
      if (!startDate) return null
      return format(startDate, 'yyyy-MM-dd')
    }

    setDate(() => handleDate())
  }, [startDate])

  return [date, startDate, setStartDate]
}
