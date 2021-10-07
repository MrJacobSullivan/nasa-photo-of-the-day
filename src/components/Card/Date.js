import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import DatePicker from 'react-datepicker'
// @import "~react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker.css'

export default function Date({ onDateChange }) {
  const [startDate, setStartDate] = useState(null)

  const handleDate = () => {
    if (!startDate) return null
    return format(startDate, 'yyyy-MM-dd')
  }

  useEffect(() => {
    const date = handleDate()
    onDateChange(date)
  }, [startDate])

  return (
    <DatePicker selected={startDate} onChange={(newDate) => setStartDate(() => newDate)} inline />
  )
}
