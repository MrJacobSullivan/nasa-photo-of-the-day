import React from 'react'

export default function DateText({ date, placeholder }) {
  if (placeholder) {
    return (
      <div>
        <p>Date</p>
      </div>
    )
  }

  return (
    <div>
      <p>{date}</p>
    </div>
  )
}
