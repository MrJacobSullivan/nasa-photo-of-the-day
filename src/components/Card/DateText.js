import React from 'react'

export default function DateText({ date, placeholder }) {
  if (placeholder) {
    return (
      <div className='date-text placeholder'>
        <p>Date</p>
      </div>
    )
  }

  return (
    <div className='date-text'>
      <p>{date}</p>
    </div>
  )
}
