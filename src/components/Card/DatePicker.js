import React from 'react'

export default function DatePicker({ date, placeholder }) {
  if (placeholder) {
    return <div>date</div>
  }

  return <div>{date}</div>
}
