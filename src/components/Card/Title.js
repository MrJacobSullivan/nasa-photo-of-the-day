import React from 'react'

export default function Title({ title, author }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  )
}
