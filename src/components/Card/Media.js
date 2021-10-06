import React from 'react'

export default function Media(data) {
  const alt = () => {
    return null
  }

  return (
    <div>
      <a href={data.hdurl}>
        <img src={data.url} alt={alt} />
      </a>
    </div>
  )
}
