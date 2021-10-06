import React from 'react'

export default function Card(data) {
  return (
    <div>
      <h2>{data.title}</h2>
      <h3>{data.copyright}</h3>

      <p>{data.explanation}</p>

      <button>{data.date}</button>
    </div>
  )
}
